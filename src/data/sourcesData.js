/**
 * Data Curation Protocol & Source Reference Catalog
 * Strictly curated from:
 * 1. Bộ Y tế Việt Nam (QĐ 5631/QĐ-BYT, QĐ 7014/QĐ-BYT, QĐ 4800/QĐ-BYT)
 * 2. The Sanford Guide to Antimicrobial Therapy (54th Edition)
 * 3. IDSA Guidelines (Infectious Diseases Society of America)
 * 4. Bệnh viện Chợ Rẫy (Sách Hướng dẫn Sử dụng Kháng sinh 2024 - NXB Y học)
 * 5. Bệnh viện Bệnh Nhiệt Đới TPHCM (emed.bvbnd.vn)
 */

export const CLINICAL_SOURCES = {
  BYT: {
    id: 'byt',
    name: 'Bộ Y tế Việt Nam',
    badge: 'Bộ Y tế VN',
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 border-red-300 dark:border-red-800',
    reference: 'Quyết định 5631/QĐ-BYT (Quản lý và sử dụng KS), Quyết định 7014/QĐ-BYT (CAP), Quyết định 4800/QĐ-BYT (Sepsis)'
  },
  CHORAY: {
    id: 'choray',
    name: 'Bệnh viện Chợ Rẫy',
    badge: 'BV Chợ Rẫy 2024',
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    reference: 'Sách Hướng dẫn Sử dụng Kháng sinh Bệnh viện Chợ Rẫy (Ấn bản 2024 - NXB Y học, Chủ biên: PGS.TS.BS Nguyễn Tri Thức, PGS.TS.BS Phạm Ngọc Thảo, PGS.TS.BS Lê Quốc Việt)'
  },
  SANFORD: {
    id: 'sanford',
    name: 'The Sanford Guide to Antimicrobial Therapy',
    badge: 'Sanford Guide 54th Ed.',
    badgeClass: 'bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border-teal-300 dark:border-teal-800',
    reference: 'The Sanford Guide to Antimicrobial Therapy 54th Edition (2024)'
  },
  IDSA: {
    id: 'idsa',
    name: 'Infectious Diseases Society of America',
    badge: 'IDSA Guidelines',
    badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-800',
    reference: 'IDSA/ATS CAP Guidelines 2019, IDSA HAP/VAP 2016, IDSA AMR Gram-Negative Guidance 2024'
  },
  BVBND: {
    id: 'bvbnd',
    name: 'Bệnh viện Bệnh Nhiệt Đới TPHCM',
    badge: 'BV Bệnh Nhiệt Đới - eMed',
    badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    reference: 'Sổ tay Hướng dẫn Sử dụng Kháng sinh BV Bệnh Nhiệt Đới TPHCM (emed.bvbnd.vn)'
  }
};
