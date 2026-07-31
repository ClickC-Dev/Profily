import React from 'react';
export function Tabs({tabs=[],active,onChange}) {
  return (
    <div style={{display:'flex',gap:'4px',borderBottom:'1.5px solid var(--border-subtle)'}}>
      {tabs.map(t=>{
        const isActive=t===active;
        return (
          <button key={t} onClick={()=>onChange&&onChange(t)}
            style={{border:'none',background:'transparent',cursor:'pointer',padding:'12px 18px',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',fontWeight:isActive?'var(--fw-semibold)':'var(--fw-medium)',color:isActive?'var(--accent-dark)':'var(--text-muted)',borderBottom:`2px solid ${isActive?'var(--accent-primary)':'transparent'}`,marginBottom:'-1.5px',transition:'all var(--duration-fast) var(--ease-standard)'}}>
            {t}
          </button>
        );
      })}
    </div>
  );
}
