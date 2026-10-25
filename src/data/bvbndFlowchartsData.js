/**
 * Sổ tay Hướng dẫn Sử dụng Kháng sinh Bệnh viện Bệnh Nhiệt Đới TPHCM (emed.bvbnd.vn)
 * Nguồn tham khảo thực chiến bổ trợ (Secondary / Local Clinical Reference)
 * Huy hiệu nguồn: [BV Bệnh Nhiệt Đới - eMed]
 */

export const BVBND_FLOWCHARTS = [
  {
    id: 'bvbnd_mdr_stratification',
    title: 'Lưu đồ Phân nhóm Nguy cơ Nhiễm Vi khuẩn Đa kháng (MDR)',
    subtitle: 'Định hướng chọn kháng sinh ban đầu theo mô hình dịch tễ Việt Nam',
    sourceBadge: 'BV Bệnh Nhiệt Đới - eMed',
    sourceFull: 'Sổ tay Hướng dẫn Sử dụng Kháng sinh - BV Bệnh Nhiệt Đới TPHCM (emed.bvbnd.vn)',
    groups: [
      {
        groupLevel: 'Nhóm 1: Nguy cơ vi khuẩn đa kháng THẤP (Mắc phải cộng đồng)',
        criteria: [
          'Không có tiền sử nằm viện trong vòng 90 ngày qua',
          'Không sử dụng kháng sinh phổ rộng đường tiêm tĩnh mạch trong vòng 90 ngày',
          'Không có thủ thuật xâm lấn (ống thông tiểu lưu, catheter tĩnh mạch trung tâm, mở khí quản)',
          'Không nằm tại các cơ sở điều dưỡng / chăm sóc giảm nhẹ dài ngày'
        ],
        pathogens: 'S. pneumoniae, H. influenzae, E. coli cộng đồng nhạy cảm, MSSA',
        recommendedRegimens: [
          'Ceftriaxone 1 - 2g/ngày IV HOẶC Cefotaxime 1 - 2g q8h IV',
          'Amoxicillin - Clavulanate 1g - 2g IV q8h',
          'Ampicillin - Sulbactam 1.5g - 3g IV q6h'
        ],
        bvbndPearl: 'Tránh lạm dụng Carbapenem ở nhóm 1 để bảo tồn phổ kháng sinh dự trữ và giảm chi phí điều trị cho bệnh nhân.'
      },
      {
        groupLevel: 'Nhóm 2: Nguy cơ nhiễm Trực khuẩn Gram âm sinh ESBL hoặc Pseudomonas',
        criteria: [
          'Có tiền sử nằm viện từ 48 giờ đến 90 ngày gần đây',
          'Có dùng Cephalosporin thế hệ 3 hoặc Fluoroquinolone trong vòng 90 ngày',
          'Có ống thông tiểu lưu hoặc dẫn lưu ngoại khoa',
          'Bệnh phổi tắc nghẽn mạn tính (COPD) thường xuyên đợt cấp hoặc giãn phế quản'
        ],
        pathogens: 'Enterobacterales sinh ESBL (E. coli, K. pneumoniae), Pseudomonas aeruginosa',
        recommendedRegimens: [
          'Cefoperazone - Sulbactam 2g - 4g IV q12h (lựa chọn thực chiến phổ biến tại VN)',
          'Piperacillin - Tazobactam 4.5g IV q6h (truyền kéo dài 3-4 giờ)',
          'Ertapenem 1g IV QD (nếu ổ nhiễm trùng từ đường mật, ổ bụng hoặc tiết niệu và không nghi ngờ Pseudomonas)',
          'Cefepime 2g IV q8h (nếu dị ứng Penicillin hoặc nghi ngờ AmpC)'
        ],
        bvbndPearl: 'Tại BV Bệnh Nhiệt Đới, tỷ lệ E. coli và Klebsiella sinh ESBL trong bệnh viện rất cao (> 50-60%). Nếu bệnh nhân có dấu hiệu nhiễm trùng tiến triển nặng, ưu tiên các phối hợp có chất ức chế beta-lactamase hoặc Carbapenem.'
      },
      {
        groupLevel: 'Nhóm 3: Nguy cơ vi khuẩn SIÊU ĐA KHÁNG (CRE, CRAB, CRPA) & Sốc nhiễm khuẩn',
        criteria: [
          'Nhiễm khuẩn khởi phát sau >= 5 ngày nằm hồi sức tích cực (ICU)',
          'Bệnh nhân sốc nhiễm khuẩn cần vận mạch liều cao, suy đa tạng',
          'Tiền sử phân lập vi khuẩn kháng Carbapenem hoặc đã thất bại với phác đồ Carbapenem trước đó',
          'Thở máy xâm lấn kéo dài, lọc máu liên tục (CRRT), ECMO'
        ],
        pathogens: 'Acinetobacter baumannii kháng Carbapenem (CRAB), Klebsiella pneumoniae kháng Carbapenem (CRKP), Pseudomonas đa kháng (CRPA), MRSA',
        recommendedRegimens: [
          'Phác đồ phối hợp dựa trên Colistin: Colistin (CMS liều tải 9-12 triệu IU, duy trì 4.5 triệu IU q12h) + Meropenem 2g q8h truyền kéo dài 3 giờ',
          'Cân nhắc thêm Ampicillin-Sulbactam liều cao (tương đương 6g Sulbactam/ngày) nếu tác nhân là Acinetobacter baumannii',
          'Thêm Vancomycin (tải 25-30mg/kg) hoặc Linezolid 600mg q12h nếu nghi ngờ phối hợp MRSA',
          'Ceftazidime - Avibactam 2.5g IV q8h (nếu tác nhân là CRE tiết KPC/OXA-48; nếu tiết Metallo-beta-lactamase NDM cần phối hợp thêm Aztreonam)'
        ],
        bvbndPearl: 'Bắt buộc kiểm tra độ lọc cầu thận và đo Creatinine mỗi ngày khi dùng Colistin kết hợp Vancomycin hoặc Aminoglycoside. Áp dụng quy trình truyền chậm Colistin và bổ sung dịch đầy đủ để hạn chế suy thận cấp.'
      }
    ]
  },
  {
    id: 'bvbnd_septic_shock_flowchart',
    title: 'Lưu đồ Xử trí Sốc Nhiễm khuẩn Thực chiến BVBND',
    subtitle: 'Surviving Sepsis Campaign kết hợp năng lực xét nghiệm tại chỗ',
    sourceBadge: 'BV Bệnh Nhiệt Đới - eMed',
    sourceFull: 'Hướng dẫn hồi sức chống sốc - Bệnh viện Bệnh Nhiệt Đới TPHCM',
    steps: [
      {
        step: '1. Nhận diện & Đánh giá trong 15 phút đầu',
        action: 'Đo Huyết áp động mạch (MAP < 65 mmHg?), đếm nhịp thở, tri giác, đo Lactate máu mao mạch hoặc tĩnh mạch tại giường. Đặt đường truyền ngoại biên cỡ lớn (16G hoặc 18G).'
      },
      {
        step: '2. Lấy bệnh phẩm vi sinh (Golden Window)',
        action: 'Cấy máu 2 bộ (lấy ở 2 vị trí khác nhau, mỗi chai 8-10mL máu) TRƯỚC KHI TRUYỀN KHÁNG SINH. Lấy thêm đờm khí quản, nước tiểu, dịch màng phổi/màng bụng tùy định hướng lâm sàng.'
      },
      {
        step: '3. Hồi sức dịch tinh thể tức thì',
        action: 'Truyền dịch tinh thể (Natri Clorid 0.9% hoặc Ringer Lactate) 30 mL/kg trong 3 giờ đầu tiên nếu có tụt huyết áp hoặc Lactate máu >= 4 mmol/L.'
      },
      {
        step: '4. Bắt đầu kháng sinh tĩnh mạch phổ rộng trong 1 GIỜ ĐẦU',
        action: 'Không được trì hoãn kháng sinh vì chờ đợi kết quả xét nghiệm. Lựa chọn kháng sinh tĩnh mạch liều tải đầy đủ (không giảm liều tải ngay cả khi có suy thận cấp).'
      },
      {
        step: '5. Thuốc vận mạch sớm nếu MAP < 65 sau bù dịch',
        action: 'Noradrenaline (Norepinephrine) là thuốc vận mạch lựa chọn hàng đầu, chuẩn độ đạt đích MAP >= 65 mmHg.'
      },
      {
        step: '6. Kháng sinh Timeout sau 48 - 72 giờ',
        action: 'Rà soát kết quả cấy máu, kháng sinh đồ và đáp ứng lâm sàng để kịp thời xuống thang (De-escalation) hoặc ngưng kháng sinh nếu xác định không do nhiễm khuẩn.'
      }
    ]
  }
];
