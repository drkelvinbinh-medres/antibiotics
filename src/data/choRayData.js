/**
 * Sách Hướng dẫn Sử dụng Kháng sinh Bệnh viện Chợ Rẫy 2024
 * Nhà xuất bản Y học - 2024
 * Chủ biên: PGS.TS.BS Nguyễn Tri Thức, PGS.TS.BS Phạm Ngọc Thảo, PGS.TS.BS Lê Quốc Việt
 * Nhãn nguồn: [BV Chợ Rẫy 2024]
 */

export const CHORAY_2024_DATA = {
  metadata: {
    title: 'Sách Hướng dẫn Sử dụng Kháng sinh Bệnh viện Chợ Rẫy (Ấn bản 2024)',
    publisher: 'Nhà xuất bản Y học',
    chiefEditors: 'PGS.TS.BS Nguyễn Tri Thức, PGS.TS.BS Phạm Ngọc Thảo, PGS.TS.BS Lê Quốc Việt',
    scope: 'Bệnh viện đa khoa tuyến cuối hạng đặc biệt - Đơn vị tiếp nhận và xử trí các ca bệnh nhiễm khuẩn nặng, vi khuẩn đa kháng và toàn kháng (MDR/XDR/PDR) khu vực phía Nam.',
    sourceBadge: 'BV Chợ Rẫy 2024',
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300 dark:border-purple-800'
  },

  // BẢNG CHỈNH LIỀU THEO CHỨC NĂNG THẬN & LỌC MÁU (HD / CRRT) CHUẨN BV CHỢ RẪY 2024
  renalDosingTable: [
    {
      drug: 'Colistin (Colistimethate Sodium - CMS)',
      unitNote: '1 triệu IU (MIU) ≈ 33.3 mg CBA (Colistin Base Activity) ≈ 80 mg CMS',
      loadingDose: '9 - 12 triệu IU (hoặc 300 - 400 mg CBA) pha trong 100 - 250mL NaCl 0.9% truyền trong 1 - 2 giờ. Bắt buộc có liều nạp ngày đầu tiên cho mọi bệnh nhân (kể cả có suy thận).',
      crclNormal: '9 triệu IU/ngày chia 2 lần (4.5 triệu IU mỗi 12 giờ)',
      crcl30_49: '5.5 - 7.5 triệu IU/ngày chia 2 lần (2.5 - 3.5 triệu IU mỗi 12 giờ)',
      crcl10_29: '4.5 triệu IU/ngày chia 2 lần hoặc 3 triệu IU mỗi 12 giờ',
      crclUnder10: '3 triệu IU/ngày chia 1 - 2 lần (1.5 triệu IU mỗi 12 giờ hoặc 3 triệu IU/ngày)',
      hd: 'Duy trì 2 - 3 triệu IU/ngày + BỔ SUNG 1.5 - 2 triệu IU ngay sau mỗi buổi lọc máu (HD)',
      crrt: 'Liều nạp 9 triệu IU, sau đó DUY TRÌ 6.5 - 9 triệu IU/ngày (thường dùng 4.5 triệu IU mỗi 12 giờ do màng lọc CRRT CVVH/CVVHDF thải trừ Colistin rất lớn)',
      choRayPearl: 'Bệnh viện Chợ Rẫy khuyến cáo: Luôn đo Creatinine mỗi ngày và bù đủ dịch tuần hoàn khi dùng Colistin. Để hạn chế kháng Colistin, BẮT BUỘC phối hợp Colistin với ít nhất 1 kháng sinh còn nhạy cảm hoặc kháng trung gian (Meropenem truyền kéo dài 3h, Ampicillin-Sulbactam liều cao, hoặc Fosfomycin).'
    },
    {
      drug: 'Meropenem (Carbapenem)',
      unitNote: 'Carbapenem phổ rộng phụ thuộc thời gian (%T > MIC)',
      loadingDose: 'Tiêm nạp 1 - 2g trong 30 phút trong sốc nhiễm khuẩn',
      crclNormal: '1g - 2g mỗi 8 giờ (đối với vi khuẩn đa kháng hoặc viêm màng não: 2g mỗi 8 giờ TRUYỀN KÉO DÀI 3 GIỜ)',
      crcl30_49: '1g - 2g mỗi 12 giờ (truyền kéo dài 3 giờ)',
      crcl10_29: '500mg - 1g mỗi 12 giờ',
      crclUnder10: '500mg - 1g mỗi 24 giờ',
      hd: '500mg - 1g mỗi 24 giờ, dùng ngay sau buổi lọc máu (HD)',
      crrt: '1g mỗi 8 giờ HOẶC 2g mỗi 12 giờ (truyền kéo dài 3 giờ)',
      choRayPearl: 'Phác đồ Chợ Rẫy 2024: Truyền Meropenem kéo dài 3 giờ (Extended Infusion) là quy chuẩn bắt buộc tại các khoa Hồi sức tích cực (ICU) khi nghi ngờ hoặc xác định vi khuẩn Gram âm có MIC từ 2 đến 8 mcg/mL.'
    },
    {
      drug: 'Vancomycin (Glycopeptide)',
      unitNote: 'Mục tiêu TDM: AUC24/MIC = 400 - 600 mg.h/L hoặc nồng độ đáy 15 - 20 mcg/mL',
      loadingDose: 'Liều nạp 25 - 30 mg/kg theo cân nặng thực tế (tối đa 2.5 - 3.0g). Tốc độ truyền tối đa 1.000 mg/giờ.',
      crclNormal: '15 - 20 mg/kg mỗi 8 - 12 giờ',
      crcl30_49: '15 mg/kg mỗi 24 giờ',
      crcl10_29: '15 mg/kg mỗi 48 giờ (theo dõi nồng độ đáy trước khi dùng liều kế tiếp)',
      crclUnder10: 'Liều duy nhất 15 mg/kg; chỉ lặp lại khi nồng độ đáy < 15 mcg/mL',
      hd: 'Liều nạp 20 - 25 mg/kg; sau đó bổ sung 500 - 1000 mg sau mỗi lần lọc máu dựa trên TDM',
      crrt: 'Liều nạp 20 - 25 mg/kg; duy trì 7.5 - 10 mg/kg mỗi 12 giờ (đo nồng độ đáy hàng ngày)',
      choRayPearl: 'Quy trình TDM Vancomycin tại BV Chợ Rẫy: Đo nồng độ đáy (Trough) ngay trước liều thứ 4. Nếu nồng độ đáy < 15 mcg/mL ở bệnh nhân viêm phổi thở máy hoặc sốc nhiễm khuẩn, nguy cơ thất bại điều trị rất cao; nếu > 20 mcg/mL, nguy cơ tổn thương thận cấp (AKI) tăng vọt.'
    },
    {
      drug: 'Ampicillin / Sulbactam Liều cao (Cho Acinetobacter baumannii)',
      unitNote: 'Sulbactam có hoạt tính diệt khuẩn nội tại trực tiếp gắn kết PBP-1 và PBP-3 của A. baumannii',
      loadingDose: 'Không có liều nạp riêng; bắt đầu liều cao ngay từ đầu',
      crclNormal: '9g (6g Ampicillin + 3g Sulbactam) mỗi 12 giờ HOẶC 3g mỗi 6 giờ (Tổng liều Sulbactam đạt 6 - 9g/ngày)',
      crcl30_49: '3g mỗi 8 giờ (tương đương 3g Sulbactam/ngày)',
      crcl10_29: '3g mỗi 12 giờ (tương đương 2g Sulbactam/ngày)',
      crclUnder10: '3g mỗi 24 giờ',
      hd: '3g mỗi 24 giờ + 1.5g sau buổi lọc máu (HD)',
      crrt: '3g mỗi 8 giờ (truyền tĩnh mạch trong 1 - 2 giờ)',
      choRayPearl: 'Kinh nghiệm kinh điển tại BV Chợ Rẫy: Sulbactam liều cao (6-9g/ngày) là "xương sống" trong phác đồ phối hợp diệt Acinetobacter baumannii kháng Carbapenem (CRAB), giúp giảm tải liều và độc tính thận của Colistin.'
    },
    {
      drug: 'Ceftazidime / Avibactam (Zavicefta)',
      unitNote: 'Kháng sinh mới ức chế men Carbapenemase nhóm KPC và OXA-48',
      loadingDose: 'Dùng ngay liều điều trị',
      crclNormal: '2.5g (2.0g Ceftazidime + 0.5g Avibactam) IV mỗi 8 giờ (truyền trong 2 giờ)',
      crcl30_49: '1.25g (1g/0.25g) IV mỗi 8 giờ (truyền 2 giờ)',
      crcl10_29: '0.9375g (0.75g/0.1875g) IV mỗi 12 giờ',
      crclUnder10: '0.9375g IV mỗi 24 giờ',
      hd: '0.9375g IV mỗi 24 giờ sau lọc máu; vào ngày lọc máu, dùng sau khi kết thúc lọc',
      crrt: '1.25g IV mỗi 8 giờ (CVVH/CVVHD)',
      choRayPearl: 'Khuyến cáo Chợ Rẫy 2024: Nếu chủng Klebsiella pneumoniae tiết Metallo-beta-lactamase (NDM - men chứa kẽm rất phổ biến tại VN), Avibactam không ức chế được NDM, BẮT BUỘC phối hợp Ceftazidime-Avibactam 2.5g q8h + Aztreonam 2g q8h truyền đồng thời!'
    }
  ],

  // PHÁC ĐỒ PHỐI HỢP ĐẶC TRỊ VI KHUẨN SIÊU ĐA KHÁNG (MDR/XDR/PDR) TUYẾN CUỐI
  multidrugResistantProtocols: [
    {
      id: 'choray_crab_protocol',
      pathogen: 'Acinetobacter baumannii Kháng Carbapenem (CRAB)',
      clinicalSetting: 'Viêm phổi thở máy (VAP), Nhiễm trùng máu, Nhiễm trùng vết mổ ICU',
      firstLineRegimen: 'Colistin (nạp 9-12 MIU, duy trì 4.5 MIU q12h) + Ampicillin/Sulbactam liều cao (Sulbactam 6-9g/ngày) + Meropenem 2g q8h truyền kéo dài 3 giờ.',
      alternativeRegimen: 'Colistin + Tigecycline (liều nạp 200mg, sau đó 100mg q12h) HOẶC Colistin + Doxycycline 100mg q12h (nếu không có Ampicillin/Sulbactam).',
      pearl: 'BV Chợ Rẫy 2024 nhấn mạnh: Tỷ lệ CRAB tại các khoa Hồi sức cấp cứu > 85%. Không dùng đơn trị liệu Colistin vì tỷ lệ thất bại và xuất hiện chủng kháng Colistin cực cao. Phác đồ 3 thuốc (Colistin + Sulbactam liều cao + Meropenem truyền 3h) cho tỷ lệ sạch khuẩn đờm và cải thiện lâm sàng vượt trội.'
    },
    {
      id: 'choray_crkp_protocol',
      pathogen: 'Klebsiella pneumoniae Kháng Carbapenem (CRKP / CRE)',
      clinicalSetting: 'Nhiễm trùng huyết, Viêm phổi bệnh viện nặng, Nhiễm trùng ổ bụng sau phẫu thuật',
      firstLineRegimen: '• Nếu chủng tiết men KPC hoặc OXA-48: Ceftazidime-Avibactam 2.5g IV q8h (truyền 2 giờ).\n• Nếu chủng tiết men Metallo-beta-lactamase (NDM): Ceftazidime-Avibactam 2.5g q8h + Aztreonam 2g q8h truyền tĩnh mạch song song.\n• Nếu không có Zavicefta: Colistin + Meropenem 2g q8h (truyền 3 giờ) + Amikacin 15-20 mg/kg/ngày (nếu nhạy Aminoglycoside) hoặc Fosfomycin tĩnh mạch (4g q6h).',
      alternativeRegimen: 'Colistin + Fosfomycin truyền tĩnh mạch 16-24g/ngày chia 3-4 lần.',
      pearl: 'Tại BV Chợ Rẫy, men NDM chiếm tỷ lệ cao trong các chủng CRE. Phối hợp Ceftazidime-Avibactam với Aztreonam là phác đồ cứu cánh có hiệu quả sống còn cao nhất hiện nay.'
    },
    {
      id: 'choray_crpa_protocol',
      pathogen: 'Pseudomonas aeruginosa Đa kháng (CRPA / MDR-PA)',
      clinicalSetting: 'Giãn phế quản bội nhiễm nặng, Bệnh nhân thở máy xâm lấn, Bỏng nặng',
      firstLineRegimen: 'Ceftolozane-Tazobactam 3g (2g/1g) IV q8h (truyền 1 giờ) HOẶC Colistin + Meropenem 2g q8h truyền 3 giờ + Amikacin.',
      alternativeRegimen: 'Ceftazidime-Avibactam 2.5g IV q8h (nếu nhạy cảm) HOẶC Cefepime 2g q8h truyền 4 giờ + Tobramycin.',
      pearl: 'Luôn tính toán độ thanh thải Creatinine trước mỗi liều Aminoglycoside. Tại Chợ Rẫy, chế độ liều ngắt quãng mở rộng Amikacin một lần mỗi ngày (Once-daily extended-interval) là chuẩn mực để giảm thiểu độc tai và độc thận.'
    }
  ]
};
