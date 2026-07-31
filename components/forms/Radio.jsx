import React from 'react';
export function Radio({label,checked,onChange}) {
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-primary)'}}>
      <span onClick={()=>onChange&&onChange()} style={{width:'20px',height:'20px',borderRadius:'50%',border:`1.5px solid ${checked?'var(--accent-primary)':'var(--border-default)'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
        {checked && <span style={{width:'10px',height:'10px',borderRadius:'50%',background:'var(--accent-primary)'}} />}
      </span>
      {label}
    </label>
  );
}
