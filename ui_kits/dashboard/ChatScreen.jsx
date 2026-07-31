const {Card,Input,Button}=window.ProFilyDesignSystem_cdddaa;
const msgs=[
  {from:'them',text:'Oi Marina! Recebi sua nota fiscal de julho, já está tudo certo.',time:'09:12'},
  {from:'me',text:'Perfeito! E sobre o DAS deste mês, já posso pagar?',time:'09:15'},
  {from:'them',text:'Pode sim, a guia já está disponível na aba Impostos. Qualquer dúvida me chama.',time:'09:16'},
];
function ChatScreen() {
  return (
    <Card padded={false} style={{height:'520px',display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'18px 24px',borderBottom:'1px solid var(--border-subtle)'}}>
        <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'var(--navy-900)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700}}>RS</div>
        <div>
          <div style={{fontWeight:600,color:'var(--text-primary)'}}>Rafael Souza</div>
          <div style={{fontSize:'13px',color:'var(--success)'}}>● Seu contador dedicado</div>
        </div>
      </div>
      <div style={{flex:1,padding:'24px',display:'flex',flexDirection:'column',gap:'12px',overflowY:'auto'}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{alignSelf:m.from==='me'?'flex-end':'flex-start',maxWidth:'70%'}}>
            <div style={{background:m.from==='me'?'var(--accent-primary)':'var(--surface-sunken)',color:m.from==='me'?'#fff':'var(--text-primary)',padding:'12px 16px',borderRadius:'16px',borderBottomRightRadius:m.from==='me'?'4px':'16px',borderBottomLeftRadius:m.from==='me'?'16px':'4px',fontSize:'14px',lineHeight:1.5}}>{m.text}</div>
            <div style={{fontSize:'11px',color:'var(--text-muted)',marginTop:'4px',textAlign:m.from==='me'?'right':'left'}}>{m.time}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:'12px',padding:'16px 24px',borderTop:'1px solid var(--border-subtle)'}}>
        <div style={{flex:1}}><Input placeholder="Escreva uma mensagem..." /></div>
        <Button icon={<i data-lucide="send" style={{width:16,height:16}}></i>}>Enviar</Button>
      </div>
    </Card>
  );
}

window.ChatScreen = ChatScreen;
