import React from 'react';
import './configuracoes.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function Configuracoes() {
  return (
    <div className="configuracoes-container">
      <h1>Configurações</h1>
      <ul className="configuracoes-lista">
        <li>Meu dados</li>
        <li>Privacidade</li>
        <li>Assinatura</li>
        <li>Termos de Uso</li>
        <li>Contato com a Bellifica</li>
        <li>Ajuda</li>
      </ul>
    </div>
  );
}

export default Configuracoes;
