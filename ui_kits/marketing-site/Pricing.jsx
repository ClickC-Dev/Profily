const {Button,Badge}=window.ProFilyDesignSystem_cdddaa;
const plans=[
  {name:'MEI',price:'R$ 89',desc:'Para microempreendedores individuais',features:['1 nota fiscal/mês','Cálculo do DAS','Suporte por chat'],highlight:false},
  {name:'Simples Nacional',price:'R$ 249',desc:'Para pequenas empresas em crescimento',features:['Notas fiscais ilimitadas','Contador dedicado','Folha de pagamento','Relatórios financeiros'],highlight:true},
  {name:'Empresarial',price:'Sob consulta',desc:'Para operações maiores e mais complexas',features:['Lucro Presumido ou Real','Consultoria tributária','Atendimento prioritário'],highlight:false},
];
function Pricing() {
  return (
    <section id="pricing" style={{padding:'88px 64px',background:'#fff'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'34px',color:'var(--navy-900)',textAlign:'center',margin:'0 0 48px'}}>Planos para cada fase do seu negócio</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px',maxWidth:'1040px',margin:'0 auto'}}>
        {plans.map((p,i)=>(
          <div key={i} style={{border:p.highlight?'2px solid var(--accent-primary)':'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',padding:'32px',display:'flex',flexDirection:'column',gap:'16px',boxShadow:p.highlight?'var(--shadow-md)':'none',position:'relative'}}>
            {p.highlight && <div style={{position:'absolute',top:'-14px',left:'32px'}}><Badge tone="info">Mais popular</Badge></div>}
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'20px',color:'var(--navy-900)'}}>{p.name}</div>
            <div style={{fontSize:'13px',color:'var(--text-muted)'}}>{p.desc}</div>
            <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'32px',color:'var(--navy-900)'}}>{p.price}<span style={{fontSize:'14px',fontWeight:500,color:'var(--text-muted)'}}>{p.price.startsWith('R$')?'/mês':''}</span></div>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              {p.features.map((f,j)=>(
                <div key={j} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'var(--text-secondary)'}}><i data-lucide="check" style={{width:16,height:16,color:'var(--success)'}}></i>{f}</div>
              ))}
            </div>
            <Button variant={p.highlight?'primary':'secondary'} style={{marginTop:'8px'}}>Escolher plano</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Pricing = Pricing;
