import React from 'react';
const SIZES={sm:{padding:'8px 16px',fontSize:'var(--fs-body-sm)'},md:{padding:'12px 22px',fontSize:'var(--fs-body)'},lg:{padding:'16px 28px',fontSize:'var(--fs-body-lg)'}};
export function Button({variant='primary',size='md',disabled=false,icon=null,children,onClick,style}) {
  const base={fontFamily:'var(--font-body)',fontWeight:'var(--fw-semibold)',border:'none',borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',transition:`all var(--duration-fast) var(--ease-standard)`,opacity:disabled?0.5:1,...SIZES[size],...style};
  const variants={
    primary:{background:'var(--accent-primary)',color:'var(--text-on-accent)'},
    dark:{background:'var(--accent-dark)',color:'#fff'},
    secondary:{background:'var(--surface-card)',color:'var(--accent-dark)',border:'1.5px solid var(--border-default)'},
    ghost:{background:'transparent',color:'var(--accent-dark)'},
    danger:{background:'var(--danger)',color:'#fff'},
  };
  const hover={
    primary:{background:'var(--accent-primary-hover)'},
    dark:{background:'var(--accent-dark-hover)'},
    secondary:{background:'var(--surface-sunken)'},
    ghost:{background:'var(--surface-sunken)'},
    danger:{background:'#c9463f'},
  };
  const [isHover,setHover]=React.useState(false);
  return (
    <button disabled={disabled} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{...base,...variants[variant],...(isHover&&!disabled?hover[variant]:{})}}>
      {icon}{children}
    </button>
  );
}
