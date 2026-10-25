export const VOCAB_DATA = [
  {
    term: 'Empiric Therapy',
    ipa: '/ɛmˈpɪr.ɪk ˈθɛr.ə.pi/',
    vietnamese: 'Điều trị theo kinh nghiệm',
    tag: 'stewardship',
    definition: 'Khởi đầu kháng sinh bao phủ các tác nhân vi sinh có khả năng cao nhất trước khi có kết quả cấy vi sinh và kháng sinh đồ.',
    example: 'Given the patient\'s septic shock presentation, broad-spectrum empiric therapy with Meropenem and Vancomycin was immediately initiated.'
  },
  {
    term: 'Definitive Therapy (De-escalation)',
    ipa: '/dɪˈfɪn.ɪ.tɪv ˈθɛr.ə.pi/',
    vietnamese: 'Điều trị đích / Liệu pháp Xuống thang',
    tag: 'stewardship',
    definition: 'Thu hẹp phổ kháng sinh sang thuốc đặc hiệu, ít độc và kinh tế hơn ngay khi đã phân lập chính xác vi khuẩn gây bệnh.',
    example: 'Once blood cultures confirmed MSSA bacteremia, therapy was promptly de-escalated from Vancomycin to Cefazolin.'
  },
  {
    term: 'Time-Dependent Killing (%T > MIC)',
    ipa: '/taɪm dɪˈpɛn.dənt ˈkɪl.ɪŋ/',
    vietnamese: 'Diệt khuẩn phụ thuộc thời gian',
    tag: 'pkpd',
    definition: 'Hiệu quả diệt khuẩn phụ thuộc vào tỷ lệ thời gian nồng độ thuốc tự do duy trì trên nồng độ ức chế tối thiểu (đặc trưng của Beta-lactams). Tối ưu bằng cách truyền kéo dài 3-4 giờ hoặc truyền liên tục.',
    example: 'Beta-lactams exhibit time-dependent killing; extended infusion of Piperacillin-Tazobactam maximizes the %T > MIC.'
  },
  {
    term: 'Concentration-Dependent Killing (Cmax / MIC)',
    ipa: '/ˌkɑːn.sənˈtreɪ.ʃən dɪˈpɛn.dənt/',
    vietnamese: 'Diệt khuẩn phụ thuộc nồng độ',
    tag: 'pkpd',
    definition: 'Tốc độ và mức độ diệt khuẩn tăng tỷ lệ thuận với nồng độ đỉnh trong huyết thanh (đặc trưng của Aminoglycosides, Daptomycin). Tối ưu bằng chế độ liều ngắt quãng cao 1 lần/ngày.',
    example: 'Aminoglycosides demonstrate concentration-dependent killing, justifying high-dose once-daily extended-interval dosing.'
  },
  {
    term: 'Post-Antibiotic Effect (PAE)',
    ipa: '/poʊst ˌæn.ti.baɪˈɑː.tɪk ɪˈfɛkt/',
    vietnamese: 'Hiệu ứng hậu kháng sinh',
    tag: 'pkpd',
    definition: 'Sự ức chế kéo dài sự nhân đôi của vi khuẩn ngay cả khi nồng độ kháng sinh đã tụt xuống dưới ngưỡng MIC.',
    example: 'The prolonged post-antibiotic effect of Amikacin allows once-daily administration without compromising clinical efficacy.'
  },
  {
    term: 'Antimicrobial Stewardship (AMS)',
    ipa: '/ˌæn.ti.maɪˈkroʊ.bi.əl ˈstuː.ɚd.ʃɪp/',
    vietnamese: 'Chương trình Quản lý sử dụng Kháng sinh',
    tag: 'stewardship',
    definition: 'Chiến lược toàn diện của bệnh viện nhằm tối ưu hóa việc chọn lựa kháng sinh, liều dùng, đường dùng và thời gian điều trị nhằm cải thiện kết cục bệnh nhân và hạn chế tối đa vi khuẩn đa kháng.',
    example: 'The hospital AMS committee implemented a 72-hour antibiotic timeout policy to prevent unnecessary prolonged broad-spectrum therapy.'
  },
  {
    term: 'ESBL (Extended-Spectrum Beta-Lactamase)',
    ipa: '/ɪkˈstɛn.dɪd ˈspɛk.trəm/',
    vietnamese: 'Men Beta-lactamase phổ rộng',
    tag: 'resistance',
    definition: 'Men do vi khuẩn (chủ yếu E. coli và Klebsiella) tiết ra, có khả năng thủy phân Penicillins, Cephalosporins (thế hệ 1-4) và Aztreonam. Thuốc lựa chọn hàng đầu cho nhiễm khuẩn nặng là Carbapenems.',
    example: 'Meropenem remains the drug of choice for severe infections caused by ESBL-producing Enterobacterales.'
  }
];

export const SENTENCES_DATA = [
  {
    category: 'Bắt đầu kháng sinh kinh nghiệm (Initiation)',
    en: 'Given the patient\'s acute presentation and high clinical suspicion of severe hospital-acquired pneumonia, prompt initiation of broad-spectrum empiric antimicrobial coverage is warranted.',
    vi: 'Trước bệnh cảnh cấp tính và nghi ngờ lâm sàng cao về viêm phổi bệnh viện nặng, việc chỉ định kháng sinh phổ rộng kinh nghiệm ngay lập tức là hoàn toàn xác đáng.',
    keyVocab: 'prompt initiation (khởi đầu ngay), warranted (xác đáng/chỉ định phù hợp)'
  },
  {
    category: 'Chỉnh liều theo chức năng thận (Renal Adjustment)',
    en: 'Dosage adjustment of renally eliminated antibiotics is required secondary to acute-on-chronic kidney disease with an estimated creatinine clearance of 34 mL/min.',
    vi: 'Cần hiệu chỉnh liều các kháng sinh thải trừ qua thận thứ phát sau đợt cấp trên nền bệnh thận mạn với độ thanh thải creatinine ước tính là 34 mL/phút.',
    keyVocab: 'renally eliminated (thải trừ qua thận), secondary to (thứ phát do)'
  },
  {
    category: 'Xuống thang kháng sinh (De-escalation)',
    en: 'Upon receipt of final blood culture and susceptibility results yielding pan-sensitive Streptococcus pneumoniae, antimicrobial therapy was streamlined from Ceftriaxone plus Vancomycin to high-dose IV Ampicillin.',
    vi: 'Sau khi nhận kết quả cấy máu và kháng sinh đồ xác nhận Streptococcus pneumoniae nhạy cảm hoàn toàn, phác đồ kháng sinh đã được tinh giản từ Ceftriaxone + Vancomycin xuống Ampicillin tĩnh mạch liều cao.',
    keyVocab: 'streamlined / de-escalated (tinh giản/xuống thang), pan-sensitive (nhạy cảm toàn bộ)'
  },
  {
    category: 'Theo dõi nồng độ thuốc TDM (Pharmacokinetics)',
    en: 'Therapeutic drug monitoring is indicated to ensure attainment of the target AUC/MIC ratio of 400 to 600 while mitigating the risk of exposure-related nephrotoxicity.',
    vi: 'Chỉ định theo dõi nồng độ thuốc trong huyết tương (TDM) nhằm đảm bảo đạt mục tiêu AUC/MIC từ 400 đến 600 đồng thời giảm thiểu nguy cơ độc thận liên quan đến phơi nhiễm thuốc.',
    keyVocab: 'attainment of target (đạt mục tiêu), mitigating risk (giảm thiểu nguy cơ)'
  }
];
