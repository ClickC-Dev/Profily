import React from 'react';
const TONES={
  neutral:{bg:'var(--gray-100)',fg:'var(--gray-700)'},
  info:{bg:'var(--info-bg)',fg:'var(--navy-700)'},
  success:{bg:'var(--success-bg)',fg:'var(--success)'},
  warning:{bg:'var(--warning-bg)',fg:'#8a611b'},
  danger:{bg:'var(--danger-bg)',fg:'var(--danger)'},
};
export function Badge({tone='neutral',children}) {
  const t=TONES[tone];
  return <span style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'4px 12px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',background:t.bg,color:t.fg}}>{children}</span>;
}
