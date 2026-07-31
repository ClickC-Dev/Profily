import React from 'react';
const TONES={info:{bg:'var(--navy-900)',accent:'var(--sky-400)'},success:{bg:'var(--navy-900)',accent:'var(--success)'},danger:{bg:'var(--navy-900)',accent:'var(--danger)'}};
export function Toast({tone='info',children,onClose}) {
  const t=TONES[tone];
  return (
    <div style={{display:'flex',alignItems:'center',gap:'12px',background:t.bg,color:'#fff',padding:'14px 18px',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lg)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',borderLeft:`3px solid ${t.accent}`,maxWidth:'340px'}}>
      <span style={{flex:1}}>{children}</span>
      {onClose && <button onClick={onClose} style={{border:'none',background:'transparent',color:'rgba(255,255,255,0.7)',cursor:'pointer',fontSize:'16px'}}>×</button>}
    </div>
  );
}
