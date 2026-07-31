const {Button,Badge}=window.ProFilyDesignSystem_cdddaa;
function Hero() {
  return (
    <section style={{display:'flex',alignItems:'center',gap:'64px',padding:'96px 64px',background:'var(--navy-900)',color:'#fff'}}>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:'24px'}}>
        <Badge tone="info">Contabilidade Digital</Badge>
        <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'52px',lineHeight:1.08,margin:0}}>Sua contabilidade, sempre em dia.</h1>
        <p style={{fontFamily:'var(--font-body)',fontSize:'19px',lineHeight:1.6,color:'rgba(255,255,255,0.8)',maxWidth:'480px',margin:0}}>ProFily cuida dos impostos, notas fiscais e obrigações da sua empresa — para você focar no que faz seu negócio crescer.</p>
        <div style={{display:'flex',gap:'16px'}}>
          <Button size="lg">Abrir minha conta</Button>
          <Button size="lg" variant="secondary" style={{background:'transparent',color:'#fff',borderColor:'rgba(255,255,255,0.3)'}}>Falar com um especialista</Button>
        </div>
      </div>
      <div style={{flex:1,display:'flex',justifyContent:'center'}}>
        <img src="../../assets/profily-mark.png" style={{height:'260px',filter:'drop-shadow(0 20px 40px rgba(0,0,0,0.35))'}} />
      </div>
    </section>
  );
}

window.Hero = Hero;
