/**
 * Clinical Antimicrobial Formulary & Dosing Guide
 * Strictly curated from:
 * - Bệnh viện Chợ Rẫy (Sách Hướng dẫn Sử dụng Kháng sinh 2024 - NXB Y học)
 * - Bộ Y tế Việt Nam (Quyết định 5631/QĐ-BYT)
 * - The Sanford Guide to Antimicrobial Therapy 54th Ed.
 * - IDSA Guidelines (Gram-Negative & MRSA)
 * - Lexicomp Clinical Drug Information
 */

export const DRUGS_DATA = [
  {
    id: 'colistin',
    name: 'Colistin (Colistimethate Sodium - CMS)',
    brand: 'Colomycin, Tadim, Colistimethate',
    class: 'Polymyxin (Diệt khuẩn qua phá vỡ màng ngoài tế bào vi khuẩn)',
    mechanism: 'Hoạt động như chất diện hoạt cationic, gắn vào lipopolysaccharide (LPS) và phospholipid màng ngoài vi khuẩn Gram âm, làm rò rỉ các thành phần nội bào và tiêu diệt vi khuẩn.',
    sources: [
      { badge: 'BV Chợ Rẫy 2024', class: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    normalDose: 'Liều nạp: 9 - 12 triệu IU (hoặc 300 - 400 mg CBA). Duy trì: 4.5 triệu IU mỗi 12 giờ (CrCl > 50 mL/phút).',
    renalDose: {
      crcl50: '9 triệu IU/ngày chia 2 lần (4.5 triệu IU mỗi 12 giờ)',
      crcl20_50: '5.5 - 7.5 triệu IU/ngày chia 2 lần (2.5 - 3.5 triệu IU mỗi 12 giờ)',
      crcl_under20: '3 - 4.5 triệu IU/ngày (1.5 triệu IU mỗi 12h hoặc 3 triệu IU mỗi 24h)',
      hd: '2 - 3 triệu IU/ngày + BỔ SUNG 1.5 - 2 triệu IU sau mỗi lần lọc máu (HD)',
      crrt: 'Liều nạp 9 triệu IU, duy trì 6.5 - 9 triệu IU/ngày (4.5 triệu IU mỗi 12 giờ do màng lọc CRRT thải Colistin rất lớn)'
    },
    administration: {
      compatibleDiluents: 'Natri Clorid 0.9% hoặc Dextrose 5%. Pha 1 lọ (1 - 2 triệu IU) trong 50 - 100mL NaCl 0.9%.',
      infusionRate: '• Liều nạp (Loading dose): Truyền tĩnh mạch trong 1 - 2 giờ để nhanh chóng đạt nồng độ điều trị trong huyết tương (Cmax > 2 mcg/mL).\n• Liều duy trì: Truyền trong 60 phút mỗi 12 giờ.\n• KHÔNG ĐƯỢC TIÊM TĨNH MẠCH NHANH (Bolus) vì nguy cơ ức chế thần kinh cơ gây ngừng thở đột ngột!',
      foodTiming: 'Chỉ dùng đường tiêm truyền tĩnh mạch hoặc khí dung (khí dung Colistin 1 - 2 triệu IU x 2 lần/ngày hỗ trợ điều trị VAP do Acinetobacter/Pseudomonas).'
    },
    pearl: 'CHUẨN BV CHỢ RẪY 2024: Bắt buộc dùng liều nạp 9-12 triệu IU cho mọi bệnh nhân (kể cả có suy thận cấp/mạn). Tuyệt đối KHÔNG dùng đơn trị liệu Colistin; bắt buộc phối hợp với Meropenem truyền kéo dài 3h hoặc Ampicillin/Sulbactam liều cao để tránh xuất hiện chủng vi khuẩn đề kháng Colistin.',
    monitoring: 'Theo dõi Creatinine máu và lượng nước tiểu hàng ngày (nguy cơ độc thận AKI > 30-50%); theo dõi dấu hiệu dị cảm, yếu cơ, ức chế hô hấp (độc thần kinh).'
  },
  {
    id: 'amp_sulbactam_high',
    name: 'Ampicillin / Sulbactam Liều cao (High-Dose)',
    brand: 'Unasyn, Sulperazon, Ampicillin-Sulbactam',
    class: 'Aminopenicillin + Beta-lactamase Inhibitor (Liều cao đặc trị Acinetobacter)',
    mechanism: 'Phân tử Sulbactam có ái lực đặc hiệu và hoạt tính diệt khuẩn nội tại trực tiếp gắn kết PBP-1 và PBP-3 của Acinetobacter baumannii.',
    sources: [
      { badge: 'BV Chợ Rẫy 2024', class: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
      { badge: 'IDSA AMR Guidance', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' }
    ],
    normalDose: '9g (6g Ampicillin + 3g Sulbactam) mỗi 12 giờ HOẶC 3g mỗi 6 giờ truyền IV (tổng liều Sulbactam đạt 6 - 9g/ngày)',
    renalDose: {
      crcl50: '9g mỗi 12 giờ HOẶC 3g mỗi 6 giờ (Sulbactam 6 - 9g/ngày)',
      crcl20_50: '3g mỗi 8 giờ (Sulbactam 3g/ngày)',
      crcl_under20: '3g mỗi 12 giờ (Sulbactam 2g/ngày)',
      hd: '3g mỗi 24 giờ + bổ sung 1.5g sau buổi lọc máu (HD)',
      crrt: '3g mỗi 8 giờ (truyền IV trong 1 - 2 giờ)'
    },
    administration: {
      compatibleDiluents: 'Natri Clorid 0.9%. Không ổn định trong dịch truyền chứa Dextrose (dễ bị thủy phân). Dùng ngay sau khi pha.',
      infusionRate: 'Truyền tĩnh mạch trong 60 phút hoặc truyền kéo dài trong 3 - 4 giờ để tối ưu hóa nồng độ Sulbactam tự do trên MIC.',
      foodTiming: 'Đường tiêm truyền tĩnh mạch.'
    },
    pearl: 'KINH NGHIỆM ĐẶC BIỆT BV CHỢ RẪY 2024: Liều thông thường 1.5g - 3g/ngày chỉ đủ để ức chế men beta-lactamase. Để tiêu diệt A. baumannii kháng Carbapenem (CRAB), bắt buộc phải dùng liều Sulbactam cao từ 6 đến 9 gam/ngày phối hợp cùng Colistin.',
    monitoring: 'Men gan AST/ALT, chức năng thận, phát ban dị ứng da.'
  },
  {
    id: 'pip_tazo',
    name: 'Piperacillin - Tazobactam',
    brand: 'Zosyn, Tazocin, Pip-Tazo',
    class: 'Antipseudomonal Penicillin + Beta-lactamase Inhibitor',
    mechanism: 'Ức chế tổng hợp thành tế bào vi khuẩn qua gắn PBP + bảo vệ phân tử khỏi men beta-lactamase',
    sources: [
      { badge: 'BV Chợ Rẫy 2024', class: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    normalDose: '4.5g IV mỗi 6 giờ (tiêu chuẩn hoặc truyền kéo dài 3-4 giờ để tối ưu %T > MIC). Hoặc 3.375g q6h.',
    renalDose: {
      crcl50: '4.5g IV mỗi 6 giờ (100% liều)',
      crcl20_50: '3.375g IV mỗi 6 giờ HOẶC 2.25g IV mỗi 6 giờ',
      crcl_under20: '2.25g IV mỗi 6 giờ HOẶC 2.25g IV mỗi 8 giờ',
      hd: '2.25g IV mỗi 8 giờ + bổ sung 0.75g sau mỗi lần lọc máu (HD)',
      crrt: '3.375g IV mỗi 6 giờ HOẶC 4.5g IV mỗi 8 giờ (truyền kéo dài 3-4h)'
    },
    administration: {
      compatibleDiluents: 'Natri Clorid 0.9% hoặc Dextrose 5%. Hoàn nguyên 4.5g với 20mL Nước cất hoặc NaCl 0.9%, sau đó pha tiếp vào 100mL dịch truyền.',
      infusionRate: '• Tiêu chuẩn: Truyền tĩnh mạch trong 30 phút.\n• TỐI ƯU PK/PD (Extended Infusion): Truyền kéo dài trong 3 - 4 giờ (sau liều nạp 30 phút) để tối đa hóa %T > MIC đạt > 50-60%, tăng tỷ lệ sống sót ở bệnh nhân sốc nhiễm khuẩn hoặc P. aeruginosa.',
      foodTiming: 'Chỉ dùng tiêm truyền tĩnh mạch (IV).'
    },
    pearl: 'Phối hợp Pip-Tazo + Vancomycin làm tăng nguy cơ tổn thương thận cấp (AKI) gấp 2 - 3 lần so với phối hợp Cefepime + Vancomycin. Theo dõi Creatinine hàng ngày!',
    monitoring: 'Điện giải đồ (chứa 2.79 mEq Na+/gam thuốc), Creatinine huyết thanh, công thức máu nếu dùng > 10 ngày.'
  },
  {
    id: 'meropenem',
    name: 'Meropenem',
    brand: 'Meronem',
    class: 'Carbapenem phổ siêu rộng',
    mechanism: 'Gắn kết bền vững với PBP-2 và PBP-3, bền vững trước men ESBL và AmpC',
    sources: [
      { badge: 'BV Chợ Rẫy 2024', class: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' },
      { badge: 'BV Bệnh Nhiệt Đới - eMed', class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' }
    ],
    normalDose: '1g IV mỗi 8 giờ. Vi khuẩn đa kháng / Viêm phổi thở máy / Viêm màng não: 2g IV mỗi 8 giờ TRUYỀN KÉO DÀI 3 GIỜ',
    renalDose: {
      crcl50: '1g - 2g IV mỗi 8 giờ (truyền 3 giờ nếu nhiễm khuẩn nặng)',
      crcl20_50: '1g - 2g IV mỗi 12 giờ (truyền 3 giờ)',
      crcl_under20: '500mg - 1g IV mỗi 12 giờ (CrCl 10 - 25); 500mg - 1g IV mỗi 24 giờ (CrCl < 10)',
      hd: '500mg - 1g IV mỗi 24 giờ, dùng ngay sau buổi lọc máu',
      crrt: '1g IV mỗi 8 giờ HOẶC 2g IV mỗi 12 giờ (truyền kéo dài 3 giờ)'
    },
    administration: {
      compatibleDiluents: 'NaCl 0.9% hoặc D5W. Pha 1 lọ 1g trong 100mL NaCl 0.9% (NaCl 0.9% ổn định tốt hơn D5W khi truyền kéo dài).',
      infusionRate: '• Truyền thông thường: 30 phút.\n• TỐI ƯU PK/PD (Extended Infusion): Truyền trong 3 GIỜ. Theo Hướng dẫn BV Chợ Rẫy 2024, truyền kéo dài 3h là chuẩn mực ICU để tối đa hóa hiệu quả diệt vi khuẩn Gram âm có MIC từ 2 đến 8 mcg/mL. Lưu ý dung dịch chỉ bền ở nhiệt độ phòng tối đa 3-4 giờ.',
      foodTiming: 'Đường tiêm truyền tĩnh mạch.'
    },
    pearl: 'TƯƠNG TÁC THUỐC ĐẶC BIỆT: Meropenem làm tụt nồng độ Acid Valproic (Depakine) 80 - 90% chỉ sau 24 giờ, gây bùng phát co giật kháng trị! Chống chỉ định phối hợp tuyệt đối.',
    monitoring: 'Chức năng thận, triệu chứng co giật ở bệnh nhân có tổn thương thần kinh trung ương.'
  },
  {
    id: 'vancomycin',
    name: 'Vancomycin',
    brand: 'Vancocin',
    class: 'Glycopeptide',
    mechanism: 'Ức chế tổng hợp vách tế bào vi khuẩn qua gắn đầu D-Ala-D-Ala của peptidoglycan',
    sources: [
      { badge: 'BV Chợ Rẫy 2024', class: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'IDSA Guidance 2020', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' }
    ],
    normalDose: 'Liều nạp: 25 - 30 mg/kg (tối đa 2.5 - 3.0g). Duy trì: 15 - 20 mg/kg IV mỗi 8 - 12 giờ.',
    renalDose: {
      crcl50: '15 - 20 mg/kg mỗi 8 - 12 giờ (TDM AUC/MIC 400-600)',
      crcl20_50: '15 mg/kg mỗi 24 giờ',
      crcl_under20: '15 mg/kg mỗi 48 giờ hoặc dùng ngắt quãng theo nồng độ đáy (Trough < 15 mcg/mL)',
      hd: 'Tải 20 - 25 mg/kg, sau đó bổ sung 500 - 1000 mg sau mỗi lần lọc máu dựa trên TDM',
      crrt: 'Tải 20 - 25 mg/kg; duy trì 7.5 - 10 mg/kg mỗi 12 giờ (đo nồng độ đáy hàng ngày)'
    },
    administration: {
      compatibleDiluents: 'NaCl 0.9%, D5W. Pha loãng nồng độ tối đa không quá 5 mg/mL (1g pha trong ít nhất 200mL).',
      infusionRate: 'QUY TẮC AN TOÀN BẮT BUỘC: Tốc độ truyền tĩnh mạch KHÔNG ĐƯỢC VƯỢT QUÁ 1.000 mg/giờ (<= 10 mg/phút). Ví dụ: 1.5g phải truyền ít nhất 90 - 120 phút. Truyền quá nhanh sẽ gây Red Man Syndrome.',
      foodTiming: 'Chỉ định đường uống DUY NHẤT trong điều trị Viêm ruột giả mạc C. difficile (125mg q6h, thuốc không hấp thu qua ruột).'
    },
    pearl: 'CHUẨN TDM BV CHỢ RẪY 2024: Đo nồng độ đáy (Trough) ngay trước liều thứ 4. Đích nồng độ đáy là 15 - 20 mcg/mL cho viêm phổi thở máy, sốc nhiễm khuẩn và viêm màng não. Nếu trough > 20 mcg/mL, nguy cơ tổn thương thận cấp tăng vọt.',
    monitoring: 'TDM đáy 15-20 mcg/mL, Creatinine huyết thanh 48h/lần.'
  },
  {
    id: 'ceftriaxone',
    name: 'Ceftriaxone',
    brand: 'Rocephin, Cefaxone',
    class: 'Cephalosporin thế hệ 3',
    mechanism: 'Diệt khuẩn thông qua ức chế tổng hợp peptidoglycan thành tế bào',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    normalDose: '1 - 2g IV/IM mỗi 24 giờ. Viêm màng não mủ: 2g IV mỗi 12 giờ.',
    renalDose: {
      crcl50: '1 - 2g IV mỗi 24 giờ (KHÔNG CẦN CHỈNH LIỀU)',
      crcl20_50: '1 - 2g IV mỗi 24 giờ (KHÔNG CẦN CHỈNH LIỀU)',
      crcl_under20: 'Tối đa 2g/ngày (chỉ giảm liều nếu suy cả gan và thận nặng)',
      hd: 'Không cần bổ sung sau lọc máu',
      crrt: '2g IV mỗi 24 giờ'
    },
    administration: {
      compatibleDiluents: 'NaCl 0.9%, D5W, Nước cất pha tiêm. TUYỆT ĐỐI CHỐNG CHỈ ĐỊNH pha hoặc dùng chung đường truyền với dung dịch chứa Canxi (Ringer Lactate) vì nguy cơ kết tủa Ceftriaxone-Canxi.',
      infusionRate: 'Truyền tĩnh mạch trong 30 phút hoặc tiêm tĩnh mạch chậm 2-4 phút.',
      foodTiming: 'Đường tiêm truyền tĩnh mạch hoặc tiêm bắp sâu.'
    },
    pearl: 'Thải trừ kép: 60% qua thận và 40% qua gan mật. Không cần chỉnh liều thận. Tránh dung dịch chứa Canxi.',
    monitoring: 'Men gan, bilirubin (nguy cơ bùn mật khi dùng liều cao dài ngày).'
  },
  {
    id: 'levofloxacin',
    name: 'Levofloxacin',
    brand: 'Tavanic, Cravit',
    class: 'Respiratory Fluoroquinolone',
    mechanism: 'Ức chế DNA-gyrase (Topoisomerase II) và Topoisomerase IV làm đứt gãy DNA vi khuẩn',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    normalDose: '500mg hoặc 750mg IV/PO mỗi 24 giờ',
    renalDose: {
      crcl50: '750mg mỗi 24 giờ (CrCl >= 50)',
      crcl20_50: '750mg mỗi 48 giờ (HOẶC 500mg khởi đầu, sau đó 250mg mỗi 24h)',
      crcl_under20: '750mg liều đầu, sau đó 500mg mỗi 48 giờ (CrCl < 20)',
      hd: '750mg khởi đầu, sau đó 500mg mỗi 48 giờ (sau lọc máu)',
      crrt: '250mg mỗi 24 giờ hoặc 500mg mỗi 24-48 giờ'
    },
    administration: {
      compatibleDiluents: 'Chai dịch truyền pha sẵn 500mg/100mL hoặc 750mg/150mL NaCl 0.9% / D5W.',
      infusionRate: 'Truyền tĩnh mạch chậm: Liều 500mg truyền trong ít nhất 60 phút; Liều 750mg truyền trong ít nhất 90 phút. Tránh truyền nhanh vì nguy cơ tụt huyết áp.',
      foodTiming: '• Đường uống: Sinh khả dụng gần 100%. Uống cách xa ít nhất 2 giờ trước hoặc 4-6 giờ sau thuốc bổ sung Sắt, Canxi, Antacid.'
    },
    pearl: 'FDA Black Box Warnings: Đứt gân gót Achilles, kéo dài khoảng QT gây xoắn đỉnh, hạ đường huyết hôn mê khi phối hợp Sulfonylurea.',
    monitoring: 'Điện tâm đồ (QTc), đường huyết mao mạch ở người cao tuổi ĐTĐ.'
  }
];
