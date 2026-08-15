# Mô hình dữ liệu – Tây Nguyên Shop

## Tổng quan

Dữ liệu sản phẩm được lưu trữ trong file `data/products.json` dưới dạng JSON.  
File này chứa một mảng các sản phẩm, mỗi sản phẩm là một đối tượng JSON.


## Mô tả các trường

- `id` (string): Mã định danh duy nhất cho sản phẩm (ví dụ: `cafe-001`, `honey-001`).
- `name` (string): Tên sản phẩm.
- `category` (string): Loại sản phẩm.
  - Ví dụ: `drink` (đồ uống), `food` (thực phẩm), `handicraft` (thủ công mỹ nghệ), `material` (nguyên liệu…).
- `origin` (object): Thông tin nguồn gốc.
  - `province` (string): Tỉnh thành (Đắk Lắk, Gia Lai, Lâm Đồng…).
  - `district` (string): Quận/huyện.
  - `farm` (string): Cơ sở sản xuất / vùng trồng / rừng tự nhiên…
- `price` (number): Giá sản phẩm (số nguyên, đơn vị VNĐ).
- `currency` (string): Đơn vị tiền tệ, hiện tại là `VND`.
- `unit` (string): Đơn vị tính (500g, 1 lít, 1 kg…).
- `description` (string): Mô tả ngắn về sản phẩm.
- `image` (string): Đường dẫn tương đối tới ảnh sản phẩm (ví dụ: `images/products/cafe-001.jpg`).
- `in_stock` (boolean): Trạng thái còn hàng (`true`/`false`).
- `tags` (mảng string): Các từ khóa liên quan đến sản phẩm (hỗ trợ tìm kiếm, phân loại). (có thể có hay không)

## Quy tắc đặt tên và tính nhất quán

- `category`:
  - Sử dụng tên tiếng Anh, viết thường, không dấu: `drink`, `food`, `handicraft`, `material`.
  - Thống nhất trong toàn bộ file.
- `origin.province`:
  - Ghi đầy đủ tên tỉnh, có dấu, ví dụ: `Đắk Lắk`, `Gia Lai`, `Lâm Đồng`.
- `price`:
  - Là số nguyên, không kèm ký tự tiền tệ.
  - Đơn vị tiền được ghi riêng trong `currency`.
- `image`:
  - Đường dẫn tương đối từ gốc dự án.
  - Tất cả ảnh sản phẩm nằm trong `images/products/`.

## Mở rộng trong tương lai

Khi phát triển thêm chức năng đặt hàng, có thể bổ sung:

- `stockQuantity` (number): Số lượng tồn kho.
- `variants` (mảng): Các biến thể (size, khối lượng, đóng gói…).
- `rating` (number): Điểm đánh giá trung bình.
- `reviews` (mảng): Danh sách bình luận, đánh giá.