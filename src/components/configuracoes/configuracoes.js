import React from 'react';
import './configuracoes.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function Configuracoes() {
  return (
    <div className="configpainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <ul className="configuracoes-lista" style={{color: 'black', width: '80%', height: '70vh', backgroundColor: 'gray', borderRadius: '30px'}}>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Meu dados</li>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Privacidade</li>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Assinatura</li>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Termos de Uso</li>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Contato com a Bellifica</li>
        <li style={{color: 'black', listStyle: 'none', height: '16%', width: '100%', textAlign: 'center'}}>Ajuda</li>
      </ul>
    </div>
  );
}

export default Configuracoes;
