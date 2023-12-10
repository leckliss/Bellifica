import React, { useState } from 'react';
import Styles from './configuracoes.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda
//components
import Assinatura from './assinatura/assinatura';
import Contato from './contato/contato';
import MeusDados from './meusdados/meusdados';
import Politicas from './politicas/politicas';

function Configuracoes() {
  const [activeComponent, setActiveComponent] = useState('ConfigHome');
  const [showOptions, setShowOptions] = useState(true);

  const handleClick = (component) => {
    setActiveComponent(component);
    setShowOptions(false);
  };

  const handleBack = () => {
    setActiveComponent('');
    setShowOptions(true);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Assinatura':
        return <Assinatura />;
      case 'Contato':
        return <Contato />;
      case 'MeusDados':
        return <MeusDados />;
      case 'Politicas':
        return <Politicas />;
    }
  };


  const optionsClass = showOptions ? '' : Styles.hidden;

  const componentClass = showOptions ? '' : Styles.fullWidth;

  return (
    <div className={Styles.configpainelstyle}>
      <ul className={`${Styles.configuracoes} ${optionsClass}`}>
        <li onClick={() => handleClick('MeusDados')}>Meus Dados</li>
        <li onClick={() => handleClick('Politicas')}>Privacidade</li>
        <li onClick={() => handleClick('Assinatura')}>Assinatura</li>
        <li onClick={() => handleClick('Contato')}>Contato</li>
      </ul>
      {showOptions ? null : (
        <button onClick={handleBack}>Voltar</button>
      )}
      <div className={componentClass}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Configuracoes;