import subprocess, sys
try:
    import pymupdf
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pymupdf', '-q'])
    import pymupdf

doc = pymupdf.open(r'c:\Users\MathEx-21\Desktop\Họp giáo viên\Họp giáo viên khối 7\Trao đổi toàn bộ giáo viên khối 7.pdf')
page = doc[2]  # Page 3 (0-indexed)
text = page.get_text()
print(text)
