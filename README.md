# 🛡️ AntiBacteria — Clinical Antimicrobial Guide & Bilingual Learning

Ứng dụng tra cứu kháng sinh lâm sàng chuẩn **The Sanford Guide to Antimicrobial Therapy (54th Ed.)**, **Bộ Y tế Việt Nam**, **Sách Hướng dẫn Sử dụng Kháng sinh Bệnh viện Chợ Rẫy 2024 (NXB Y học)** và **Bệnh viện Bệnh Nhiệt Đới TPHCM (eMed)** kết hợp học tiếng Anh chuyên ngành Y Dược.

---

## 🚀 Tự động Xuất file Android APK (.apk) qua GitHub Actions

Dự án đã được tích hợp sẵn pipeline CI/CD tự động build file `.apk` bằng **GitHub Actions** (`.github/workflows/build-apk.yml`).

### 📌 Các bước đẩy lên GitHub để nhận file APK:

1. **Khởi tạo repository mới trên GitHub**:
   - Truy cập: [https://github.com/new](https://github.com/new)
   - Đặt tên Repository (ví dụ: `antibacteria` hoặc `AntiBacteria-App`).
   - Để chế độ **Public** hoặc **Private**, sau đó nhấn **Create repository**.

2. **Đẩy mã nguồn từ máy tính lên GitHub**:
   Mở PowerShell hoặc Git Bash tại thư mục này và chạy các lệnh:
   ```bash
   git remote add origin https://github.com/<TEN-TAI-KHOAN-CUA-BAN>/antibacteria.git
   git branch -M main
   git push -u origin main
   ```

3. **Nhận và tải file `.apk`**:
   - Ngay sau khi push code, truy cập vào tab **Actions** trên repository GitHub của bạn.
   - GitHub Actions sẽ tự động biên dịch ứng dụng Android trong khoảng **1 - 2 phút**.
   - Khi tiến trình hoàn thành (dấu tích xanh ✅):
     - **Cách 1 (Khuyên dùng)**: Truy cập mục **Releases** ở thanh bên phải của repository để tải trực tiếp file **`AntiBacteria-v1.2.0-Debug.apk`**.
     - **Cách 2**: Nhấn vào lượt chạy trong tab **Actions** -> kéo xuống mục **Artifacts** -> tải file **`AntiBacteria-v1.2.0-Debug-APK`**.

4. **Cài đặt lên điện thoại Android**:
   - Chép hoặc gửi file APK vừa tải về điện thoại Android (qua Zalo, Telegram, Google Drive hoặc mở trực tiếp trên điện thoại).
   - Nhấn mở file `.apk` -> Chọn **Cài đặt (Install)** (Nếu điện thoại hỏi bảo mật, bật *Cho phép cài đặt từ nguồn này*).
   - Ứng dụng sẽ hoạt động **Offline 100%**, không cần kết nối mạng.

---

## 🩺 Cấu trúc Chuyên môn & Tính năng Lâm sàng

1. **[Phác đồ / Syndromes]**:
   - Phân loại theo hệ cơ quan (Hô hấp, Tiết niệu, Tiêu hóa - Ổ bụng, Da - Mô mềm, Thần kinh).
   - Phân tầng lâm sàng (Ngoại trú, Nội trú, ICU, nguy cơ MDR).
   - Đối chiếu song song: 🌐 Chuẩn Quốc tế (IDSA / Sanford) vs 🇻🇳 Thực chiến Tuyến cuối (BV Chợ Rẫy 2024 / BV Bệnh Nhiệt Đới).

2. **[Chợ Rẫy 2024 & BV Bệnh Nhiệt Đới]**:
   - **Bảng chỉnh liều thận & Lọc máu (HD / CRRT)**: Liều nạp bắt buộc Colistin (9-12 MIU), duy trì theo CrCl, liều bổ sung sau lọc máu và liều CRRT 6.5-9 MIU/ngày.
   - **Meropenem liều cao PK/PD**: 2g mỗi 8 giờ truyền kéo dài 3 giờ.
   - **Ampicillin/Sulbactam liều cao**: Sulbactam 6-9g/ngày cho *Acinetobacter baumannii*.
   - **Phác đồ vi khuẩn đa kháng (XDR/PDR)**: Phác đồ bộ 3 cho CRAB, phân tầng men cho CRKP (NDM vs KPC).
   - **Lưu đồ BVBND eMed**: Phân tầng 3 nhóm nguy cơ vi khuẩn đa kháng MDR và lưu đồ Sepsis 6 bước.

3. **[Tương tác & Cảnh báo Dược]**:
   - Tra cứu tương tác thuốc nguy hiểm: Meropenem + Valproate (giảm nồng độ chống co giật), Fluoroquinolone + Sulfonylurea (hạ đường huyết nặng), tương tác kéo dài khoảng QT, độc thận khi phối hợp Vancomycin + Piperacillin/Tazobactam.
   - Cảnh báo đối tượng đặc biệt (suy thận, phụ nữ mang thai).

4. **[Máy tính / Calculators]**:
   - Tính toán nhanh: CrCl Cockcroft-Gault (tự động điều chỉnh AdjBW khi bệnh nhân béo phì > 120% IBW), eGFR CKD-EPI 2021, IBW, AdjBW.
   - Thanh đồng bộ thông số bệnh nhân tổng quan (Global Patient Context).

5. **[Học tập / English]**:
   - Bộ thẻ từ vựng song ngữ Anh - Việt về dược lý kháng sinh, cơ chế đề kháng và thông số PK/PD.
   - Mẫu câu học thuật dùng trong hội chẩn và báo cáo ca lâm sàng.

---

## 📁 Cấu trúc Thư mục

```text
antibacteria/
├── .github/
│   └── workflows/
│       └── build-apk.yml          # Pipeline tự động build APK trên GitHub Actions
├── android/                       # Cấu hình dự án Android Gradle native
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── assets/www/        # Ứng dụng web đóng gói offline hoàn toàn
│   │   │   │   └── index.html
│   │   │   ├── java/com/antibacteria/app/MainActivity.java
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   ├── build.gradle
│   └── settings.gradle
├── src/                           # Mã nguồn React + Tailwind CSS
│   ├── components/                # Modal, Nav, Header, Tabs
│   ├── data/                      # Cơ sở dữ liệu phác đồ, thuốc, tương tác, Chợ Rẫy
│   └── utils/                     # Thuật toán tính CrCl, eGFR, IndexedDB
├── public/
│   ├── manifest.json              # Cấu hình PWA
│   └── sw.js                      # Service Worker lưu cache offline
├── package.json
└── README.md
```
