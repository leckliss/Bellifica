import React from 'react';
import Styles from './assinatura.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function Assinatura() {
  return (
    <div className={Styles.configpainelstyle}>
       <div className={Styles.assinatura}>
        <h1>Seu Plano: Borboleta</h1>
        <h2>Sua próxima fatura é em 12/01/2024</h2>
        <br /><br />
        <button>Saiba mais detalhes sobre seu plano</button>
        <br /><br />
        <button>Cancelar Assinatura</button>

       </div>
    </div>
  );
}

export default Assinatura;