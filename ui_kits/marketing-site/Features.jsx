const features=[
  {icon:'file-text',title:'Notas fiscais automáticas',desc:'Emitimos suas notas fiscais e organizamos tudo em um só lugar.'},
  {icon:'receipt',title:'Impostos sem surpresas',desc:'Calculamos e lembramos os vencimentos — você só aprova o pagamento.'},
  {icon:'message-circle',title:'Contador dedicado',desc:'Fale direto com quem cuida da sua empresa, sem robôs de atendimento.'},
  {icon:'trending-up',title:'Relatórios claros',desc:'Entenda a saúde financeira do seu negócio em poucos cliques.'},
];
function Features() {
  return (
    <section id="features" style={{padding:'88px 64px',background:'var(--surface-page)'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'34px',color:'var(--navy-900)',textAlign:'center',margin:'0 0 48px'}}>Tudo que sua contabilidade precisa</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'24px'}}>
        {features.map((f,i)=>(
          <div key={i} style={{background:'#fff',borderRadius:'var(--radius-lg)',border:'1px solid var(--border-subtle)',padding:'28px',display:'flex',flexDirection:'column',gap:'14px'}}>
            <div style={{width:'48px',height:'48px',borderRadius:'var(--radius-md)',background:'var(--sky-100)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <i data-lucide={f.icon} style={{width:22,height:22,color:'var(--navy-700)'}}></i>
            </div>
            <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'17px',color:'var(--navy-900)'}}>{f.title}</div>
            <div style={{fontFamily:'var(--font-body)',fontSize:'14px',color:'var(--text-secondary)',lineHeight:1.6}}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Features = Features;
