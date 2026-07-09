# Trang Web Cá Nhân & Blog Toán Học - hutminh.github.io

Chào mừng bạn đến với mã nguồn trang web cá nhân và blog toán học của bạn! Dự án được thiết kế tối giản, hiện đại bằng HTML, CSS, và JavaScript thuần (Vanilla JS), tích hợp công nghệ hiển thị công thức Toán học sắc nét **KaTeX** và tối ưu tuyệt đối để hoạt động mượt mà trên **GitHub Pages**.

---

## 🌟 Tính Năng Đặc Nổi Bật

1. **Giao Diện Glassmorphism Hiện Đại**: Thiết kế theo xu hướng kính mờ, tối giản, sang trọng. Chế độ tối (Dark Mode) mặc định và hỗ trợ chuyển đổi sang chế độ sáng (Light Mode).
2. **Blog Toán Học Chuyên Sâu**: Viết bài viết dạng Markdown kết hợp công thức toán LaTeX (qua thư viện siêu tốc KaTeX).
3. **Bố Cục Responsive**: Tương thích hoàn hảo trên các thiết bị di động, máy tính bảng và màn hình lớn.
4. **Không Cần Build**: Không cần Node.js, không cần Webpack hay Vite. Bạn chỉ cần sửa tệp tin và đẩy lên GitHub là trang web chạy ngay lập tức.
5. **Tìm kiếm & Bộ lọc Động**: Cho phép độc giả tìm kiếm bài viết tức thì theo từ khóa, chuyên mục hoặc thẻ tags.

---

## 🛠️ Cách Chạy Thử Nghiệm Tại Máy Cá Nhân

Vì trang web được viết bằng HTML/CSS/JS thuần túy, bạn có hai cách để xem trực tiếp tại máy tính của mình:

* **Cách 1 (Đơn giản nhất)**: Kích đúp chuột trực tiếp vào tệp `index.html` trong thư mục này để mở trên trình duyệt.
* **Cách 2 (Khuyên dùng)**: Mở thư mục này bằng VS Code hoặc một IDE bất kỳ, click chuột phải chọn **Open with Live Server** để có trải nghiệm phản hồi thay đổi mã nguồn ngay lập tức.

---

## 📝 Hướng Dẫn Viết Bài Blog Mới

Tất cả bài viết được lưu trữ trong tệp tin `assets/js/posts.js`. Để thêm một bài viết mới, bạn chỉ cần mở tệp đó và thêm một đối tượng bài viết vào trong mảng `BLOG_POSTS` theo cấu trúc sau:

```javascript
{
    id: "tieu-de-viet-lien-khong-dau",
    title: "Tiêu đề hiển thị của bài viết",
    description: "Đoạn mô tả ngắn gọn thu hút người đọc ngoài trang danh sách.",
    category: "so-hoc", // Các danh mục: "so-hoc", "dai-so", "giai-tich", "phuong-phap"
    date: "YYYY-MM-DD", // Ngày đăng bài viết (ví dụ: "2026-05-29")
    readTime: "X phút đọc",
    coverImage: "https://url-anh-bia-unsplash-hoac-anh-cua-ban.jpg",
    tags: ["Thẻ 1", "Thẻ 2", "Thẻ 3"],
    content: `Nội dung bài viết viết bằng định dạng Markdown.
    
## Tiêu đề cấp 2

Bạn có thể viết công thức Toán học cực kỳ dễ dàng:
- Công thức trên cùng một dòng: Sử dụng cặp dấu $ (ví dụ: $a^2 + b^2 = c^2$).
- Công thức dạng khối độc lập căn giữa: Sử dụng cặp dấu $$ 
  Ví dụ: 
  $$\\int_{a}^{b} f(x) dx = F(b) - F(a)$$
    `
}
```

*Lưu ý: Hãy chắc chắn các bài viết của bạn cách nhau bởi dấu phẩy `,` trong mảng `BLOG_POSTS`.*

---

## 🚀 Hướng Dẫn Tải Lên GitHub Để Triển Khai (Deploy)

Để đưa trang web hoạt động chính thức trên internet dưới tên miền của bạn là **`https://hutminh.github.io`**, bạn hãy làm theo các bước sau:

### Bước 1: Khởi tạo Git và liên kết Kho lưu trữ trên máy cá nhân
Mở terminal (như Git Bash hoặc PowerShell) tại thư mục `d:\Work station\hutminh\` và chạy các lệnh:

```bash
# Khởi tạo Git repository local
git init

# Đặt tên nhánh chính là main
git branch -M main

# Thêm kho lưu trữ GitHub của bạn làm remote (Nếu bạn đã tạo repository mang tên 'hutminh.github.io' trên GitHub)
git remote add origin https://github.com/hutminh/hutminh.github.io.git
```

### Bước 2: Commit mã nguồn
```bash
# Thêm toàn bộ các tệp tin vào khu vực chuẩn bị
git add .

# Ghi nhận các thay đổi với lời nhắn đầu tiên
git commit -m "Initialize personal website and math blog with KaTeX"
```

### Bước 3: Đẩy lên GitHub
```bash
# Đẩy mã nguồn lên nhánh chính của kho lưu trữ GitHub
git push -u origin main
```

Sau khi đẩy thành công, GitHub Pages sẽ tự động kích hoạt quá trình triển khai. Sau khoảng 1-2 phút, bạn có thể truy cập trực tiếp vào tên miền của mình: **`https://hutminh.github.io`** để thưởng thức thành quả!
