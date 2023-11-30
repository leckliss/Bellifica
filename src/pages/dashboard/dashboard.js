import React, { useState } from 'react';
import Bellifica from '../../assets/imgs/dashboard/bellifica.png';
import BellificaB from '../../assets/imgs/dashboard/B.png';
import './styles.css';
//components
import Painel from '../../components/painel/painel'
import Cursos from '../../components/cursos/cursos';
import Agenda from '../../components/agenda/agenda';
import Configuracoes from '../../components/configuracoes/configuracoes';
import ChatBot from '../../components/chatbot/chatbot';


function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Painel');
  const [nomeComponent, setNomeComponent] = useState('Painel de Controle');
  const [clicked, setClicked] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Bellifica);

  const handleClick = (component, nome) => {
    setActiveComponent(component);
    setNomeComponent(nome);
    if (logoSrc === Bellifica) {
      setClicked(!clicked);
      setLogoSrc(BellificaB); // Muda a imagem B
    }
  };
  const handleClick2 = (component, nome) => {
    setActiveComponent(component);
    setNomeComponent(nome);
    if (logoSrc === BellificaB) {
      setClicked(!clicked);
      setLogoSrc(Bellifica); // Muda a imagem para Bellifica
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Painel':
        return <Painel />;
      case 'Cursos':
        return <Cursos />;
      case 'Agenda':
        return <Agenda />;
      case 'Chatbot':
        return <ChatBot/>;
      case 'Configuracoes':
        return <Configuracoes />;
      default:
        return <Painel />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className={clicked ? 'sidebarcurta' : 'sidebar'} >
        <img src={logoSrc} alt="Logo" className={clicked ? 'logo2' : 'logo'} />
        <ul>
          <li><a href="#" onClick={() => handleClick2('Painel', 'Painel de Controle')}><img src={require('../../assets/imgs/dashboard/Initial.png')} /> Pagina Inicial</a></li>
          <li><a href="#" onClick={() => handleClick('Agenda', 'Agenda')}><img src={require('../../assets/imgs/dashboard/Calendar.png')} /> Agendamentos</a></li>
          <li><a href="#" onClick={() => handleClick('Cursos', 'Cursos')}><img src={require('../../assets/imgs/dashboard/People.png')} /> Cursos</a></li>
          <li><a href="#" onClick={() => handleClick('Chatbot', 'Chatbot')}><img src={require('../../assets/imgs/dashboard/ChatBot.png')} /> Chat Bot</a></li>
          <li><a href="#" onClick={() => handleClick('Configuracoes', 'Configurações')}><img src={require('../../assets/imgs/dashboard/Settings.png')} /> Configurações</a></li>
          
  
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/Logout.png')} /> Sair</a> </li>
        </ul>
      </div>
      <div className="main-content">
        <h2 style={{color: 'black'}}>{nomeComponent}</h2>
        <div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;