function Topbar({title,subtitle}) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 32px',borderBottom:'1px solid var(--border-subtle)',background:'var(--surface-card)'}}>
      <div>
        <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'22px',color:'var(--text-primary)'}}>{title}</div>
        {subtitle && <div style={{fontFamily:'var(--font-body)',fontSize:'14px',color:'var(--text-muted)',marginTop:'2px'}}>{subtitle}</div>}
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'18px'}}>
        <i data-lucide="bell" style={{width:'20px',height:'20px',color:'var(--text-muted)'}}></i>
        <div style={{width:'38px',height:'38px',borderRadius:'50%',background:'var(--sky-100)',color:'var(--navy-700)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700}}>MC</div>
      </div>
    </div>
  );
}

window.Topbar = Topbar;
