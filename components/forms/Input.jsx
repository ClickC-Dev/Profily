import React from 'react';
export function Input({label,placeholder,type='text',value,onChange,helpText,error,icon}) {
  const [focused,setFocused]=React.useState(false);
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)'}}>
      {label && <span style={{fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)',color:'var(--text-secondary)'}}>{label}</span>}
      <span style={{display:'flex',alignItems:'center',gap:'8px',padding:'11px 16px',borderRadius:'var(--radius-md)',border:`1.5px solid ${error?'var(--danger)':focused?'var(--border-focus)':'var(--border-default)'}`,background:'var(--surface-card)',boxShadow:focused?'var(--shadow-focus)':'none',transition:'all var(--duration-fast) var(--ease-standard)'}}>
        {icon}
        <input type={type} value={value} placeholder={placeholder} onChange={onChange}
          onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
          style={{border:'none',outline:'none',flex:1,fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-primary)',background:'transparent'}} />
      </span>
      {(helpText||error) && <span style={{fontSize:'var(--fs-caption)',color:error?'var(--danger)':'var(--text-muted)'}}>{error||helpText}</span>}
    </label>
  );
}
