/**
 * Drug-Drug Interactions & Clinical Safety Alerts Database
 * Curated from:
 * - Bộ Y tế Việt Nam (QĐ 5631/QĐ-BYT - Hướng dẫn thực hành dược lâm sàng)
 * - The Sanford Guide to Antimicrobial Therapy & Lexicomp Drug Interactions
 * - FDA Black Box Warnings
 */

export const DRUG_INTERACTIONS_DATA = [
  {
    id: 'mero_valproate',
    antibiotic: 'Meropenem (Carbapenems)',
    coDrug: 'Valproic Acid / Natri Valproate (Depakine)',
    coDrugClass: 'Thần kinh - Chống động kinh',
    severity: 'contraindicated',
    severityLabel: 'Chống chỉ định tuyệt đối (Contraindicated)',
    severityColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    mechanism: 'Carbapenem ức chế enzym acylpeptide hydrolase và ức chế sự tái hấp thu Valproate ở ruột, dẫn đến giảm nồng độ acid valproic tự do trong máu từ 80 - 90% chỉ sau 24 giờ.',
    clinicalImpact: 'Bùng phát các cơn co giật kháng trị đe dọa tính mạng (Breakthrough seizures / Status epilepticus). Tăng liều Valproate KHÔNG bù trừ được sự sụt giảm này!',
    management: 'CHỐNG CHỈ ĐỊNH PHỐI HỢP. Chuyển sang kháng sinh khác (Piperacillin-Tazobactam, Cefepime, Aztreonam) hoặc đổi thuốc chống co giật sang Levetiracetam (Keppra) trước khi dùng Carbapenem.',
    source: 'Bộ Y tế VN (QĐ 5631) & Sanford Guide'
  },
  {
    id: 'quinolone_sulfonylurea',
    antibiotic: 'Levofloxacin / Ciprofloxacin / Moxifloxacin',
    coDrug: 'Gliclazide (Diamicron), Glimepiride, Glibenclamide',
    coDrugClass: 'Nội tiết - Hạ đường huyết nhóm Sulfonylurea',
    severity: 'major',
    severityLabel: 'Cảnh báo Nghiêm trọng (Major)',
    severityColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    mechanism: 'Fluoroquinolone phong bế các kênh Kali phụ thuộc ATP trên màng tế bào beta của tuyến tụy, kích thích giải phóng Insulin quá mức kết hợp với tác dụng của Sulfonylurea.',
    clinicalImpact: 'Hạ đường huyết nặng, kéo dài, có thể dẫn đến hôn mê và tổn thương não không hồi phục, đặc biệt phổ biến ở bệnh nhân cao tuổi có suy giảm chức năng thận.',
    management: 'Theo dõi đường huyết mao mạch ít nhất 4 lần/ngày. Hướng dẫn bệnh nhân nhận biết triệu chứng hạ đường huyết. Cân nhắc giảm liều Sulfonylurea hoặc ưu tiên nhóm Beta-lactam.',
    source: 'FDA Black Box Warning & Bộ Y tế VN (QĐ 5631)'
  },
  {
    id: 'quinolone_macrolide_qt',
    antibiotic: 'Levofloxacin / Moxifloxacin / Azithromycin',
    coDrug: 'Amiodarone (Cordarone), Sotalol, Ondansetron',
    coDrugClass: 'Tim mạch - Chống loạn nhịp / Chống nôn',
    severity: 'contraindicated',
    severityLabel: 'Chống chỉ định / Nguy cơ Rất cao',
    severityColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    mechanism: 'Hiệp đồng ức chế dòng ion Kali chỉnh lưu nhập chậm (I_Kr) trong pha tái cực của điện thế hoạt động cơ tim, làm kéo dài thời gian tái cực thất.',
    clinicalImpact: 'Kéo dài khoảng QTc trên ECG (> 500 ms) dẫn đến loạn nhịp thất chết người: Xoắn đỉnh (Torsades de Pointes) và ngừng tim đột ngột.',
    management: 'Đo điện tâm đồ (ECG) trước khi chỉ định. Chống chỉ định phối hợp nếu QTc nền > 460ms (nam) hoặc > 470ms (nữ), hoặc có hạ kali/magie máu chưa được bù trừ. Chọn Ceftriaxone hoặc Beta-lactam thay thế.',
    source: 'IDSA Guidelines & AHA Clinical Advisory'
  },
  {
    id: 'tmpsmx_acei',
    antibiotic: 'Cotrimoxazole (TMP-SMX / Bactrim)',
    coDrug: 'Enalapril, Perindopril, Losartan, Spironolactone',
    coDrugClass: 'Tim mạch - Ức chế men chuyển (ACEi) / ARBs / Lợi tiểu giữ Kali',
    severity: 'major',
    severityLabel: 'Cảnh báo Nghiêm trọng (Major)',
    severityColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    mechanism: 'Thành phần Trimethoprim có cấu trúc hóa học và tác dụng tương tự thuốc lợi tiểu giữ Kali Amiloride, ức chế kênh Natri biểu mô (ENaC) ở ống lượn xa, ngăn bài tiết Kali.',
    clinicalImpact: 'Tăng Kali máu kịch phát (có thể > 6.5 mmol/L), gây rối loạn dẫn truyền tim, chậm nhịp xoang, rung thất và tử vong đột ngột, đặc biệt khi CrCl < 50 mL/min.',
    management: 'Xét nghiệm Kali máu và Creatinine trước khi dùng và sau 48-72 giờ. Tránh phối hợp trên bệnh nhân suy thận nếu có kháng sinh thay thế an toàn hơn.',
    source: 'Sanford Guide & Bộ Y tế VN (QĐ 5631)'
  },
  {
    id: 'clarithro_statin',
    antibiotic: 'Clarithromycin / Erythromycin',
    coDrug: 'Simvastatin (Zocor), Atorvastatin (Lipitor)',
    coDrugClass: 'Tim mạch - Thuốc hạ Lipid máu nhóm Statin',
    severity: 'contraindicated',
    severityLabel: 'Chống chỉ định phối hợp (Contraindicated)',
    severityColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    mechanism: 'Clarithromycin là chất ức chế cực mạnh enzym cytochrom P450 CYP3A4 tại gan và ruột, làm giảm chuyển hóa bước một của Statin, tăng nồng độ Statin trong máu lên 4 - 10 lần.',
    clinicalImpact: 'Tiêu cơ vân cấp tính (Rhabdomyolysis), đau cơ dữ dội, tăng vọt men CK, giải phóng Myoglobin gây tắc ống thận và suy thận cấp vô niệu.',
    management: 'TẠM NGƯNG Simvastatin/Atorvastatin trong suốt đợt điều trị Clarithromycin. Hoặc chuyển sang Azithromycin (không ức chế CYP3A4) hoặc Rosuvastatin (chuyển hóa qua CYP2C9).',
    source: 'FDA Safety Alert & Sanford Guide'
  },
  {
    id: 'warfarin_antibiotics',
    antibiotic: 'Metronidazole / Cotrimoxazole / Ciprofloxacin',
    coDrug: 'Warfarin (Sintrom / Coumadin)',
    coDrugClass: 'Tim mạch - Thuốc chống đông kháng Vitamin K',
    severity: 'major',
    severityLabel: 'Cảnh báo Nghiêm trọng (Major)',
    severityColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    mechanism: 'Ức chế enzym CYP2C9 chuyển hóa đồng phân có hoạt tính S-warfarin, đồng thời diệt khuẩn đường ruột sản xuất Vitamin K tự nhiên.',
    clinicalImpact: 'Tăng vọt chỉ số INR (thường > 5.0 - 10.0), gây nguy cơ xuất huyết tiêu hóa, xuất huyết nội sọ và tụ máu cơ đe dọa tính mạng.',
    management: 'Chủ động giảm 30 - 50% liều Warfarin ngay khi bắt đầu kháng sinh. Theo dõi xét nghiệm INR mỗi 48 giờ. Hướng dẫn bệnh nhân phát hiện các dấu hiệu chảy máu chân răng, bầm tím dưới da.',
    source: 'Bộ Y tế VN (QĐ 5631) & Lexicomp'
  },
  {
    id: 'piptazo_vancomycin',
    antibiotic: 'Piperacillin-Tazobactam (Zosyn)',
    coDrug: 'Vancomycin',
    coDrugClass: 'Kháng sinh Glycopeptide',
    severity: 'major',
    severityLabel: 'Cân nhắc theo dõi sát (Synergistic Toxicity)',
    severityColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    mechanism: 'Cơ chế hiệp đồng gây độc tế bào biểu mô ống thận và viêm thận kẽ cấp tính (Synergistic Nephrotoxicity).',
    clinicalImpact: 'Làm tăng tỷ lệ tổn thương thận cấp (AKI) từ 2 đến 3 lần so with phối hợp Cefepime + Vancomycin hoặc Meropenem + Vancomycin.',
    management: 'Kiểm tra Creatinine huyết thanh mỗi 24-48 giờ. Đánh giá xuống thang sớm (trong vòng 48-72h). Nếu bệnh nhân có tổn thương thận nền, ưu tiên Cefepime + Vancomycin.',
    source: 'IDSA Vancomycin Guidelines 2020 & Sanford Guide'
  },
  {
    id: 'fluoroquinolone_cations',
    antibiotic: 'Ciprofloxacin / Levofloxacin / Doxycycline',
    coDrug: 'Viên sắt (Ferrous Sulfate), Canxi (Calcium Carbonate), Nhôm/Magie Antacid',
    coDrugClass: 'Thuốc bổ sung khoáng chất & Antacid dạ dày',
    severity: 'minor',
    severityLabel: 'Giảm hấp thu (Cần giãn cách thời gian uống)',
    severityColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300',
    mechanism: 'Tạo phức chelate không tan đa hóa trị với các cation kim loại hóa trị 2 và 3 trong lòng ống tiêu hóa.',
    clinicalImpact: 'Làm sụt giảm sinh khả dụng đường uống của kháng sinh từ 50% đến 90%, dẫn đến nồng độ thuốc dưới ngưỡng điều trị và thất bại lâm sàng.',
    management: 'Uống kháng sinh ít nhất 2 giờ trước hoặc 4 - 6 giờ sau khi dùng các thuốc bổ sung sắt, canxi, sữa hoặc thuốc kháng acid dạ dày.',
    source: 'Sanford Guide & Dược thư Quốc gia VN'
  }
];

