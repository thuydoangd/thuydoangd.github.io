# 🌸 Website cá nhân

Trang web giới thiệu bản thân dành cho nghiên cứu sinh Tiến sĩ ngành Giáo dục Toán học.
Thiết kế hiện đại, đơn giản với tông màu pastel (hồng · vàng · xanh dương).

## 📁 Cấu trúc file

```
personal-website/
├── index.html    # Nội dung trang (chỉnh sửa thông tin ở đây)
├── style.css     # Giao diện & màu sắc
├── script.js     # Hiệu ứng menu và cuộn trang
└── README.md     # File hướng dẫn này
```

## ✏️ Cách chỉnh sửa nội dung

Mở **`index.html`** và thay các phần sau bằng thông tin của bạn:

- **Tên**: tìm và thay `Nguyễn Văn A`.
- **Email / mạng xã hội**: phần `#contact` (đổi `mailto:email@example.com`, link Google Scholar, ORCID, LinkedIn).
- **Ảnh đại diện**: tạo thư mục `assets/`, đặt ảnh vào (ví dụ `assets/avatar.jpg`), rồi trong `index.html` thay khối `.avatar-blob` bằng:
  ```html
  <div class="avatar-blob"><img src="assets/avatar.jpg" alt="Ảnh đại diện" /></div>
  ```
- **Công bố / Giảng dạy**: cập nhật trong các phần `#publications` và `#teaching`.

Muốn đổi màu? Mở **`style.css`** và sửa các biến ở đầu file (`:root`).

## 🚀 Đăng lên GitHub Pages (miễn phí)

1. Tạo tài khoản tại [github.com](https://github.com) (nếu chưa có).
2. Tạo repository mới, đặt tên **`<tên-tài-khoản>.github.io`**
   (ví dụ tài khoản là `nguyenvana` → repo tên `nguyenvana.github.io`).
3. Upload toàn bộ file trong thư mục này lên repo:
   - Cách đơn giản: bấm **Add file → Upload files**, kéo thả các file `index.html`, `style.css`, `script.js` (và thư mục `assets/` nếu có).
   - Bấm **Commit changes**.
4. Vào **Settings → Pages**, mục *Branch* chọn `main` và thư mục `/ (root)`, bấm **Save**.
5. Đợi 1–2 phút, website sẽ chạy tại: `https://<tên-tài-khoản>.github.io`

### Nếu dùng dòng lệnh (Git)

```bash
cd personal-website
git init
git add .
git commit -m "Trang cá nhân đầu tiên"
git branch -M main
git remote add origin https://github.com/<tên-tài-khoản>/<tên-tài-khoản>.github.io.git
git push -u origin main
```

## 💡 Mẹo

- File **phải** tên `index.html` để GitHub Pages tự nhận là trang chủ.
- Mỗi lần sửa xong chỉ cần upload/commit lại, web sẽ tự cập nhật.
- Muốn dùng tên miền riêng? Thêm file `CNAME` chứa tên miền của bạn.

---
Chúc bạn có một trang cá nhân thật đẹp! 🎉
