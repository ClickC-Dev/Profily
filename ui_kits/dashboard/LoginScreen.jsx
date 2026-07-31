const {Input,Button}=window.ProFilyDesignSystem_cdddaa;
function LoginScreen({onLogin}) {
  return (
    <div style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--navy-900)'}}>
      <div style={{background:'var(--surface-card)',borderRadius:'var(--radius-xl)',padding:'40px',width:'380px',boxShadow:'var(--shadow-lg)',display:'flex',flexDirection:'column',gap:'20px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'8px'}}>
          <img src="../../assets/profily-mark.png" style={{height:'52px'}} />
          <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'22px',color:'var(--navy-900)'}}>ProFily</div>
          <div style={{fontFamily:'var(--font-body)',fontSize:'14px',color:'var(--text-muted)'}}>Entre para acessar seu painel</div>
        </div>
        <Input label="E-mail" placeholder="voce@empresa.com.br" />
        <Input label="Senha" type="password" placeholder="••••••••" />
        <Button onClick={onLogin} style={{width:'100%'}}>Entrar</Button>
        <div style={{textAlign:'center',fontSize:'13px',color:'var(--text-muted)'}}>Esqueceu a senha? <a href="#">Recuperar acesso</a></div>
      </div>
    </div>
  );
}

window.LoginScreen = LoginScreen;
