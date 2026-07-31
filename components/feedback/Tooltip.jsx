import React from 'react';
export function Tooltip({label,children}) {
  const [show,setShow]=React.useState(false);
  return (
    <span style={{position:'relative',display:'inline-flex'}} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {children}
      {show && <span style={{position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',background:'var(--navy-900)',color:'#fff',padding:'6px 12px',borderRadius:'var(--radius-sm)',fontSize:'var(--fs-caption)',fontFamily:'var(--font-body)',whiteSpace:'nowrap',boxShadow:'var(--shadow-md)',zIndex:50}}>{label}</span>}
    </span>
  );
}
