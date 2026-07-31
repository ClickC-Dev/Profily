const {Button}=window.ProFilyDesignSystem_cdddaa;
function SiteHeader() {
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 64px',background:'var(--surface-card)',position:'sticky',top:0,zIndex:10}}>
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <img src="../../assets/profily-mark.png" style={{height:'34px'}} />
        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'22px',color:'var(--navy-900)'}}>ProFily</span>
      </div>
      <nav style={{display:'flex',gap:'32px',fontFamily:'var(--font-body)',fontSize:'15px',fontWeight:500,color:'var(--text-secondary)'}}>
        <a href="#features" style={{textDecoration:'none',color:'inherit'}}>Recursos</a>
        <a href="#pricing" style={{textDecoration:'none',color:'inherit'}}>Planos</a>
        <a href="#" style={{textDecoration:'none',color:'inherit'}}>Sobre</a>
      </nav>
      <div style={{display:'flex',gap:'12px'}}>
        <Button variant="ghost" size="sm">Entrar</Button>
        <Button size="sm">Comece grátis</Button>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
