/**
 * BLOG POSTS DATABASE
 * Contains math-oriented blog posts in Markdown + LaTeX format.
 * Add new posts by appending to the BLOG_POSTS array.
 * IMPORTANT: Because this is a Javascript file, any backslash '\' in LaTeX equations
 * must be escaped as '\\' to prevent Javascript from swallowing it.
 */
const BLOG_POSTS = [
    {
        id: "suc-manh-toan-hoc",
        title: "Sức mạnh của Toán học",
        description: "Đây là một bài giảng về sức mạnh của những ý tưởng đơn giản trong toán học. Một cái nhìn sâu sắc từ nhà toán học John Conway về cách những ý tưởng thực sự làm chấn động thế giới lại là những ý tưởng đơn giản.",
        category: "phuong-phap",
        date: "2026-07-15",
        readTime: "8 phút đọc",
        coverImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
        tags: ["Toán học", "John Conway", "Tư duy"],
        content: `*Tác giả gốc: **JOHN CONWAY***

Đây là một bài giảng về sức mạnh của những ý tưởng đơn giản trong toán học.

Điều tôi thích làm là lấy một thứ mà người khác cho là phức tạp và khó hiểu, rồi tìm ra một ý tưởng đơn giản, sao cho bất kỳ ai – và trong trường hợp này, là các bạn – cũng có thể hiểu được thứ phức tạp đó.

Những ý tưởng đơn giản này có thể mạnh mẽ một cách đáng kinh ngạc, và chúng cũng khó tìm một cách đáng kinh ngạc. Rất nhiều lần, phải mất cả một thế kỷ hoặc hơn để ai đó nghĩ ra một ý tưởng đơn giản; thực tế là thường mất đến hai ngàn năm, vì người Hy Lạp cổ đại lẽ ra đã có thể nghĩ ra ý tưởng đó, nhưng họ lại không làm vậy.

Mọi người thường có một quan niệm sai lầm rằng những gì mà một người như Einstein đã làm là rất phức tạp. Không, những ý tưởng thực sự làm chấn động thế giới lại là những ý tưởng đơn giản. Nhưng những ý tưởng này thường mang một sự tinh tế nào đó, điều mà ngăn cản người ta nghĩ ra chúng. Ý tưởng đơn giản bắt nguồn từ một câu hỏi mà chưa ai từng nghĩ đến việc hỏi.

Lấy ví dụ về câu hỏi Trái đất là hình cầu hay mặt phẳng. Liệu những người cổ đại có ngồi xuống và nghĩ: "Nào hãy xem - nó là gì, hình cầu hay mặt phẳng?" Không, tôi nghĩ tình hình thực tế là không ai có thể mường tượng ra ý tưởng Trái đất hình cầu - cho đến khi ai đó, chú ý thấy các vì sao dường như lặn ở phía Tây và mười hai giờ sau lại mọc lên ở phía Đông, nảy ra ý tưởng rằng mọi thứ có thể đang quay vòng - điều rất khó dung hòa với quan niệm đã được chấp nhận về một Trái đất phẳng.

Một ý tưởng thú vị khác là khái niệm 'trên' (up). 'Trên' có phải là một khái niệm tuyệt đối? Nó từng là như vậy, trong vật lý Aristotle. Chỉ đến vật lý Newton, người ta mới nhận ra rằng 'trên' là một khái niệm cục bộ - rằng 'trên' của người này có thể là 'dưới' của người khác (ví dụ nếu người thứ nhất ở Cambridge và người thứ hai ở Úc). Khám phá ra thuyết tương đối của Einstein cũng phụ thuộc vào một nhận thức tương tự về bản chất của thời gian: rằng thời gian của một người có thể là sự chuyển động ngang của người khác.

Thôi được, hãy quay lại những điều cơ bản. Tôi muốn dẫn các bạn đi qua một vài ý tưởng đơn giản liên quan đến hình vuông, hình tam giác và các nút thắt.

## Hình vuông
Hãy bắt đầu bằng một chứng minh mới cho một định lý cũ. Câu hỏi là "đường chéo của một hình vuông có thông ước (commensurable) với cạnh của nó hay không?" Hay nói theo thuật ngữ hiện đại, "căn bậc hai của 2 có phải là tỉ số của hai số nguyên không?" Câu hỏi này đã dẫn đến một khám phá vĩ đại, được ghi công cho những người theo trường phái Pythagoras, đó là khám phá ra số vô tỉ.

Hãy đặt câu hỏi theo một cách khác. Liệu có thể có hai hình vuông với cạnh bằng một số nguyên $n$, có tổng diện tích bằng hệt diện tích của một hình vuông duy nhất với cạnh bằng một số nguyên khác, $m$?

Điều này suýt nữa thì xảy ra đối với các hình vuông $12 \\times 12$: 12 nhân 12 là 144; và 144 cộng 144 bằng 288, thực tế không hoàn toàn bằng 289, tức là 17 nhân 17. Vì vậy, $17/12 = 1.41666 \\dots$ rất gần với $\\sqrt{2} = 1.41421 \\dots$ - nó chỉ sai lệch hai phần nghìn.

Nhưng chúng ta không hỏi liệu bạn có thể tìm thấy các số nguyên $m$ và $n$ thỏa mãn một cách gần đúng $m^2 = 2n^2$ hay không. Chúng ta muốn xác định xem điều đó có thể xảy ra một cách chính xác hay không.

Chà, hãy giả sử rằng điều đó có thể làm được. Khi đó phải có một số nguyên $m$ nhỏ nhất để điều này xảy ra. Hãy vẽ một hình ảnh sử dụng $m$ nhỏ nhất có thể đó.

Hãy đặt hai hình vuông màu xám nhỏ (kích thước $n \\times n$) vào góc trên bên phải và góc dưới bên trái của hình vuông lớn (kích thước $m \\times m$).

Bây giờ, một phần của hình vuông lớn bị che phủ hai lần, và một phần của hình vuông lớn không bị che phủ chút nào, bởi các hình vuông nhỏ. Phần bị che phủ hai lần là giao của hai hình vuông nhỏ, và những phần không bị che phủ là phần thừa ra. Vì diện tích của hình vuông lớn ban đầu bằng chính xác tổng diện tích của hai hình vuông nhỏ, nên diện tích của phần bị che phủ hai lần phải bằng chính xác tổng diện tích của các phần không bị che phủ.

Bây giờ, kích thước của ba vùng này là bao nhiêu? Phần bị phủ hai lần là một hình vuông, và cạnh của hình vuông đó là một số nguyên, bằng $2n - m$; và hai vùng không bị phủ cũng là các hình vuông, với cạnh bằng $m - n$. Vì vậy, bắt đầu từ số nguyên $m$ được cho là nhỏ nhất có thể, sao cho $m^2$ gấp đôi bình phương của một số nguyên khác, chúng ta đã tìm thấy rằng có một số nguyên còn nhỏ hơn $(2n - m)$ cũng có tính chất này. Vậy nên không thể có nghiệm nhỏ nhất. Hãy nhớ rằng, nếu có bất kỳ nghiệm nào, một trong số chúng phải là nghiệm nhỏ nhất. Vì vậy chúng ta kết luận rằng không có nghiệm nào cả.

Kết quả này có những hệ quả tri thức to lớn. Không phải mọi số thực đều là tỉ số của các số nguyên.

Chứng minh mới này được tạo ra bởi một người bạn của tôi tên là Stanley Tennenbaum, người mà sau đó đã bỏ ngang ngành toán học.

## Hình tam giác
Lấy một hình tam giác, bất kỳ hình tam giác nào bạn thích, và chia ba mỗi góc của nó. Nghĩa là, cắt mỗi góc thành ba phần, tất cả có cùng kích cỡ.
Kéo dài các đường chia ba cho đến khi chúng gặp nhau tại ba điểm.
Sau đó, một định lý khá đáng chú ý của Frank Morley nói rằng tam giác được tạo bởi các điểm này là tam giác đều.
Và điều này đúng với bất kỳ tam giác xuất phát nào.

Định lý Morley nổi tiếng là một định lý thực sự khó chứng minh. Rất dễ để phát biểu, nhưng rất khó chứng minh. Morley đã phát biểu kết quả này vào khoảng năm 1900, và chứng minh được xuất bản đầu tiên mãi khoảng 15 năm sau mới xuất hiện. Tuy nhiên, tôi đã tìm ra một chứng minh đơn giản, với sự trợ giúp của bạn tôi, Peter Doyle.

Chúng ta có thể chứng minh định lý Morley một cách đơn giản như sau. Đầu tiên, hãy cho tôi biết ba góc $A$, $B$, $C$ của tam giác ban đầu của bạn. Hãy nhớ rằng chúng phải có tổng bằng 180 độ. Đây là kế hoạch. Tôi sẽ bắt đầu từ một tam giác đều có kích thước nào đó và xây dựng sáu tam giác khác xung quanh nó, và dán chúng lại với nhau để tạo ra một tam giác có các góc $A$, $B$, và $C$, giống hệt của bạn; do đó với một sự lựa chọn nào đó về kích thước của tam giác đều, phép dựng hình của tôi sẽ tái tạo lại chính xác tam giác ban đầu của bạn; hơn nữa phương pháp dựng hình sẽ chứng minh rằng nếu bạn chia ba các góc của tam giác của mình, bạn sẽ tìm thấy tam giác đều của tôi ở giữa.

Quá trình lắp ghép trông giống như một phiên bản bị vỡ vụn của tam giác, và thực sự là trong quá trình đó chúng ta sẽ dán các mảnh lại với nhau để tạo thành tam giác đó; nhưng để hiểu đúng chứng minh, bạn phải nghĩ về sáu tam giác mới như những mảnh ghép mà chúng ta sẽ định nghĩa, bắt đầu từ tam giác đều của tôi, với sự trợ giúp của các giá trị $A$, $B$, và $C$ mà bạn đã cung cấp. 

Chúng ta dựng sáu tam giác mới bằng cách đầu tiên định nghĩa hình dạng của chúng, sau đó định nghĩa kích thước của chúng. Để định nghĩa hình dạng của sáu tam giác, chúng ta cố định các góc của chúng. Chúng ta đặt $\\alpha = A/3$, $\\beta = B/3$, và $\\gamma = C/3$. Chúng ta đưa ra một ký hiệu cho các góc: với bất kỳ góc $\\theta$ nào, chúng ta định nghĩa $\\theta^+$ để biểu thị $\\theta + 60$ và $\\theta^{++}$ để biểu thị $\\theta + 120$. Vì vậy, ví dụ, ba góc trong của tam giác đều (tất cả đều là 60 độ) có thể được đánh dấu là $0^+$.

Chúng ta cố định các góc cho các mảnh ghép xung quanh. Tiếp theo, chúng ta cố định kích thước của mỗi tam giác tiếp giáp với tam giác đều bằng cách làm cho độ dài của một cạnh bằng với độ dài cạnh của tam giác đều.

Tiếp theo, chúng ta cố định kích thước của ba tam giác tù; bằng cách áp dụng các tính chất đối xứng và độ dài các cạnh chung, chúng ta có thể làm cho tất cả các mảnh ghép khớp với nhau một cách hoàn hảo. Tổng các góc xung quanh một đỉnh bên trong điển hình là $\\alpha^+ + \\beta^{++} + \\gamma^+ + 0^+$; đó là năm dấu $+$, trị giá 300 độ, cộng với $\\alpha + \\beta + \\gamma$ (bằng 60 độ), mang lại tổng cộng 360 độ.

Như vậy, bằng cách dán bảy mảnh lại với nhau, tôi đã tạo ra một tam giác có các góc của bạn, mà định lý Morley đúng cho nó. Do đó, định lý Morley đúng cho tam giác của bạn, và cho bất kỳ tam giác nào bạn có thể đã chọn.

## Các nút thắt (Knots)
Cuối cùng, tôi muốn kể cho các bạn một chút về lý thuyết nút thắt, và về một ý tưởng đơn giản mà tôi đã có khi còn là một học sinh trung học ở Liverpool nhiều năm trước.

Đầu tiên, có gì to tát về các nút thắt? Nút thắt dường như không có gì đặc biệt mang tính toán học. Chà, điều đầu tiên khó khăn về các nút thắt là câu hỏi 'Có bất kỳ nút thắt nào không?'

Nói cách khác, nút thắt này có thể được tháo ra không? (Nhân tiện, theo quy ước, người ta gắn hai đầu tự do của một nút thắt với nhau, để sợi dây tạo thành một vòng khép kín). Việc không ai tháo được nó không có nghĩa là bạn nhất thiết không thể làm được. Nó có thể chỉ có nghĩa là mọi người quá ngốc nghếch.

Bây giờ, khi chúng ta nghịch ngợm với một đoạn dây, thay đổi từ cấu hình này sang cấu hình khác, có ba điều cơ bản có thể xảy ra. Chúng được gọi là các phép biến đổi Reidemeister. Chúng ta sẽ gọi các phép biến đổi này là $R_1$, $R_2$, và $R_3$.

$R_1$ bao gồm việc xoắn hoặc tháo xoắn một vòng đơn, giữ nguyên mọi thứ khác. <br/>
$R_2$ lấy một vòng và ấn nó xuống dưới một đoạn dây liền kề. <br/>
$R_3$ là phép trượt, đưa một đoạn dây đi qua vị trí mà hai đoạn dây khác cắt nhau.

Tất cả các biến dạng nút thắt đều có thể được thu gọn thành một chuỗi ba phép biến đổi này.

Bây giờ, liệu có một chuỗi các phép biến đổi này cho phép bạn bắt đầu với nút thắt ở bên trái và kết thúc bằng 'vòng tròn không thắt' (unknot) ở bên phải không? Nếu chúng ta muốn chứng minh rằng một nút thắt thực sự tồn tại, chúng ta phải chỉ ra rằng không tồn tại chuỗi phép biến đổi nào như vậy.

Những gì tôi sẽ làm là giới thiệu một khái niệm mà tôi gọi là \\textit{knumbering} (đánh số nút thắt) của các nút thắt. Để tạo ra một knumbering, bạn gán một con số nhỏ cho bất kỳ đoạn dây nào có thể nhìn thấy; và tại nơi một đoạn dây biến mất dưới một đoạn dây khác, hai con số liên kết với đoạn dây nằm dưới phải liên hệ với nhau theo một cách phụ thuộc vào con số trên đoạn dây nằm trên. Cụ thể, nếu con số trên đoạn dây nằm trên là $b$, và các con số của đoạn dây nằm dưới ở hai bên của đoạn dây nằm trên là $a$ và $c$, thì '$a, b, c$' phải tạo thành một cấp số cộng. Điều đó có nghĩa là lượng mà bạn tăng từ $a$ lên $b$ phải chính xác bằng lượng mà bạn tăng từ $b$ lên $c$.

Một điều đáng chú ý về điều kiện cấp số cộng là nó là bất biến: Tôi có thể đẩy tất cả các số $a$, $b$, và $c$ lên hoặc xuống bằng một lượng bất kỳ mà tôi muốn, và chúng vẫn sẽ thỏa mãn điều kiện cấp số cộng.

Trong quá trình đánh số, nếu gặp mâu thuẫn (ví dụ, một sợi dây phải mang hai giá trị 1 và 4), một trong những sức mạnh to lớn của phương pháp toán học là tôi có thể định nghĩa mọi thứ theo ý tôi muốn; vậy nên bây giờ tôi sẽ định nghĩa 4 bằng 1. (Các nhà toán học gọi kiểu đẳng thức này là 'đồng dư modulo 3'.)

Điểm cốt lõi của những knumbering này là gì? Bất kỳ knumbering hợp lệ nào vẫn là một knumbering hợp lệ khi một phép biến đổi Reidemeister được thực hiện hoặc hoàn tác. Điều này ngụ ý rằng số lượng các knumbering có thể có được bảo toàn qua các phép biến đổi.

Vòng tròn không thắt chỉ có đúng ba knumbering (toàn 0, toàn 1, toàn 2 modulo 3).
Trong khi đó, nút dẹt (trefoil knot) có ít nhất bốn knumbering.

Vì vậy, chúng ta có thể chứng minh rằng nút dẹt không thể được tháo ra, bởi vì nó có một số lượng knumbering khác với vòng tròn không thắt. Điều này chứng minh rằng các nút thắt (thực sự) tồn tại.

## Mớ bòng bong (Tangles)
Tôi thường làm một trò ảo thuật nhỏ bao gồm việc buộc các nút thắt. Các mớ bòng bong (tangles) là những đoạn nút thắt với bốn đầu lòi ra, và chúng có một mối liên hệ bất ngờ với số học.

Tangles được trình bày tốt nhất bởi bốn vũ công nhảy vuông (square-dancers). Hai vũ công giữ hai đầu của một sợi dây, và hai vũ công giữ hai đầu của sợi dây kia.

Chúng ta có thể thao tác với mớ bòng bong bằng cách sử dụng hai phép biến đổi, gọi là \\textit{twist'em up} (xoắn lên) và \\textit{turn'em roun'} (quay vòng).

Khi chúng ta \\textit{twist'em up}, hai vũ công ở phía bên tay phải đổi chỗ cho nhau, vũ công bên dưới đi luồn dưới sợi dây của vũ công bên trên. Mỗi mớ bòng bong có một giá trị, và việc "twist'em up" sẽ thay đổi giá trị của mớ bòng bong từ $t$ thành $t+1$.

Khi chúng ta \\textit{turn'em roun'}, tất cả bốn vũ công di chuyển một vị trí theo chiều kim đồng hồ. Phép biến đổi này thay đổi giá trị của một mớ bòng bong từ $t$ thành $-1/t$.

Để bắt đầu, mớ bòng bong ban đầu với hai sợi dây song song không đan chéo được gán giá trị $t = 0$.

Những gì bạn sẽ thấy là nếu bạn sử dụng kiến thức số học của mình để đưa giá trị về 0 thông qua các bước xoắn và quay ngược lại, thì mớ bòng bong sẽ thực sự được gỡ rối. Thật là ma thuật!

Đây là một ví dụ về một ý tưởng rất đơn giản. Chúng ta đã biết một ít về số học - nhưng chỉ trong bối cảnh các con số; và chúng ta không nhận ra nó áp dụng cho các nút thắt. Vì vậy, trên thực tế, nhánh nhỏ này của lý thuyết nút thắt thực chất chỉ là số học.

Sau khi tìm thấy mối liên hệ bất ngờ này, hãy kết thúc bằng một điều gì đó thú vị. Bắt đầu từ $t = 0$, và \\textit{turn'em roun'}. Chúng ta nhận được gì?
$$t = -1/0$$
Bây giờ chúng ta có $-1/0$, đó không phải là một loại vô cực, hay âm vô cực sao?

Hãy xem bạn nhận được gì khi cộng thêm một vào vô cực (bằng cách thực hiện \\textit{twist'em up}).
$$\\infty + 1 = \\infty!$$

Điều đó không tuyệt sao? Chúng ta cộng thêm một vào vô cực, và chúng ta lại nhận được vô cực.

Như vậy, đây là một ý tưởng mạnh mẽ mà những nhà toán học chúng tôi sử dụng: Bạn lấy một thứ bạn đã học ở một nơi, và áp dụng nó cho một thứ khác, ở một nơi mà có vẻ như không hề có bất kỳ yếu tố toán học nào, nhưng thực tế là có.`
    },
    {
        id: "ubuntu-dual-boot",
        title: "Hướng dẫn cài đặt Ubuntu Dual Boot với Windows",
        description: "Việc cài đặt song định (Dual Boot) Ubuntu và Windows trên cùng một máy tính giúp bạn tận dụng được thế mạnh của cả hai hệ điều hành: Windows cho giải trí, phần mềm chuyên dụng và Ubuntu cho lập trình, bảo mật.",
        category: "thu-thuat",
        date: "2026-06-24",
        readTime: "10 phút đọc",
        coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
        tags: ["Ubuntu", "Linux", "Dual Boot", "Windows"],
        content: `# Hướng dẫn cài đặt Ubuntu Dual Boot với Windows

Việc cài đặt song song (Dual Boot) Ubuntu và Windows trên cùng một máy tính giúp bạn tận dụng được thế mạnh của cả hai hệ điều hành: Windows cho giải trí, chơi game, phần mềm chuyên dụng và Ubuntu cho lập trình, bảo mật và sự ổn định. 

Dưới đây là hướng dẫn chi tiết từng bước để thực hiện an toàn.

> [!WARNING]
> Mặc dù quá trình cài đặt là an toàn nếu thực hiện đúng, bạn **bắt buộc phải sao lưu các dữ liệu quan trọng** để đề phòng trường hợp thao tác nhầm hoặc mất điện trong quá trình phân vùng ổ cứng.

---

## 1. Chuẩn bị công cụ

Trước khi bắt đầu, bạn cần chuẩn bị:
- **USB:** Dung lượng tối thiểu 8GB (Lưu ý: toàn bộ dữ liệu hiện có trên USB sẽ bị xóa sạch).
- **File ISO Ubuntu:** Tải phiên bản mới nhất (khuyến nghị dùng các bản LTS như 22.04 LTS hoặc 24.04 LTS) từ [trang chủ Ubuntu](https://ubuntu.com/download/desktop).
- **Phần mềm Rufus:** Tải phần mềm [Rufus](https://rufus.ie/) để tiến hành tạo USB Boot.

## 2. Tạo USB Boot Ubuntu

1. Cắm USB vào máy tính Windows.
2. Mở phần mềm **Rufus** (không cần cài đặt, chạy trực tiếp).
3. Trong mục **Device**, chọn đúng tên USB của bạn.
4. Trong mục **Boot selection**, nhấn nút **SELECT** và tìm đến file ISO Ubuntu vừa tải.
5. Ở mục **Partition scheme**, chọn **GPT** (nếu máy tính của bạn dùng chuẩn UEFI đời mới, hầu hết các máy tính từ 2014 trở lại đây đều dùng chuẩn này). Target system sẽ tự động nhảy sang UEFI (non-CSM).
6. Nhấn **START** để bắt đầu.
   - *Lưu ý:* Nếu có hộp thoại hiện ra hỏi về tải thêm Syslinux hay hỏi ghi dưới dạng ISOHybrid/DD Image, hãy chọn chế độ khuyên dùng (Recommend) và nhấn OK.
7. Đợi vài phút cho đến khi thanh tiến trình chạy xong và Rufus báo **READY**. Lúc này bạn đã có 1 chiếc USB chứa bộ cài Ubuntu.

## 3. Tạo phân vùng trống cho Ubuntu từ Windows

Ubuntu cần một khoảng trống riêng trên ổ cứng để cài đặt. Chúng ta sẽ "cắt" dung lượng này từ Windows.

1. Chuột phải vào nút **Start** trên thanh taskbar của Windows (hoặc nhấn tổ hợp \`Win + X\`), chọn **Disk Management**.
2. Tìm phân vùng ổ đĩa có dung lượng trống nhiều (thường là ổ C hoặc D).
3. Chuột phải vào phân vùng đó và chọn **Shrink Volume...**
4. Hệ thống sẽ mất vài giây để tính toán. Ở ô *Enter the amount of space to shrink in MB*, nhập dung lượng bạn muốn dành cho Ubuntu. 
   - *Khuyến nghị:* Tối thiểu là \`30000\` (khoảng 30GB). Nếu bạn định dùng Ubuntu lâu dài, hãy cấp khoảng \`50000\` (50GB) hoặc hơn.
5. Nhấn nút **Shrink**. Bạn sẽ thấy một phân vùng màu đen xuất hiện có nhãn là **Unallocated**. 
   > [!IMPORTANT]
   > Hãy giữ nguyên vùng đen (Unallocated) này. Tuyệt đối không được nhấn chuột phải chọn New Simple Volume. Ubuntu sẽ tự động dùng phần chưa định dạng này.

## 4. Thiết lập lại Windows và BIOS/UEFI

### Tắt Fast Startup trên Windows
Tính năng này của Windows có thể khóa ổ đĩa, khiến Ubuntu không thể can thiệp cài đặt:
1. Mở **Control Panel** -> Chọn **Power Options** -> Chọn **Choose what the power buttons do** ở cột bên trái.
2. Nhấn vào dòng chữ xanh *Change settings that are currently unavailable* (yêu cầu quyền Admin).
3. Bỏ dấu tích ở ô **Turn on fast startup (recommended)** rồi nhấn **Save changes**.

### Tắt Secure Boot (Tùy chọn nhưng nên làm)
1. Khởi động lại máy tính và nhấn liên tục phím vào BIOS (thường là \`F2\`, \`F10\`, \`F12\` hoặc \`Del\` tùy hãng máy, ví dụ Dell là F2, HP là F10).
2. Tìm đến tab **Security** hoặc **Boot**.
3. Chuyển mục **Secure Boot** sang trạng thái **Disabled**.
4. Lưu thiết lập (thường là phím \`F10\`), chọn Yes và thoát.

## 5. Boot vào USB và Cài đặt Ubuntu

1. Cắm USB Boot vào máy, khởi động lại và nhấn liên tục phím tắt vào **Boot Menu** (ví dụ: \`F12\` cho Dell/Lenovo, \`F9\` cho HP, \`F8\` cho Asus...).
2. Màn hình Boot Menu hiện ra, dùng phím mũi tên chọn khởi động từ USB của bạn (thường có chữ UEFI: Tên USB).
3. Tại menu đầu tiên của Ubuntu, chọn dòng **Try or Install Ubuntu** và nhấn Enter.
4. Khi giao diện đồ họa cài đặt hiện lên:
   - Chọn ngôn ngữ (khuyến nghị dùng **English**) và nhấn **Install Ubuntu**.
   - Thiết lập bàn phím: Chọn **English (US)**.
   - Kết nối Wi-Fi (nếu cần thiết để tải bản cập nhật trong lúc cài, hoặc có thể bỏ qua).
   - Ở phần **Updates and other software**: Chọn *Normal installation* và tích vào dòng *Install third-party software for graphics and Wi-Fi hardware* để tự cài driver card màn hình/wifi. Nhấn Continue.
5. **Chọn kiểu cài đặt (Installation type) - BƯỚC QUAN TRỌNG NHẤT:**
   - Hệ thống sẽ quét thấy bạn đang dùng Windows và cung cấp tùy chọn đầu tiên: **Install Ubuntu alongside Windows Boot Manager**. 
   - **Đây là lựa chọn dễ và an toàn nhất**. Hãy tích vào mục này và nhấn Continue. Ubuntu sẽ tự động nhận diện vùng trống **Unallocated** bạn đã tạo ở Bước 3 để tự cài vào đó.
   - Nhấn **Install Now** và chọn Continue khi có hộp thoại xác nhận ghi thay đổi lên ổ đĩa.
6. Cài đặt các thông tin cá nhân:
   - Chọn múi giờ trên bản đồ (Ví dụ: Ho Chi Minh).
   - Điền tên hiển thị, tên máy tính, tên đăng nhập (Username) và **Mật khẩu** (Password). Mật khẩu này sẽ dùng mỗi khi bạn đăng nhập hoặc cài phần mềm, vì vậy hãy ghi nhớ kỹ.
7. Ngồi nhâm nhi tách cà phê và đợi quá trình cài đặt hoàn tất (khoảng 10 - 20 phút).
8. Khi xong, một thông báo hiện lên yêu cầu khởi động lại (**Restart Now**). Hệ thống sẽ có dòng nhắc nhở "Please remove the installation medium, then press ENTER", lúc này bạn rút USB ra và nhấn Enter.

## 6. Trải nghiệm thành quả

Sau khi máy tính khởi động lại, thay vì vào thẳng Windows như trước, bạn sẽ thấy một màn hình danh sách gọi là **GRUB bootloader** với nền đen/tím. 

Tại đây, bạn sử dụng phím mũi tên lên/xuống để chọn hệ điều hành muốn sử dụng:
- Chọn **Ubuntu** (thường là dòng đầu tiên) để dùng Linux.
- Chọn **Windows Boot Manager** để vào lại Windows bình thường.

Chúc bạn thành công với hành trình khám phá thế giới Linux mã nguồn mở!`
    },
    {
        id: "dien-tich-tam-giac-cuc-tieu",
        title: "Giả Thuyết Erdős-Purdy-Straus Về Số Diện Tích Tam Giác Cực Tiểu",
        description: "Làm thế nào để chứng minh rằng n điểm không thẳng hàng trong mặt phẳng luôn xác định ít nhất ⌊(n-1)/2⌋ diện tích tam giác khác nhau? Khám phá lời giải đối ngẫu đẹp mắt của Rom Pinchasi.",
        category: "dai-so",
        date: "2026-05-29",
        readTime: "10 phút đọc",
        coverImage: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=800",
        tags: ["Hình học tổ hợp", "Phép đối ngẫu", "Euler xạ ảnh", "Định lý Rom Pinchasi"],
        content: `Trong hình học tổ hợp, mối liên hệ giữa các điểm và diện tích tam giác luôn chứa đựng những câu hỏi cực kỳ sâu sắc. Một trong những giả thuyết kinh đoán được đưa ra vào năm 1977 bởi ba nhà toán học lỗi lạc Paul Erdős, George Purdy và Ernst G. Straus phát biểu rằng: **Mọi tập hợp gồm $n$ điểm không thẳng hàng trong mặt phẳng luôn xác định ít nhất $\\lfloor \\frac{n-1}{2} \\rfloor$ diện tích tam giác khác nhau.**

Bài viết này sẽ tóm tắt lại bản chất đại số và hình học của lời giải hoàn chỉnh cho giả thuyết này, dựa trên công trình đột phá của nhà toán học **Rom Pinchasi** công bố năm 2008.

## 1. Phát Biểu Bài Toán

Cho $P$ là một tập hợp gồm $n$ điểm không thẳng hàng trong mặt phẳng. Mỗi bộ ba điểm không thẳng hàng trong $P$ xác định một tam giác. Ký hiệu $g(P)$ là số lượng các giá trị diện tích khác nhau của các tam giác xác định bởi $P$.

Chúng ta muốn tìm cận dưới của số diện tích này, tức là tìm giá trị nhỏ nhất:

$$g(n) = \\min_{|P|=n, \\text{ không thẳng hàng}} g(P)$$

Cận trên hiển nhiên của $g(n)$ có thể đạt được bằng cách xếp $\\lfloor \\frac{n}{2} \\rfloor$ điểm trên một đường thẳng $l$ và $\\lfloor \\frac{n}{2} \\rfloor$ điểm trên một đường thẳng $l'$ song song với $l$. Cấu hình này cho chúng ta đúng $\\lfloor \\frac{n-1}{2} \\rfloor$ diện tích khác nhau. Do đó, mục tiêu là chứng minh:

$$g(n) \\ge \\lfloor \\frac{n-1}{2} \\rfloor$$

## 2. Phép Biến Đổi Đối Ngẫu: Cầu Nối Đại Số Tuyển Tính

Để giải quyết bài toán diện tích hình học cong, Rom Pinchasi đã sử dụng một công cụ đại số cực kỳ mạnh mẽ trong hình học xạ ảnh: **Phép biến đổi đối ngẫu (Duality Transformation)**.

Phép đối ngẫu thiết lập một tương ứng 1-1 giữa điểm và đường thẳng trong mặt phẳng:
- Tương ứng mỗi điểm $p = (a, b)$ với đường thẳng đối ngẫu $p^*: y + ax + b = 0$.
- Tương ứng mỗi đường thẳng $L: y + a'x + b' = 0$ với điểm đối ngẫu $L^* = (a', b')$.

### Các tính chất hình học được bảo toàn qua đối ngẫu:
1. **Tính thuộc (Incidence)**: Điểm $p$ nằm trên đường thẳng $L$ khi và chỉ khi đường thẳng đối ngẫu $p^*$ đi qua điểm đối ngẫu $L^*$.
2. **Quan hệ vị trí**: Điểm $p$ nằm phía trên đường thẳng $L$ khi và chỉ khi đường thẳng đối ngẫu $p^*$ nằm phía dưới điểm đối ngẫu $L^*$.
3. **Song song**: Các điểm có cùng tọa độ $x$ sẽ tương ứng với các đường thẳng đối ngẫu song song với nhau.

Bằng cách xoay tập điểm $P$ sao cho không có hai điểm nào có cùng tọa độ $x$, ta chuyển tập $P$ thành một cách sắp xếp $\\mathcal{A}$ gồm $n$ đường thẳng đôi một không song song và không cùng đi qua một điểm chung. 

Nhờ phép biến đổi đối ngẫu này, bài toán tìm số lượng diện tích tam giác cực tiểu được đưa về bài toán đếm số lượng giao điểm phân biệt của các đường thẳng trên các trục thẳng đứng.

## 3. Ý Tưởng Chứng Minh Của Rom Pinchasi

Đặt $\\mathcal{L}$ là tập hợp các đường thẳng đứng đi qua các giao điểm của cách sắp xếp đường thẳng $\\mathcal{A}$.

Với mỗi đường thẳng đứng $l \\in \\mathcal{L}$, đặt $b(l)$ là giao điểm có tọa độ $y$ nhỏ nhất và $t(l)$ là giao điểm có tọa độ $y$ lớn nhất. Rom Pinchasi định nghĩa các tập hợp điểm đặc trưng trên mỗi đường thẳng đứng:
- $S(l)$: tập các giao điểm của $l$ với các đường thẳng nằm dưới $b(l)$ hoặc nằm trên $t(l)$.
- $Q(l)$: tập các giao điểm của $l$ nằm ở giữa khoảng $b(l)$ và $t(l)$.
- $R(l)$: tập các giao điểm thực sự (nơi giao nhau của từ 2 đường thẳng trở lên).

### Sử dụng Công thức Euler Xạ Ảnh

Để liên kết các tập điểm này lại với nhau, tác giả sử dụng **Công thức Euler** trong mặt phẳng xạ ảnh. Ký hiệu $t_k$ là số giao điểm được đi qua bởi đúng $k$ đường thẳng, và $f_k$ là số mặt có đúng $k$ cạnh trong cách sắp xếp $\\mathcal{A}$. 

Từ công thức Euler, ta có hệ thức đại số:

$$3 + \\sum_{k \\ge 2}(k-3)t_k + \\sum_{k \\ge 3}(k-3)f_k = 0$$

Bằng cách định nghĩa các \"cặp đẹp\" (nice pairs) $(p, q)$ là các giao điểm kề nhau trên cùng một đường thẳng đứng mà không bị đường thẳng nào chia cắt, ta có thể chứng minh rằng chúng phải là các đỉnh của cùng một mặt trong cách sắp xếp $\\mathcal{A}$.

Từ đó, thông qua một loạt các đánh giá đại số phức tạp trên công thức Euler, tác giả chỉ ra rằng tồn tại ít nhất một đường thẳng đứng $l$ thỏa mãn:

$$\\frac{|S(l)|}{2} + |Q(l)| + |R(l)| \\ge \\frac{n-1}{2} + \\frac{3}{2m}$$

Bất đẳng thức này khẳng định sự tồn tại của ít nhất $\\lfloor \\frac{n-1}{2} \\rfloor$ giao điểm khác nhau nằm hoàn toàn về một phía (hoặc nằm dưới $t(l)$ hoặc nằm trên $b(l)$). Trong không gian đối ngẫu, điều này tương đương với việc có ít nhất $\\lfloor \\frac{n-1}{2} \\rfloor$ khoảng cách phân biệt từ các điểm trong $P$ tới một đường thẳng cố định $\\gamma$.

## 4. Kết Luận Khoa Học

Định lý của Rom Pinchasi không chỉ chứng minh trọn vẹn giả thuyết Erdős-Purdy-Straus sau hơn 30 năm thách thức giới toán học tổ hợp, mà còn chỉ ra một đặc tính hình học rất đẹp: **$\\lfloor \\frac{n-1}{2} \\rfloor$ tam giác có diện tích khác nhau này hoàn toàn có thể được chọn sao cho chúng có cùng một cạnh chung $\\gamma$**. 

Đây là một minh chứng tuyệt vời cho thấy sức mạnh của việc kết hợp giữa hình học tổ hợp trực quan và các phép biến đổi đại số tuyến tính đối ngẫu để đơn giản hóa những bài toán tưởng chừng như vô cùng phức tạp.`
    }
];