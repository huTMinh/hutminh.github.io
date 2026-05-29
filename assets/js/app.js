/**
 * CORE APPLICATION SCRIPT FOR HUTMINH.GITHUB.IO
 * Features: SPA Hash Router, Markdown Engine, KaTeX integration, Search/Filter, Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI Elements
    initLucideIcons();
    initTheme();
    initMobileMenu();
    initEmailCopy();
    
    // 2. Initialize Routing & Blog
    initRouter();
    initBlog();
});

// ==========================================================================
// 1. STYLING & GENERAL INTERACTION LOGIC
// ==========================================================================

/**
 * Initialize Lucide Icons
 */
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/**
 * Dark/Light Theme Switching
 */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    htmlElement.setAttribute('data-theme', initialTheme);
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Mobile Hamburguer Menu Toggle
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const isShown = navMenu.classList.contains('show');
        mobileToggle.innerHTML = isShown ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        initLucideIcons();
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
                initLucideIcons();
            }
        });
    });
}

/**
 * Copy Email To Clipboard with Tooltip Interaction
 */
function initEmailCopy() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (!copyBtn) return;
    
    const emailEl = document.getElementById('email-address');
    const copyIcon = document.getElementById('copy-icon');
    const tooltip = document.getElementById('copy-tooltip');
    
    copyBtn.addEventListener('click', () => {
        const emailText = emailEl.textContent;
        
        navigator.clipboard.writeText(emailText).then(() => {
            // Update Tooltip Text
            tooltip.textContent = 'Đã sao chép!';
            copyIcon.setAttribute('data-lucide', 'check');
            initLucideIcons();
            
            // Revert after 2 seconds
            setTimeout(() => {
                tooltip.textContent = 'Sao chép';
                copyIcon.setAttribute('data-lucide', 'copy');
                initLucideIcons();
            }, 2000);
        }).catch(err => {
            console.error('Không thể sao chép email: ', err);
        });
    });
}


// ==========================================================================
// 2. ROUTING LOGIC (SPA HASH ROUTER)
// ==========================================================================

/**
 * SPA Router based on URL hashes (#home, #blog, #contact)
 */
