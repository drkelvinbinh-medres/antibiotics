export const BUG_DRUG_MATRIX = [
  { drug: 'Amox-Clav', mssa: '●++', mrsa: '✕ 0', spneu: '●++', efaec: '●++', ecoli: '●+', esbl: '✕ 0', psaer: '✕ 0', bfrag: '●++', atyp: '✕ 0', group: 'gram_pos' },
  { drug: 'Pip-Tazo', mssa: '●++', mrsa: '✕ 0', spneu: '●++', efaec: '●++', ecoli: '●++', esbl: '△+/-', psaer: '●++', bfrag: '●++', atyp: '✕ 0', group: 'pseudomonas' },
  { drug: 'Cefazolin', mssa: '●++', mrsa: '✕ 0', spneu: '●+', efaec: '✕ 0', ecoli: '●+', esbl: '✕ 0', psaer: '✕ 0', bfrag: '✕ 0', atyp: '✕ 0', group: 'gram_pos' },
  { drug: 'Ceftriaxone', mssa: '●+', mrsa: '✕ 0', spneu: '●++', efaec: '✕ 0', ecoli: '●++', esbl: '✕ 0', psaer: '✕ 0', bfrag: '✕ 0', atyp: '✕ 0', group: 'gram_neg' },
  { drug: 'Cefepime', mssa: '●++', mrsa: '✕ 0', spneu: '●++', efaec: '✕ 0', ecoli: '●++', esbl: '△+/-', psaer: '●++', bfrag: '✕ 0', atyp: '✕ 0', group: 'pseudomonas' },
  { drug: 'Meropenem', mssa: '●++', mrsa: '✕ 0', spneu: '●++', efaec: '✕ 0', ecoli: '●++', esbl: '●++', psaer: '●++', bfrag: '●++', atyp: '✕ 0', group: 'pseudomonas' },
  { drug: 'Vancomycin', mssa: '●++', mrsa: '●++', spneu: '●++', efaec: '●++', ecoli: '✕ 0', esbl: '✕ 0', psaer: '✕ 0', bfrag: '✕ 0', atyp: '✕ 0', group: 'gram_pos' },
  { drug: 'Linezolid', mssa: '●++', mrsa: '●++', spneu: '●++', efaec: '●++', ecoli: '✕ 0', esbl: '✕ 0', psaer: '✕ 0', bfrag: '✕ 0', atyp: '✕ 0', group: 'gram_pos' },
  { drug: 'Levofloxacin', mssa: '●+', mrsa: '✕ 0', spneu: '●++', efaec: '✕ 0', ecoli: '●+', esbl: '✕ 0', psaer: '●+', bfrag: '✕ 0', atyp: '●++', group: 'gram_neg' },
  { drug: 'Amikacin', mssa: '●+', mrsa: '✕ 0', spneu: '✕ 0', efaec: '✕ 0', ecoli: '●++', esbl: '●++', psaer: '●++', bfrag: '✕ 0', atyp: '✕ 0', group: 'pseudomonas' },
  { drug: 'Metronidazole', mssa: '✕ 0', mrsa: '✕ 0', spneu: '✕ 0', efaec: '✕ 0', ecoli: '✕ 0', esbl: '✕ 0', psaer: '✕ 0', bfrag: '●++', atyp: '✕ 0', group: 'anaerobes' }
];

export const PATHOGENS_HEADER = [
  { key: 'mssa', label: 'MSSA', title: 'Methicillin-susceptible Staphylococcus aureus' },
  { key: 'mrsa', label: 'MRSA', title: 'Methicillin-resistant Staphylococcus aureus' },
  { key: 'spneu', label: 'S.pneu', title: 'Streptococcus pneumoniae' },
  { key: 'efaec', label: 'E.faec', title: 'Enterococcus faecalis' },
  { key: 'ecoli', label: 'E.coli', title: 'Escherichia coli & K. pneumoniae (nhạy)' },
  { key: 'esbl', label: 'ESBL', title: 'ESBL-producing Enterobacterales' },
  { key: 'psaer', label: 'Ps.aer', title: 'Pseudomonas aeruginosa' },
  { key: 'bfrag', label: 'B.frag', title: 'Bacteroides fragilis (Kỵ khí)' },
  { key: 'atyp', label: 'Atyp', title: 'Atypicals (Legionella, Mycoplasma, Chlamydia)' }
];
