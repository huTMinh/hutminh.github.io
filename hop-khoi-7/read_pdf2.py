import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import pymupdf

doc = pymupdf.open(r'c:\Users\MathEx-21\Desktop\Họp giáo viên\Họp giáo viên khối 7\Trao đổi toàn bộ giáo viên khối 7.pdf')
print(f'Total pages: {len(doc)}')
page = doc[2]
text = page.get_text()
if not text.strip():
    print('Page 3 text is empty. Trying to extract from all pages...')
    for i in range(len(doc)):
        t = doc[i].get_text()
        print(f'--- Page {i+1} ---')
        print(t[:500] if t.strip() else '(empty)')
