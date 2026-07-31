import React from 'react';
export function Select({label,options=[],value,onChange}) {
  const [focused,setFocused]=React.useState(false);
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)'}}>
      {label && <span style={{fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)',color:'var(--text-secondary)'}}>{label}</span>}
      <span style={{position:'relative'}}>
        <select value={value} onChange={onChange} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
          style={{appearance:'none',width:'100%',padding:'11px 40px 11px 16px',borderRadius:'var(--radius-md)',border:`1.5px solid ${focused?'var(--border-focus)':'var(--border-default)'}`,background:'var(--surface-card)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-primary)',boxShadow:focused?'var(--shadow-focus)':'none'}}>
          {options.map(o=><option key={o} value={o}>{o}</option>)}
        </select>
        <span style={{position:'absolute',right:'16px',top:'50%',transform:'translateY(-50%)',color:'var(--text-muted)',pointerEvents:'none'}}>▾</span>
      </span>
    </label>
  );
}
