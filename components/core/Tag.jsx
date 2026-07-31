import React from 'react';
export function Tag({children,onRemove}) {
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'5px 10px 5px 12px',borderRadius:'var(--radius-sm)',background:'var(--sky-100)',color:'var(--navy-700)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)'}}>
      {children}
      {onRemove && <button onClick={onRemove} style={{border:'none',background:'transparent',color:'var(--navy-700)',cursor:'pointer',fontSize:'14px',lineHeight:1,padding:0}}>×</button>}
    </span>
  );
}
