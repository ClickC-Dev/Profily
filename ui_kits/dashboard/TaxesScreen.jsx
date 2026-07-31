const {Card,Badge,Button}=window.ProFilyDesignSystem_cdddaa;
const guides=[
  {name:'DAS - Simples Nacional',competencia:'Julho 2026',due:'20/08/2026',value:'R$ 1.240',status:'warning',label:'A vencer'},
  {name:'ISS',competencia:'Julho 2026',due:'10/08/2026',value:'R$ 620',status:'warning',label:'A vencer'},
  {name:'FGTS',competencia:'Junho 2026',due:'07/07/2026',value:'R$ 980',status:'danger',label:'Atrasado'},
  {name:'DAS - Simples Nacional',competencia:'Junho 2026',due:'20/07/2026',value:'R$ 1.180',status:'success',label:'Pago'},
];
function TaxesScreen() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <Card title="Calendário de impostos" subtitle="Vencimentos dos próximos 60 dias">
        <div style={{display:'flex',flexDirection:'column'}}>
          {guides.map((g,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 0',borderBottom:i<guides.length-1?'1px solid var(--border-subtle)':'none'}}>
              <div>
                <div style={{fontSize:'15px',fontWeight:600,color:'var(--text-primary)'}}>{g.name}</div>
                <div style={{fontSize:'13px',color:'var(--text-muted)'}}>Competência {g.competencia} · vence em {g.due}</div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'16px',color:'var(--text-primary)'}}>{g.value}</div>
                <Badge tone={g.status}>{g.label}</Badge>
                {g.status!=='success' && <Button size="sm">Pagar</Button>}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

window.TaxesScreen = TaxesScreen;
