import React from 'react';
export function Switch({checked,onChange,label}) {
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-primary)'}}>
      <span onClick={()=>onChange&&onChange(!checked)} style={{width:'42px',height:'24px',borderRadius:'var(--radius-pill)',background:checked?'var(--accent-primary)':'var(--gray-300)',position:'relative',transition:'background var(--duration-fast) var(--ease-standard)'}}>
        <span style={{position:'absolute',top:'3px',left:checked?'21px':'3px',width:'18px',height:'18px',borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-sm)',transition:'left var(--duration-fast) var(--ease-standard)'}} />
      </span>
      {label}
    </label>
  );
}