export const CLINICAL_SAFETY_ALERTS = [
  {
    category: 'nephrotoxicity',
    title: 'Độc tính trên Thận (Nephrotoxicity / AKI)',
    icon: 'ShieldAlert',
    highRiskDrugs: ['Vancomycin', 'Amikacin / Gentamicin', 'Colistin (CMS)', 'Piperacillin-Tazobactam + Vancomycin'],
    pathology: 'Hoại tử ống thận cấp (ATN) và viêm thận kẽ dị ứng (AIN).',
    prevention: 'Duy trì đủ thể tích tuần hoàn trước khi truyền thuốc; đo nồng độ thuốc TDM (Vancomycin AUC24 400-600; Amikacin nồng độ đáy < 2.5-5 mcg/mL); tránh dùng đồng thời với NSAIDs, thuốc cản quang hoặc ACEi.',
    source: 'IDSA & Sanford Guide'
  },
  {
    category: 'ototoxicity',
    title: 'Độc tính trên Tai & Thính giác (Ototoxicity)',
    icon: 'Ear',
    highRiskDrugs: ['Amikacin', 'Gentamicin', 'Vancomycin (liều cao phối hợp)', 'Tobramycin'],
    pathology: 'Tổn thương không hồi phục các tế bào lông ốc tai và cơ quan tiền đình do tích tụ Aminoglycoside trong dịch mê đạo.',
    prevention: 'Khuyến cáo chế độ liều ngắt quãng mở rộng 1 lần/ngày (Extended-interval once daily); theo dõi nồng độ đáy trước liều thứ 2 hoặc 3; ngưng ngay nếu bệnh nhân có ù tai, chóng mặt, giảm thính lực.',
    source: 'Bộ Y tế VN (QĐ 5631)'
  },
  {
    category: 'qt_prolongation',
    title: 'Kéo dài khoảng QT & Loạn nhịp Xoắn đỉnh',
    icon: 'Activity',
    highRiskDrugs: ['Moxifloxacin', 'Levofloxacin', 'Azithromycin', 'Clarithromycin'],
    pathology: 'Ức chế kênh I_Kr kéo dài pha tái cực thất tim, tiềm ẩn nguy cơ loạn nhịp thất chết người (Torsades de Pointes).',
    prevention: 'Đo ECG nền trước điều trị; chống chỉ định nếu QTc > 500 ms; bù điện giải duy trì K+ > 4.0 mmol/L và Mg2+ > 2.0 mg/dL.',
    source: 'AHA & Sanford Guide'
  },
  {
    category: 'cdad',
    title: 'Viêm ruột màng giả do C. difficile (CDAD)',
    icon: 'AlertOctagon',
    highRiskDrugs: ['Clindamycin', 'Cephalosporin thế hệ 3 (Ceftriaxone)', 'Fluoroquinolones', 'Amoxicillin-Clavulanate'],
    pathology: 'Xáo trộn thảm vi khuẩn chí đường ruột tạo điều kiện cho Clostridioides difficile tăng sinh và tiết độc tố Toxin A & B.',
    prevention: 'Rút ngắn tối đa thời lượng điều trị kháng sinh; áp dụng chương trình Quản lý Kháng sinh (AMS Timeout 48-72h); điều trị lựa chọn hàng đầu bằng Vancomycin uống 125mg QID hoặc Fidaxomicin.',
    source: 'IDSA C. difficile Guidelines'
  },
  {
    category: 'pregnancy',
    title: 'An toàn cho Phụ nữ Mang thai & Cho con bú',
    icon: 'Baby',
    safeDrugs: ['Penicillins (Amoxicillin, Ampicillin)', 'Cephalosporins (Cefazolin, Ceftriaxone)', 'Azithromycin (Macrolide)'],
    contraindicatedDrugs: ['Fluoroquinolones (độc tính sụn khớp)', 'Tetracyclines/Doxycycline (xỉn màu răng vĩnh viễn, chậm phát triển xương)', 'Aminoglycosides (độc thận và điếc thai nhi bẩm sinh)', 'Cotrimoxazole (kháng acid folic trong 3 tháng đầu, vàng da nhân 3 tháng cuối)'],
    prevention: 'Luôn kiểm tra tiền sử thai nghén ở phụ nữ độ tuổi sinh sản trước khi kê đơn kháng sinh phổ rộng.',
    source: 'FDA Pregnancy Guidance & Sanford Guide'
  }
];
