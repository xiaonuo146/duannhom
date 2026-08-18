# TÂY NGUYÊN SẢN - HƯƠNG VỊ ĐẠI NGÀN
> Hệ thống website giới thiệu, phân loại và quảng bá Nông sản & Đặc sản Tây Nguyên chuẩn OCOP.
> **Dự án bài tập cơ bản: Khởi động, Kiến trúc, Dữ liệu và Cộng tác.**

---

## 1. Thành viên nhóm & Phân công vai trò (3 người)

| Thành viên            | Vai trò đảm nhận          | Nhiệm vụ chính        |
| :---                  | :---                      | :---                  |
| Nguyễn Thị Kim Oanh   | Trưởng nhóm và thư ký     | - Thiết lập Git 
                         fix, kiểm, gộp file        |Repository, phân nhánh và duyệt                       Pull Request.
                                                    | - Thiết kế cấu trúc thư mục dạng mô-đun hóa.
                                                    |- Viết tài liệu Kiến trúc (`architecture.md`) và Yêu cầu   (`requirements.md`). 
                                                     - Viết tài liệu `README.md`, biên soạn Nhật ký dự án (`log.md`).    
|   Duy Huy             |  Kỹ sư frontend           | - Xây dựng Layout HTML5 
                                                      chuẩn ngữ nghĩa cho các trang: Trang chủ, Sản phẩm, Liên hệ.
                                                      - Triển khai hệ thống CSS mô-đun và Responsive.
                                                      - Viết logic JavaScript (`products.js`) để nạp dữ liệu và xử lý bộ lọc.
                                                    |
| Doãn Trung Nguyên     | Kỹ sư dữ liệu             | - Thiết kế cấu trúc schema và 
                                                     biên soạn dữ liệu `products.json` chứa 10 đặc sản.
                                                     - Thu thập tài nguyên hình ảnh cho sản phẩm và slideshow.
                                                    |

---

## 2. Cấu trúc thư mục mã nguồn 

Dự án được tổ chức theo cấu trúc phân rã chức năng rõ ràng, tách biệt giữa dữ liệu, logic xử lý và giao diện:

duannhom/
├── css/
│   ├── style.css            # Tệp tổng nạp các mô-đun CSS con thông qua @import
│   ├── variables.css        # Hệ thống biến màu toàn cục và resets
│   ├── layout.css           # Cấu trúc chung (header, footer, containers)
│   ├── components.css       # Các thành phần tái sử dụng (buttons, product cards)
│   └── pages.css            # Giao diện riêng cho Trang chủ, Sản phẩm, Liên hệ
├── js/
│   └── products.js          # Logic duy nhất xử lý render và bộ lọc sản phẩm
├── data/
│   └── products.json        # "Cơ sở dữ liệu tĩnh" chuẩn hóa của 10 nông sản đặc sản
├── assets/
│   └── images/
│       ├── common/          # Logo, banner, ảnh trình chiếu slideshow
│       └── products/        # Ảnh thực tế chất lượng cao của các sản phẩm
├── docs/
│   ├── requirements.md      # Tài liệu đặc tả yêu cầu chức năng hệ thống
│   ├── architecture.md      # Tài liệu thiết kế kiến trúc và định hướng đặt hàng
│   ├── model.md             # Tài liệu mô hình dữ liệu
│   └── log.md               # Nhật ký chi tiết tiến độ dự án 
├── index.html               # Trang chủ (Giới thiệu & Đặc trưng Tây Nguyên)
├── products.html            # Trang danh sách sản phẩm & bộ lọc động
├── contact.html             # Trang liên hệ có nhúng bản đồ và form phản hồi
└── README.md                # Tài liệu hướng dẫn và tổng quan dự án 

---
## 3. Công nghệ sử dụng 

*   **Markup:** HTML5 (Sử dụng Semantic HTML chuẩn SEO: header, main, section, article, footer).
*   **Styling:** CSS3 (Mô-đun hóa bằng @import, thiết kế biến màu trung tâm :root, dàn trang linh hoạt bằng Flexbox và CSS Grid).
*   **Logic:** Vanilla JavaScript (ES6+, sử dụng lập trình bất đồng bộ async/await và Fetch API kết hợp xử lý mảng nâng cao để lọc dữ liệu).
*   **Data:** JSON (Định dạng cấu trúc mảng đối tượng nghiêm ngặt).
*   **Icons:** Sử dụng hệ thống biểu tượng phẳng đồng bộ từ Icons8 thay cho biểu tượng Emoji để tối ưu tính thẩm mỹ chuyên nghiệp.


## 4. Hướng dẫn khởi chạy dự án tại máy cục bộ (Local Run)

Vì tệp JavaScript (js/products.js) thực hiện hành vi gọi tệp dữ liệu tĩnh (data/products.json) thông qua Fetch API, trình duyệt sẽ chặn hành động này do chính sách bảo mật CORS nếu bạn chỉ nháy đúp trực tiếp để mở file HTML cục bộ.

**Yêu cầu bắt buộc để chạy thử:**
1. Mở thư mục dự án bằng công cụ **Visual Studio Code**.
2. Cài đặt tiện ích mở rộng (Extension) tên là **Live Server** (của nhà phát triển Ritwick Dey).
3. Nhấp chuột phải vào file `index.html` chọn **Open with Live Server** (hoặc nhấn tổ hợp phím `Alt + L, Alt + O`).
4. Hệ thống sẽ tự động khởi chạy môi trường máy chủ cục bộ tại cổng mặc định `http://127.0.0.1:5500/index.html` giúp dữ liệu sản phẩm hiển thị mượt mà.

---

## 5. Các điểm nổi bật về mặt kỹ thuật đã đạt được 

1.  **Chuyển đổi Logo & Icon Chân trang chuẩn chỉ:** Đồng bộ hóa ảnh logo bo tròn 100% cân đối với tiêu đề chữ ở cả Đầu trang và Chân trang. Loại bỏ hoàn toàn Emoji và thay thế bằng các liên kết ảnh phẳng chất lượng cao.
2.  **Khung nền Slideshow (Live Show) động cho Hero:** Phần mở đầu trang chủ tích hợp một slideshow ảnh phong cảnh Tây Nguyên tự động chuyển cảnh mượt mà mỗi 4 giây dưới dạng ảnh nền mờ độ đục 70%, làm bệ đỡ nổi bật cho phần chữ giới thiệu phía trên.
3.  **Tái cấu trúc Trang Giới thiệu:** Chuyển đổi từ mô hình 2 cột tĩnh sang cấu trúc 1 cột trải rộng toàn phần màn hình (max-width: 1100px) căn đều 2 bên, giúp người dùng tập trung hoàn toàn vào nội dung giới thiệu mà không bị khoảng trống làm loãng giao diện.
4.  **Hệ thống lọc động thông minh (Dynamic Filter):** Tệp js/products.js tự động phân tích tệp products.json để lấy ra các nhóm danh mục và tỉnh thành duy nhất, sau đó nạp động vào các thẻ select của trang sản phẩm mà không cần can thiệp thủ công bằng tay vào HTML.