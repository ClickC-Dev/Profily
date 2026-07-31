function Sidebar({active,onNavigate}) {
  const items=[
    {id:'overview',label:'Visão Geral',icon:'layout-dashboard'},
    {id:'documents',label:'Documentos',icon:'file-text'},
    {id:'taxes',label:'Impostos',icon:'receipt'},
    {id:'chat',label:'Chat com contador',icon:'message-circle'},
    {id:'settings',label:'Configurações',icon:'settings'},
  ];
  return (
    <div style={{width:'240px',minWidth:'240px',background:'var(--navy-900)',color:'#fff',display:'flex',flexDirection:'column',padding:'24px 16px',gap:'28px',height:'100%'}}>
      <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'0 8px'}}>
        <img src="../../assets/profily-mark.png" style={{height:'32px'}} />
        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'20px'}}>ProFily</span>
      </div>
      <nav style={{display:'flex',flexDirection:'column',gap:'4px'}}>
        {items.map(it=>{
          const isActive=it.id===active;
          return (
            <button key={it.id} onClick={()=>onNavigate(it.id)}
              style={{display:'flex',alignItems:'center',gap:'12px',padding:'11px 14px',borderRadius:'var(--radius-md)',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',fontWeight:isActive?600:500,background:isActive?'rgba(63,193,240,0.16)':'transparent',color:isActive?'var(--sky-400)':'rgba(255,255,255,0.75)',transition:'all 120ms ease'}}>
              <i data-lucide={it.icon} style={{width:'18px',height:'18px'}}></i>{it.label}
            </button>
          );
        })}
      </nav>
      <div style={{marginTop:'auto',padding:'14px',background:'rgba(255,255,255,0.06)',borderRadius:'var(--radius-md)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>
        Precisa de ajuda? Fale com seu contador dedicado a qualquer momento.
      </div>
    </div>
  );
}

window.Sidebar = Sidebar;
