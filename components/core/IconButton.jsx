import React from 'react';
export function IconButton({icon,onClick,variant='ghost',size=40,'aria-label':ariaLabel}) {
  const variants={ghost:{background:'transparent',color:'var(--accent-dark)'},solid:{background:'var(--accent-primary)',color:'#fff'},outline:{background:'var(--surface-card)',color:'var(--accent-dark)',border:'1.5px solid var(--border-default)'}};
  const [isHover,setHover]=React.useState(false);
  return (
    <button aria-label={ariaLabel} onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:size,height:size,borderRadius:'50%',border:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all var(--duration-fast) var(--ease-standard)',...variants[variant],...(isHover?{background:'var(--surface-sunken)'}:{})}}>
      {icon}
    </button>
  );
}
