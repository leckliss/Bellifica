import React from 'react';
import Styles from './assinatura.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function assinatura() {
  return (
    <div className={Styles.configpainelstyle}>
       <div className={Styles.assinatura}>
        <h1>Seu Plano Borboleta:</h1>
        <h2>inspira em 2 meses</h2>
        <button>Saiba mais detalhes sobre seu plano</button>

       </div>
    </div>
  );
}

export default assinatura;