# ĐẶC TẢ YÊU CẦU HỆ THỐNG - WEBSITE ĐẶC SẢN TÂY NGUYÊN

## 1. Giới thiệu chung
Dự án nhằm xây dựng một website giới thiệu về văn hóa, địa lý Tây Nguyên và quảng bá các sản phẩm nông sản, đặc sản thế mạnh của vùng đất này (Cà phê, tiêu, mật ong, trà,...). Ở giai đoạn khởi đầu, website hoạt động dưới dạng trang thông tin tĩnh kết hợp dữ liệu sản phẩm động từ tệp cấu trúc JSON.

## 2. Phạm vi yêu cầu chức năng 

### Chức năng 1: Giới thiệu Tây Nguyên (Trang chủ)
* Hiển thị nội dung tổng quan về địa lý (5 tỉnh thành), khí hậu và bản sắc văn hóa (Cồng chiêng Tây Nguyên, nhà rông).
* Giao diện trình bày mạch lạc, sử dụng các thẻ ngữ nghĩa của HTML5 (Header, Footer, Main, Section, Article).

### Chức năng 2: Danh sách và Phân loại Sản phẩm (Trang sản phẩm)
* Hiển thị danh sách tối thiểu 10 sản phẩm đặc sản thực tế của Tây Nguyên.
* Mỗi sản phẩm phải thể hiện rõ: Tên, Phân loại (Category), Giá cả, Đơn vị tính, Nguồn gốc xuất xứ (Tỉnh, hợp tác xã sản xuất) và Mô tả ngắn.
* Cho phép người dùng lọc (Filter) sản phẩm theo từng nhóm danh mục cụ thể (Ví dụ: Cà phê, Trà, Mật ong, Tiêu) bằng bộ lọc trực quan.

### Chức năng 3: Thông tin Nguồn gốc Xuất xứ
* Tích hợp chi tiết thông tin xuất xứ của từng nông sản trực tiếp trên thẻ sản phẩm (Ví dụ: Đắk Lắk, Gia Lai, Lâm Đồng) nhằm gia tăng tính minh bạch và uy tín cho sản phẩm.

### Chức năng 4: Tiếp nhận phản hồi (Trang liên hệ)
* Cung cấp thông tin liên hệ tĩnh (Địa chỉ, số điện thoại, email văn phòng đại diện tại Tây Nguyên).
* Form liên hệ cho phép người dùng nhập: Họ tên, Email, Số điện thoại, Lời nhắn. Hệ thống thực hiện kiểm tra (validate) định dạng dữ liệu cơ bản ở phía máy khách trước khi gửi đi.

---

## 3. Định hướng phát triển Chức năng Đặt hàng

Trong các chương tiếp theo, hệ thống sẽ được nâng cấp để hỗ trợ luồng giao dịch khép kín:
1. **Quản lý Giỏ hàng (Client-side):** Người dùng có thể thêm/bớt sản phẩm, cập nhật số lượng và tính tổng tiền trực tiếp trên giao diện mà không cần tải lại trang.
2. **Xác nhận Đơn hàng:** Form nhập thông tin thanh toán, địa chỉ giao hàng và phương thức vận chuyển.
3. **Xử lý Đặt hàng (Backend-side):** Gửi dữ liệu đơn hàng về máy chủ để lưu trữ, giảm số lượng hàng tồn kho tương ứng trong cơ sở dữ liệu.
4. **Tích hợp Thanh toán:** Hướng tới tích hợp các cổng thanh toán điện tử phổ biến tại Việt Nam (MoMo, VNPAY) hoặc COD (Thanh toán khi nhận hàng).