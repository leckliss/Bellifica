import React from 'react';
import Styles from './configuracoes.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function Configuracoes() {
  return (
        <div className={Styles.configpainelstyle}>
          <ul className= {Styles.configuracoes}>
            <li> Meu dados</li>
            <li>Privacidade</li>
            <li>Assinatura</li>
            <li>Contato</li>
            <li>Ajuda</li>
          </ul>
      </div>
  );
}

export default Configuracoes;
