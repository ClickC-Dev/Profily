import React from 'react';
export function Checkbox({label,checked,onChange}) {
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-primary)'}}>
      <span onClick={()=>onChange&&onChange(!checked)} style={{width:'20px',height:'20px',borderRadius:'6px',border:`1.5px solid ${checked?'var(--accent-primary)':'var(--border-default)'}`,background:checked?'var(--accent-primary)':'var(--surface-card)',display:'flex',alignItems:'center',justifyContent:'center',transition:'all var(--duration-fast) var(--ease-standard)'}}>
        {checked && <svg width="12" height="10" viewBox="0 0 12 10"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      {label}
    </label>
  );
}
