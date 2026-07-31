const {Card,Input,Switch,Button}=window.ProFilyDesignSystem_cdddaa;
function SettingsScreen() {
  const [email,setEmail]=React.useState(true);
  const [whats,setWhats]=React.useState(true);
  const [dark,setDark]=React.useState(false);
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'20px',maxWidth:'560px'}}>
      <Card title="Dados da empresa">
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <Input label="Razão social" value="Marina Costa Design LTDA" onChange={()=>{}} />
          <Input label="CNPJ" value="12.345.678/0001-90" onChange={()=>{}} />
        </div>
      </Card>
      <Card title="Notificações">
        <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
          <Switch label="Notificações por e-mail" checked={email} onChange={setEmail} />
          <Switch label="Notificações por WhatsApp" checked={whats} onChange={setWhats} />
          <Switch label="Modo escuro" checked={dark} onChange={setDark} />
        </div>
      </Card>
      <div><Button variant="secondary">Salvar alterações</Button></div>
    </div>
  );
}

window.SettingsScreen = SettingsScreen;
