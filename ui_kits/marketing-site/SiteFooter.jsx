function SiteFooter() {
  return (
    <footer style={{padding:'48px 64px',background:'var(--navy-900)',color:'rgba(255,255,255,0.6)',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'var(--font-body)',fontSize:'13px'}}>
      <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
        <img src="../../assets/profily-mark.png" style={{height:'22px'}} />
        <span style={{color:'#fff',fontWeight:600}}>ProFily</span>
      </div>
      <div>© 2026 ProFily Contabilidade Digital. Todos os direitos reservados.</div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
