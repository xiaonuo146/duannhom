# Kiến trúc hệ thống – Tây Nguyên Shop

## Kiến trúc tổng quan 

Website được xây dựng theo kiến trúc frontend tĩnh, sử dụng:

- **HTML**: Tạo cấu trúc các trang (trang chủ, danh sách sản phẩm, liên hệ).
- **CSS**: Định dạng giao diện cơ bản (layout, màu sắc, font chữ…).
- **JavaScript (có thể dùng jQuery)**: Xử lý logic frontend, đọc dữ liệu JSON và render lên giao diện.
- **JSON (`products.json`)**: Lưu trữ dữ liệu sản phẩm.

Sơ đồ luồng dữ liệu cơ bản:
[products.json]
       ↓ (fetch bằng JS)
[products.js]
       ↓ (xử lý, lọc theo category)
[DOM của products.html]
       ↓ (render danh sách)
Người dùng xem + lọc sản phẩm
## Cấu trúc các thành phần

### 1. Frontend (HTML/CSS/JS)

- `index.html`: Trang chủ, giới thiệu Tây Nguyên.
- `products.html`: Trang danh sách sản phẩm, có chức năng lọc theo loại.
- `contact.html`: Trang liên hệ, có form liên hệ cơ bản.
- `css/style.css`: File CSS chung cho toàn bộ website.
- `js/main.js`: Xử lý logic chung (menu, điều hướng…).
- `js/products.js`: 
  - Fetch dữ liệu từ `data/products.json`.
  - Render danh sách sản phẩm ra `products.html`.
  - Xử lý lọc sản phẩm theo loại.

### 2. Dữ liệu (JSON)

- `data/products.json`:
  - Chứa mảng các sản phẩm.
  - Mỗi sản phẩm có các trường: `id`, `name`, `category`, `origin`, `price`, `description`, `image`, `in_stock`, `tags`…
  - Được mô tả chi tiết trong [data-model.md](./data-model.md).

### 3. Tài nguyên (images)

- `images/`:
  - `logo.png`: Logo website.
  - `products/`: Ảnh sản phẩm.
  - `regions/`: Ảnh minh họa Tây Nguyên ( phong cảnh…).

## Định hướng phát triển (chức năng đặt hàng)

Trong các giai đoạn sau, hệ thống có thể mở rộng theo hướng:

1. **Thêm backend** (Node.js, Python Flask/Django, PHP…):
   - Cung cấp API để:
     - Lấy danh sách sản phẩm.
     - Tạo đơn hàng.
     - Quản lý sản phẩm, đơn hàng (admin).

2. **Cơ sở dữ liệu** (MySQL, PostgreSQL, MongoDB…):
   - Lưu trữ sản phẩm, đơn hàng, thông tin khách hàng.

3. **Chức năng đặt hàng**:
   - Luồng dự kiến:
     1. Người dùng xem sản phẩm trên `products.html`.
     2. Nhấn nút “Đặt hàng” ở sản phẩm mong muốn.
     3. Chuyển đến trang/xử lý nhập thông tin khách (tên, SĐT, địa chỉ…).
     4. Xác nhận đơn hàng (hiển thị thông báo, lưu đơn vào backend).
   - Có thể phát triển thêm:
     - Giỏ hàng (xem, sửa, xóa sản phẩm trước khi đặt).
     - Thanh toán online (kết nối cổng thanh toán).
     - Quản lý đơn hàng (admin).

4. **Bảo mật & hiệu năng**:
   - Xác thực, phân quyền (admin / khách).
   - Tối ưu tốc độ tải trang, caching…

## Công cụ và quy trình phát triển

- **Quản lý mã nguồn**: Git, GitHub.
- **Quản lý dự án**: GitHub Projects (Kanban board).
- **Môi trường phát triển**: VS Code.
- **Quy trình cộng tác**:
  - Phân công vai trò rõ ràng (trưởng nhóm, phân tích, frontend, dữ liệu, thư ký).
  - Theo dõi tiến độ qua Kanban board.
  - Ghi nhật ký công việc trong `docs/log.md`.