const {Card,Badge,Button,Tag,Input}=window.ProFilyDesignSystem_cdddaa;
const rows=[
  {name:'NF-e 00234.pdf',type:'Nota Fiscal',date:'28/07/2026',status:'success',label:'Emitida'},
  {name:'Boleto_DAS_Julho.pdf',type:'Boleto',date:'20/07/2026',status:'warning',label:'A vencer'},
  {name:'NF-e 00233.pdf',type:'Nota Fiscal',date:'15/07/2026',status:'success',label:'Emitida'},
  {name:'Extrato_Bancario_Jun.pdf',type:'Extrato',date:'02/07/2026',status:'neutral',label:'Arquivado'},
  {name:'DAS_Junho.pdf',type:'Boleto',date:'05/07/2026',status:'danger',label:'Atrasado'},
];
function DocumentsScreen() {
  const [q,setQ]=React.useState('');
  return (
    <Card title="Documentos" subtitle="Notas fiscais, boletos e extratos" footer={null}
      padded={true}>
      <div style={{display:'flex',justifyContent:'space-between',gap:'16px',marginBottom:'12px'}}>
        <div style={{width:'280px'}}><Input placeholder="Buscar documento" value={q} onChange={e=>setQ(e.target.value)} icon={<i data-lucide="search" style={{width:16,height:16,color:'var(--text-muted)'}}></i>} /></div>
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
          <Tag>Todos</Tag><Tag onRemove={()=>{}}>Julho 2026</Tag>
          <Button size="sm" icon={<i data-lucide="upload" style={{width:16,height:16}}></i>}>Enviar documento</Button>
        </div>
      </div>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)'}}>
        <thead>
          <tr style={{textAlign:'left',fontSize:'13px',color:'var(--text-muted)'}}>
            <th style={{padding:'8px 4px',fontWeight:500}}>Documento</th>
            <th style={{padding:'8px 4px',fontWeight:500}}>Tipo</th>
            <th style={{padding:'8px 4px',fontWeight:500}}>Data</th>
            <th style={{padding:'8px 4px',fontWeight:500}}>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} style={{borderTop:'1px solid var(--border-subtle)'}}>
              <td style={{padding:'12px 4px',fontSize:'14px',color:'var(--text-primary)',fontWeight:500}}>{r.name}</td>
              <td style={{padding:'12px 4px',fontSize:'14px',color:'var(--text-secondary)'}}>{r.type}</td>
              <td style={{padding:'12px 4px',fontSize:'14px',color:'var(--text-secondary)'}}>{r.date}</td>
              <td style={{padding:'12px 4px'}}><Badge tone={r.status}>{r.label}</Badge></td>
              <td style={{padding:'12px 4px',textAlign:'right'}}><i data-lucide="download" style={{width:16,height:16,color:'var(--text-muted)',cursor:'pointer'}}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

window.DocumentsScreen = DocumentsScreen;
