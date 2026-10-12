# 📱 FRONTEND - ỨNG DỤNG LUYỆN THI TOEIC READING MOBILE APP

Ứng dụng di động luyện thi TOEIC Reading được thiết kế theo chuẩn **Mobile-First Responsive** mô phỏng chính xác **100% thiết kế giao diện Figma**:
- Link thiết kế Figma: https://www.figma.com/design/toeic-reading-v07-exam-app
- Màu sắc chủ đạo: Indigo `#4F46E5` & `#4338CA`
- Khung Mockup điện thoại: iPhone Dynamic Island / Notch, Status Bar `9:41 AM`, Bo góc `46px` hiện đại.

---

### 🌟 Các Màn hình Chức năng chính:

1. **Màn hình Trang chủ & Danh sách đề thi (`index.html`):**
   - Lời chào học viên, thẻ thông tin đề thi ETS TOEIC Reading Test 07.
   - Thống kê cấu trúc 100 câu: Part 5 (30 câu), Part 6 (16 câu), Part 7 (54 câu).
   - Modal xem trước thể lệ và hướng dẫn thi 75 phút.

2. **Màn hình Phòng thi trực tuyến 75 phút (`take.html`):**
   - **Đồng hồ đếm ngược (Countdown Timer):** Khởi tạo chính xác 75:00 phút (4500 giây) và đếm ngược theo thời gian thực.
   - **Cảnh báo hết giờ:** Tự động chuyển màu đỏ nhấp nháy liên tục khi thời gian còn dưới 5 phút.
   - **Tự động thu bài:** Khóa quyền chọn đáp án và tự động nộp bài khi đồng hồ về `00:00`.
   - **Bảng điều hướng 100 câu (Question Palette):** Lưới 100 ô phân màu (ô đã làm tô màu tím, ô chưa làm màu trắng), nhấp ô để nhảy nhanh đến câu hỏi.
   - **Lưu tạm thời gian thực:** Lưu câu trả lời và thời gian vào `LocalStorage`, không sợ mất dữ liệu khi vô tình reload.
   - **Tương tác linh hoạt:** Thí sinh có thể chọn đáp án, đổi sang đáp án khác, hoặc click lại để bỏ chọn đáp án.
   - **Xác nhận nộp bài:** Modal kiểm tra số câu đã làm và số câu chưa làm trước khi gửi bài.

3. **Màn hình Báo cáo kết quả bài thi (`result.html`):**
   - Vòng tròn điểm số (Circle Score) hiển thị điểm hệ 10 và quy đổi thang điểm TOEIC Reading chuẩn quốc tế (5 - 495).
   - Thống kê trực quan: Số câu Đúng (xanh), Sai (đỏ), Bỏ qua (vàng), Thời gian làm bài.
   - Bảng đối chiếu chi tiết 100 câu giữa đáp án thí sinh chọn và đáp án đúng của hệ thống.

---

### 📂 Cấu trúc thư mục Frontend:

```
frontend/
├── index.html           # Màn hình Trang chủ & Danh sách đề thi
├── take.html            # Màn hình Phòng thi trực tuyến 75 phút
├── result.html          # Màn hình Báo cáo kết quả & Đối chiếu 100 câu
├── css/
│   └── style.css        # Hệ thống StyleSheet chuẩn Figma Mobile
├── js/
│   ├── data.js          # Dữ liệu đầy đủ 100 câu hỏi ETS TOEIC Test 07
│   └── app.js           # Bộ điều khiển logic thi, đếm ngược, lưu trữ và chấm điểm
└── README.md            # Tài liệu hướng dẫn sử dụng
```

---

### 🚀 Hướng dẫn chạy Frontend:

- **Cách 1 (Chạy độc lập):** Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Cốc Cốc) hoặc sử dụng extension VS Code Live Server.
- **Cách 2 (Kết nối Backend):** Khởi động backend ASP.NET Core (`https://localhost:44312`), trên giao diện có nút chuyển đổi trực tiếp sang phiên bản ASP.NET MVC Web.
