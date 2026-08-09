# Yêu cầu hệ thống – Tây Nguyên Shop

## Mục tiêu hệ thống

Xây dựng website giới thiệu vùng Tây Nguyên và các sản phẩm đặc trưng, hỗ trợ người dùng:
- Tìm hiểu thông tin về Tây Nguyên.
- Xem danh sách sản phẩm, phân loại theo loại sản phẩm.
- Xem thông tin nguồn gốc của từng sản phẩm.
- Liên hệ với đơn vị quản lý website.
- Định hướng phát triển chức năng đặt hàng trong tương lai.

## Tác nhân (actors)

- **Khách**:
  - Xem trang giới thiệu Tây Nguyên.
  - Xem danh sách sản phẩm, lọc theo loại.
  - Xem chi tiết sản phẩm (tên, loại, nguồn gốc, giá, mô tả, ảnh).
  - Xem trang liên hệ.

- **Người quản trị (admin – định hướng tương lai)**:
  - Quản lý dữ liệu sản phẩm.
  - Quản lý đơn hàng (khi có chức năng đặt hàng).
  - Cập nhật thông tin liên hệ, nội dung giới thiệu.

## Chức năng chính

1. **Giới thiệu Tây Nguyên**
   - Hiển thị thông tin tổng quan về vùng Tây Nguyên (vị trí, đặc điểm văn hóa, kinh tế…).
   - Có thể kèm hình ảnh minh họa.

2. **Danh sách sản phẩm**
   - Hiển thị danh sách ít nhất 10 sản phẩm đặc trưng Tây Nguyên.
   - Mỗi sản phẩm có: tên, loại, nguồn gốc, giá, mô tả, ảnh.

3. **Phân loại sản phẩm**
   - Hỗ trợ lọc sản phẩm theo loại (ví dụ: đồ uống, thực phẩm, thủ công mỹ nghệ, nguyên liệu…).

4. **Thông tin nguồn gốc**
   - Hiển thị rõ nguồn gốc sản phẩm: ngày sản xuất, tỉnh, huyện, cơ sở sản xuất (nếu có).

5. **Trang liên hệ**
   - Cung cấp thông tin liên hệ (email, số điện thoại, địa chỉ, form liên hệ cơ bản).

6. **Định hướng chức năng đặt hàng**
   - Mô tả luồng đặt hàng dự kiến (chưa triển khai doc):
   - Xem sản phẩm → chọn “Đặt hàng” → nhập thông tin khách → xác nhận đơn.

## Yêu cầu phi chức năng

- Website chạy được trên các trình duyệt phổ biến (Chrome, Firefox, Edge…).
- Cấu trúc code rõ ràng, dễ đọc, dễ bảo trì.
- Dữ liệu sản phẩm được tổ chức nhất quán, dễ mở rộng.
- Tài liệu đầy đủ: yêu cầu, kiến trúc, mô hình dữ liệu, nhật ký công việc.