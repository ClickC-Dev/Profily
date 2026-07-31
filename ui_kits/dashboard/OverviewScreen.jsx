const {Card,Badge,Button}=window.ProFilyDesignSystem_cdddaa;
const docs=[
  {name:'NF-e 00234',date:'28/07/2026',status:'success',label:'Emitida'},
  {name:'Boleto Simples Nacional',date:'20/07/2026',status:'warning',label:'A vencer'},
  {name:'NF-e 00233',date:'15/07/2026',status:'success',label:'Emitida'},
  {name:'DAS - Julho',date:'05/07/2026',status:'danger',label:'Atrasado'},
];
function OverviewScreen() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
        <Card title="Faturamento do mês" subtitle="Julho 2026">
          <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'32px',color:'var(--navy-900)'}}>R$ 48.200</div>
          <div style={{fontSize:'13px',color:'var(--success)',marginTop:'4px'}}>↑ 12% vs. junho</div>
        </Card>
        <Card title="Impostos a pagar" subtitle="Próximos 30 dias">
          <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'32px',color:'var(--navy-900)'}}>R$ 3.140</div>
          <div style={{fontSize:'13px',color:'var(--text-muted)',marginTop:'4px'}}>2 guias pendentes</div>
        </Card>
        <Card title="Documentos pendentes" subtitle="Aguardando você">
          <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'32px',color:'var(--navy-900)'}}>3</div>
          <div style={{fontSize:'13px',color:'var(--text-muted)',marginTop:'4px'}}>Notas para conferir</div>
        </Card>
      </div>
      <Card title="Atividade recente" footer={<Button variant="ghost" size="sm">Ver tudo</Button>}>
        <div style={{display:'flex',flexDirection:'column'}}>
          {docs.map((d,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0',borderBottom:i<docs.length-1?'1px solid var(--border-subtle)':'none'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <i data-lucide="file-text" style={{width:'18px',height:'18px',color:'var(--text-muted)'}}></i>
                <div>
                  <div style={{fontSize:'15px',fontWeight:500,color:'var(--text-primary)'}}>{d.name}</div>
                  <div style={{fontSize:'13px',color:'var(--text-muted)'}}>{d.date}</div>
                </div>
              </div>
              <Badge tone={d.status}>{d.label}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

window.OverviewScreen = OverviewScreen;
