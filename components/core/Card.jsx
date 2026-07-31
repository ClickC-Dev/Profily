import React from 'react';
export function Card({title,subtitle,children,footer,padded=true,style}) {
  return (
    <div style={{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-sm)',padding:padded?'24px':0,display:'flex',flexDirection:'column',gap:'12px',...style}}>
      {title && <div>
        <div style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-h5)',color:'var(--text-primary)'}}>{title}</div>
        {subtitle && <div style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-muted)',marginTop:'4px'}}>{subtitle}</div>}
      </div>}
      <div style={{flex:1}}>{children}</div>
      {footer && <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:'12px'}}>{footer}</div>}
    </div>
  );
}
