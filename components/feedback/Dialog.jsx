import React from 'react';
export function Dialog({open,title,children,onClose,footer}) {
  if(!open) return null;
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(8,36,48,0.5)',backdropFilter:'blur(2px)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',padding:'28px',width:'420px',maxWidth:'90vw',display:'flex',flexDirection:'column',gap:'16px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-h5)',color:'var(--text-primary)'}}>{title}</span>
          <button onClick={onClose} style={{border:'none',background:'transparent',color:'var(--text-muted)',fontSize:'20px',cursor:'pointer'}}>×</button>
        </div>
        <div style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:'var(--text-secondary)'}}>{children}</div>
        {footer && <div style={{display:'flex',justifyContent:'flex-end',gap:'12px'}}>{footer}</div>}
      </div>
    </div>
  );
}
