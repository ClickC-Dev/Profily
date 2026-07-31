Modal dialog for confirmations (e.g. confirm invoice submission) with blurred scrim.

```jsx
<Dialog open={open} title="Enviar guia de imposto?" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button onClick={send}>Confirmar</Button></>}>
  Esta ação não pode ser desfeita.
</Dialog>
```
