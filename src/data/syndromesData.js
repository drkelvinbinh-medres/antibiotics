/**
 * Clinical Syndromes Database with Cross-Reference:
 * - Chuẩn Quốc tế: The Sanford Guide & IDSA Guidelines
 * - Thực chiến Việt Nam: Bộ Y tế (QĐ 5631, QĐ 7014, QĐ 4800) & BV Bệnh Nhiệt Đới TPHCM (emed.bvbnd.vn)
 */

export const SYNDROMES_DATA = [
  {
    id: 'cap_healthy',
    category: 'respiratory',
    organ: 'Hô hấp (Respiratory)',
    disease: 'Viêm phổi cộng đồng (CAP) - Ngoại trú khỏe mạnh',
    stratification: 'Ngoại trú, không bệnh tim/phổi mạn, không đái tháo đường, không nguy cơ MRSA',
    pathogens: 'Streptococcus pneumoniae, Mycoplasma pneumoniae, Chlamydia pneumoniae, Virus hô hấp',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 7014', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'IDSA/ATS CAP 2019', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    primaryRegimen: [
      { drug: 'Amoxicillin', dose: '1g uống mỗi 8 giờ (PO TID) x 5 ngày' },
      { drug: 'Doxycycline', dose: '100mg uống mỗi 12 giờ (PO BID) x 5-7 ngày' }
    ],
    altRegimen: [
      { drug: 'Azithromycin', dose: '500mg ngày 1, sau đó 250mg mỗi 24h x 4 ngày (chỉ khuyến cáo nếu tỷ lệ kháng Macrolide địa phương < 25%)' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (IDSA / Sanford Guide)',
        content: 'IDSA khuyến cáo mạnh Amoxicillin hoặc Doxycycline là lựa chọn hàng đầu. Đơn trị liệu bằng Macrolide (Azithromycin/Clarithromycin) CHỈ được chấp nhận tại các khu vực có tỷ lệ phế cầu kháng Macrolide dưới 25%.'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (Bộ Y tế QĐ 7014 & BV Bệnh Nhiệt Đới)',
        content: 'Tại Việt Nam, nghiên cứu SOAR và dữ liệu BV Bệnh Nhiệt Đới cho thấy tỷ lệ S. pneumoniae kháng Macrolide đã vượt 70 - 80%. Do đó, Bộ Y tế khuyến cáo KHÔNG DÙNG đơn trị liệu Macrolide cho CAP ngoại trú tại Việt Nam. Khuyến cáo ưu tiên: Amoxicillin liều cao (3g/ngày) HOẶC Amoxicillin-Clavulanate (875/125mg BID).'
      }
    },
    notes: 'Khuyến cáo thời gian điều trị tối thiểu 5 ngày, ngưng khi hết sốt 48h và sinh hiệu ổn định.'
  },
  {
    id: 'cap_comorbid',
    category: 'respiratory',
    organ: 'Hô hấp (Respiratory)',
    disease: 'Viêm phổi cộng đồng (CAP) - Ngoại trú có bệnh nền',
    stratification: 'Có bệnh tim, gan, thận mạn, COPD, ĐTĐ, nghiện rượu, hoặc dùng KS trong vòng 90 ngày',
    pathogens: 'S. pneumoniae (tăng nguy cơ kháng Penicillin), H. influenzae, M. catarrhalis, Atypicals',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 7014', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'IDSA/ATS CAP 2019', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' }
    ],
    primaryRegimen: [
      { drug: 'Amoxicillin-Clavulanate', dose: '875/125mg PO BID HOẶC 2000/125mg PO BID' },
      { drug: 'Azithromycin', dose: '500mg PO ngày 1, sau đó 250mg QD (kết hợp với Beta-lactam)' }
    ],
    altRegimen: [
      { drug: 'Levofloxacin', dose: '750mg PO mỗi 24 giờ x 5 ngày' },
      { drug: 'Moxifloxacin', dose: '400mg PO mỗi 24 giờ x 5-7 ngày' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (IDSA / Sanford Guide)',
        content: 'Phối hợp B-lactam (Amox-Clav hoặc Cefuroxime/Cefpodoxime) + Macrolide HOẶC đơn trị liệu Respiratory Fluoroquinolone (Levofloxacin 750mg QD hoặc Moxifloxacin 400mg QD).'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (Bộ Y tế QĐ 7014 & BV Bệnh Nhiệt Đới)',
        content: 'Bác sĩ Việt Nam thường ưu tiên phối hợp Amoxicillin-Clavulanate + Azithromycin. Nếu bệnh nhân dung nạp kém hoặc dị ứng, Levofloxacin là lựa chọn rất hiệu quả nhưng cần loại trừ bệnh cảnh lao phổi đang tiến triển trước khi kê đơn FQ.'
      }
    },
    notes: 'Phối hợp Beta-lactam + Macrolide HOẶC đơn trị liệu B-Lactam + Respiratory Fluoroquinolone.'
  },
  {
    id: 'cap_inpatient',
    category: 'respiratory',
    organ: 'Hô hấp (Respiratory)',
    disease: 'Viêm phổi cộng đồng (CAP) - Nội trú (Non-ICU)',
    stratification: 'Nhập khoa phòng thường, CURB-65 >= 2 hoặc PSI Class III-IV',
    pathogens: 'S. pneumoniae, H. influenzae, Legionella spp., vi khuẩn không điển hình',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 7014', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Sanford Guide 54th', class: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' }
    ],
    primaryRegimen: [
      { drug: 'Ceftriaxone', dose: '1-2g IV mỗi 24 giờ' },
      { drug: 'Azithromycin', dose: '500mg IV/PO mỗi 24 giờ' }
    ],
    altRegimen: [
      { drug: 'Levofloxacin', dose: '750mg IV mỗi 24 giờ (nếu dị ứng Beta-lactam)' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (IDSA)',
        content: 'Khuyến cáo Ceftriaxone 1-2g IV QD phối hợp Azithromycin 500mg QD hoặc đơn trị liệu Levofloxacin 750mg IV.'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (Bộ Y tế QĐ 7014 & BV Bệnh Nhiệt Đới)',
        content: 'Ceftriaxone 2g IV QD + Azithromycin 500mg IV/PO là phác đồ nền tảng. Khi bệnh nhân hết sốt và ăn uống được sau 48-72h, chuyển đổi sớm sang kháng sinh đường uống (IV-to-PO switch) để rút ngắn ngày nằm viện.'
      }
    },
    notes: 'Có thể chuyển đổi sang đường uống (PO) ngay khi người bệnh cải thiện lâm sàng và ăn uống được.'
  },
  {
    id: 'cap_severe_icu',
    category: 'respiratory',
    organ: 'Hô hấp (Respiratory)',
    disease: 'Viêm phổi cộng đồng nặng ICU (Nguy cơ Pseudomonas & MRSA)',
    stratification: 'Cần thở máy xâm lấn hoặc sốc nhiễm khuẩn (ATS/IDSA Major criteria)',
    pathogens: 'S. pneumoniae, Legionella, Pseudomonas aeruginosa, CA-MRSA',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'IDSA/ATS Guidelines', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
      { badge: 'BV Bệnh Nhiệt Đới - eMed', class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' }
    ],
    primaryRegimen: [
      { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV mỗi 6 giờ (truyền kéo dài 3-4 giờ)' },
      { drug: 'Levofloxacin', dose: '750mg IV mỗi 24 giờ' },
      { drug: 'Vancomycin', dose: 'Liều tải 25-30 mg/kg, sau đó 15-20 mg/kg IV q8-12h' }
    ],
    altRegimen: [
      { drug: 'Meropenem', dose: '1g IV mỗi 8 giờ (thay thế Pip-Tazo)' },
      { drug: 'Linezolid', dose: '600mg IV mỗi 12 giờ (thay thế Vancomycin)' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (IDSA)',
        content: 'Phủ P. aeruginosa bằng Beta-lactam kháng trực khuẩn mủ xanh (Pip-Tazo hoặc Cefepime) kết hợp Ciprofloxacin hoặc Levofloxacin; thêm Vancomycin nếu có yếu tố nguy cơ MRSA (tiền sử nhiễm MRSA hoặc đàm có vi cầu khuẩn Gram dương).'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (BV Bệnh Nhiệt Đới - eMed)',
        content: 'Theo dõi chặt chẽ chức năng thận nếu dùng đồng thời Pip-Tazo + Vancomycin (nguy cơ AKI tăng 2-3 lần). Khuyến cáo ưu tiên Meropenem 1g q8h truyền kéo dài 3h + Vancomycin, hoặc chuyển sang Cefepime + Vancomycin để bảo vệ thận.'
      }
    },
    notes: 'Xuống thang kháng sinh ngay khi có kết quả cấy đờm/máu và PCR đa mồi vi sinh vật hô hấp.'
  },
  {
    id: 'uti_pyelonephritis',
    category: 'urinary',
    organ: 'Tiết niệu (Urinary Tract)',
    disease: 'Viêm đài bể thận cấp (Acute Pyelonephritis)',
    stratification: 'Sốt, đau hông lưng, rung thận (+), buồn nôn, bạch cầu niệu cao',
    pathogens: 'E. coli, K. pneumoniae, Proteus mirabilis, Enterobacterales',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 5631', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'IDSA UTI Guidelines', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
      { badge: 'BV Bệnh Nhiệt Đới - eMed', class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' }
    ],
    primaryRegimen: [
      { drug: 'Ceftriaxone', dose: '1-2g IV mỗi 24 giờ x 10-14 ngày' },
      { drug: 'Ciprofloxacin', dose: '500mg PO mỗi 12 giờ x 7 ngày HOẶC 400mg IV q12h' }
    ],
    altRegimen: [
      { drug: 'Piperacillin-Tazobactam', dose: '3.375 - 4.5g IV mỗi 6 giờ' },
      { drug: 'Meropenem', dose: '1g IV mỗi 8 giờ (nếu nghi ngờ vi khuẩn sinh ESBL)' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (IDSA)',
        content: 'Ciprofloxacin PO x 7 ngày hoặc Levofloxacin x 5 ngày là lựa chọn hàng đầu nếu đề kháng FQ tại địa phương < 10%. Nếu kháng > 10%, bắt đầu bằng 1 liều tiêm tĩnh mạch Ceftriaxone 1g hoặc Aminoglycoside.'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (BV Bệnh Nhiệt Đới - eMed)',
        content: 'Tại Việt Nam, tỷ lệ E. coli đề kháng Fluoroquinolones trong cộng đồng rất cao (> 50-60%). Do đó, BV Bệnh Nhiệt Đới khuyến cáo KHÔNG NÊN dùng đơn trị Ciprofloxacin/Levofloxacin theo kinh nghiệm cho viêm đài bể thận nặng. Khởi đầu ưu tiên Ceftriaxone 1-2g IV hoặc Cefoperazone-Sulbactam (nếu nghi ngờ ESBL).'
      }
    },
    notes: 'Luôn cấy nước tiểu và cấy máu trước khi bắt đầu liều kháng sinh đầu tiên.'
  },
  {
    id: 'sepsis_unknown',
    category: 'sepsis',
    organ: 'Nhiễm khuẩn huyết (Sepsis & Septic Shock)',
    disease: 'Sốc nhiễm khuẩn chưa rõ đường vào (Septic Shock of Unknown Origin)',
    stratification: 'Tụt huyết áp cần thuốc vận mạch (MAP < 65), Lactate máu > 2 mmol/L',
    pathogens: 'Gram âm đa kháng (Pseudomonas, Klebsiella), Gram dương (MRSA, Enterococcus)',
    sources: [
      { badge: 'Bộ Y tế VN - QĐ 4800', class: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' },
      { badge: 'Surviving Sepsis 2021', class: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
      { badge: 'BV Bệnh Nhiệt Đới - eMed', class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' }
    ],
    primaryRegimen: [
      { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV mỗi 6 giờ (truyền kéo dài)' },
      { drug: 'Vancomycin', dose: 'Tải liều 25-30 mg/kg IV, sau đó 15-20 mg/kg q8-12h' }
    ],
    altRegimen: [
      { drug: 'Meropenem', dose: '1g IV mỗi 8 giờ + Amikacin 15-20 mg/kg IV QD' }
    ],
    crossReference: {
      international: {
        title: 'Góc nhìn Quốc tế (Surviving Sepsis Campaign)',
        content: 'Kháng sinh phổ rộng đường tĩnh mạch trong 1 giờ đầu tiên (Golden Hour). Lấy 2 bộ cấy máu trước khi dùng thuốc. Bù dịch tinh thể 30 mL/kg trong 3 giờ.'
      },
      vietnam: {
        title: 'Thực chiến Việt Nam (BV Bệnh Nhiệt Đới - eMed & Bộ Y tế QĐ 4800)',
        content: 'Tại Việt Nam, với bệnh nhân sốc nhiễm khuẩn có tiền sử nằm viện hoặc thủ thuật xâm lấn (Nhóm MDR 3), ưu tiên Meropenem 1-2g q8h truyền kéo dài 3 giờ phối hợp với Amikacin hoặc Colistin liều nạp + Vancomycin. Tái đánh giá kháng sinh sau 48-72 giờ (Timeout).'
      }
    },
    notes: 'Surviving Sepsis Campaign: Bắt đầu kháng sinh tĩnh mạch phổ rộng trong vòng 1 giờ đầu tiên (Golden Hour).'
  }
];