function initRouter() {
    const handleRoute = () => {
        const hash = window.location.hash || '#home';
        
        // Hide all main sections
        const sections = document.querySelectorAll('.view-section');
        sections.forEach(s => s.classList.remove('active'));
        
        // Reset nav links styling
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Handle sub-route for blog detail view e.g., #blog/so-nguyen-to
        if (hash.startsWith('#blog/')) {
            const postId = hash.split('#blog/')[1];
            
            // Active blog nav item
            const blogLink = document.querySelector('.nav-link[data-section="blog"]');
            if (blogLink) blogLink.classList.add('active');
            
            // Show blog section
            const blogSection = document.getElementById('blog');
            if (blogSection) blogSection.classList.add('active');
            
            // Show single post view, hide list view
            document.getElementById('blog-list-view').classList.add('hidden');
            document.getElementById('blog-detail-view').classList.remove('hidden');
            
            renderPostDetail(postId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Standard sections mapping
            const targetSectionId = hash.substring(1); // 'home', 'blog', 'contact'
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Active Navbar Link
                const activeLink = document.querySelector(`.nav-link[data-section="${targetSectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
                
                // If it is main blog route, reset detail view to list view
                if (targetSectionId === 'blog') {
                    document.getElementById('blog-list-view').classList.remove('hidden');
                    document.getElementById('blog-detail-view').classList.add('hidden');
                }
            } else {
                // Fallback to home
                document.getElementById('home').classList.add('active');
                const homeLink = document.querySelector('.nav-link[data-section="home"]');
                if (homeLink) homeLink.classList.add('active');
            }
            
            window.scrollTo({ top: 0 });
        }
    };
    
    // Listen to hash change events
    window.addEventListener('hashchange', handleRoute);
    // Trigger on initial page load
    handleRoute();
}


// ==========================================================================
// 3. BLOG CONSOLE LOGIC & SEARCH/FILTER
// ==========================================================================

let activeCategory = 'all';
let searchQuery = '';

/**
 * Initialize Blog Search, Filters, and Cards rendering
 */
function initBlog() {
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const backBtn = document.getElementById('back-to-blog-btn');
    
    // Search input listener
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderBlogCards();
    });
    
    // Category chips listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            activeCategory = btn.getAttribute('data-category');
            renderBlogCards();
        });
    });
    
    // Back button in single post view
    backBtn.addEventListener('click', () => {
        window.location.hash = '#blog';
    });
    
    // Render initial blog list
    renderBlogCards();
}

/**
 * Render blog post cards to the grid based on search & category filters
 */
function renderBlogCards() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;
    
    // Filter posts
    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        
        const matchesSearch = 
            post.title.toLowerCase().includes(searchQuery) ||
            post.description.toLowerCase().includes(searchQuery) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery));
            
        return matchesCategory && matchesSearch;
    });
    
    // Clear container
    postsContainer.innerHTML = '';
    
    // If no posts found, render empty state
    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = `
            <div class="no-results slide-up">
                <i data-lucide="search-code"></i>
                <h3>Không tìm thấy bài viết nào</h3>
                <p>Thử tìm kiếm với từ khóa khác hoặc chuyển danh mục lọc bài viết.</p>
            </div>
        `;
        initLucideIcons();
        return;
    }
    
    // Sort posts by date (newest first)
    const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Render each post card
    sortedPosts.forEach(post => {
        const dateFormatted = formatDate(post.date);
        const card = document.createElement('div');
        card.className = 'post-card slide-up';
        card.setAttribute('data-id', post.id);
        
        // Set category label
        const categoryLabel = getCategoryLabel(post.category);
        
        // Tags elements
        const tagsHtml = post.tags.map(tag => `<span class="mini-tag">#${tag}</span>`).join('');
        
        card.innerHTML = `
            <div class="post-cover-wrapper">
                <img src="${post.coverImage}" alt="${post.title}" class="post-cover" loading="lazy">
                <span class="post-card-category">${categoryLabel}</span>
            </div>
            <div class="post-card-body">
                <div class="post-card-meta">
                    <span class="meta-item"><i data-lucide="calendar"></i> ${dateFormatted}</span>
                    <span class="meta-item"><i data-lucide="clock"></i> ${post.readTime}</span>
                </div>
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-desc">${post.description}</p>
            </div>
            <div class="post-card-footer">
                ${tagsHtml}
            </div>
        `;
        
        // Card click triggers navigation to detail route
        card.addEventListener('click', () => {
            window.location.hash = `#blog/${post.id}`;
        });
        
        postsContainer.appendChild(card);
    });
    
    initLucideIcons();
}

/**
 * Render dynamic blog post detail
 */
function renderPostDetail(postId) {
    const post = BLOG_POSTS.find(p => p.id === postId);
    
    if (!post) {
        document.getElementById('post-detail-title').textContent = "Không tìm thấy bài viết";
        document.getElementById('post-detail-content').innerHTML = "<p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>";
        document.getElementById('post-detail-category').textContent = "Lỗi";
        document.getElementById('post-detail-cover-wrapper').classList.add('hidden');
        return;
    }
    
    // Populate header info
    document.getElementById('post-detail-category').textContent = getCategoryLabel(post.category);
    document.getElementById('post-detail-title').textContent = post.title;
    document.getElementById('post-detail-date').textContent = formatDate(post.date);
    document.getElementById('post-detail-read-time').textContent = post.readTime;
    
    // Set Cover Image
    const coverWrapper = document.getElementById('post-detail-cover-wrapper');
    const coverImg = document.getElementById('post-detail-cover');
    if (post.coverImage) {
        coverWrapper.classList.remove('hidden');
        coverImg.src = post.coverImage;
        coverImg.alt = post.title;
    } else {
        coverWrapper.classList.add('hidden');
    }
    
    // Set Tags
    const tagsContainer = document.getElementById('post-detail-tags');
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag-chip"><i data-lucide="tag"></i> ${tag}</span>`).join('');
    
    // Render Markdown + LaTeX equations
    const htmlContent = parseMarkdown(post.content);
    const contentContainer = document.getElementById('post-detail-content');
    contentContainer.innerHTML = htmlContent;
    
    // Execute KaTeX rendering engine on this container
    renderMath(contentContainer);
    
    initLucideIcons();
}


// ==========================================================================
// 4. MARKDOWN & LATEX PARSING ENGINE
// ==========================================================================

/**
 * Render LaTeX equations inside DOM element using KaTeX CDN
 */
function renderMath(element) {
    if (typeof renderMathInElement !== 'undefined') {
        try {
            renderMathInElement(element, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false
            });
        } catch (e) {
            console.error("Lỗi khi render công thức toán bằng KaTeX: ", e);
        }
    } else {
        console.warn("KaTeX chưa được tải hoặc không khả dụng.");
    }
}

/**
 * Super lightweight Markdown-to-HTML parser
 * Preserves math equations intact so KaTeX can render them later
 */
function parseMarkdown(mdText) {
    if (!mdText) return '';
    
    let html = mdText;
    
    // 1. Temporary isolate block equations $$ ... $$ and inline equations $ ... $ 
    // to prevent markdown syntax replacement inside math formulas (e.g. asterisks, underscores)
    const equations = [];
    
    // Extract Block Equations
    html = html.replace(/\$\$([\s\S]*?)\$\$/g, (match, eq) => {
        const id = `%%MATHBLOCK${equations.length}%%`;
        equations.push({ id, content: match });
        return id;
    });
    
    // Extract Inline Equations
    html = html.replace(/\$([\s\S]*?)\$/g, (match, eq) => {
        const id = `%%MATHINLINE${equations.length}%%`;
        equations.push({ id, content: match });
        return id;
    });

    // 2. Parse Headers
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // 3. Parse Blockquotes
    html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>');
    
    // 4. Parse Monospace Code blocks (```lang ... ```)
    html = html.replace(/```(?:\w+)?\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // 5. Parse Inline Code (`code`)
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // 6. Parse Lists (Unordered & Ordered)
    // Note: Simple replacements suitable for clean bullet lists
    html = html.replace(/^\- (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
    
    html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<ul>)?(<li>.*?<\/li>)(<\/ul>)?/g, (match, ulOpen, content, ulClose) => {
        if (ulOpen) return match; // Skip if already unordered list
        return `<ol>${content}</ol>`;
    });
    // Consolidate adjacent lists
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    html = html.replace(/<\/ol>\s*<ol>/g, '');

    // 7. Parse Bold and Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

    // 8. Handle paragraphs: Split by double newlines, wrap in <p> if they are not block HTML elements
    const blockTags = ['h1', 'h2', 'h3', 'blockquote', 'pre', 'ul', 'ol', 'li'];
    const lines = html.split(/\n\s*\n/);
    
    html = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        
        // Check if starts with a block tag
        const isBlock = blockTags.some(tag => trimmed.startsWith(`<${tag}`) || trimmed.startsWith(`</${tag}`));
        
        // Check if it is one of our placeholders
        const isPlaceholder = trimmed.startsWith('%%MATHBLOCK') || trimmed.startsWith('%%MATHINLINE');
        
        if (isBlock || (isPlaceholder && trimmed.includes('MATHBLOCK'))) {
            return trimmed;
        }
        return `<p>${trimmed}</p>`;
    }).join('\n');

    // 9. Restore isolated equations
    equations.forEach(eq => {
        html = html.replace(eq.id, eq.content);
    });

    return html;
}


// ==========================================================================
// 5. HELPER FUNCTIONS
// ==========================================================================

/**
 * Translate category slug to user-friendly label
 */
function getCategoryLabel(category) {
    const mapping = {
        'dai-so': 'Đại số',
        'giai-tich': 'Giải tích',
        'so-hoc': 'Số học',
        'phuong-phap': 'Phương pháp học'
    };
    return mapping[category] || 'Kiến thức';
}

/**
 * Format string date to DD/MM/YYYY
 */
function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const parts = dateString.split('-');
        if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN');
    } catch (e) {
        return dateString;
    }
}
