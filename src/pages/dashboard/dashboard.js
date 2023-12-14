import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [nomeComponent, setNomeComponent] = useState('Dashboard');
  const [clicked, setClicked] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Bellifica);

  var nome = localStorage.getItem('userName');

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
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('authToken');
    navigate('/');
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
        return <ChatBot />;
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
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={() => handleClick2('Painel', 'Dashboard')}><img src={require('../../assets/imgs/dashboard/Initial.png')} /> Pagina Inicial</li>
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={() => handleClick('Agenda', 'Agenda')}><img src={require('../../assets/imgs/dashboard/Calendar.png')} /> Agendamentos</li>
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={() => handleClick('Cursos', 'Cursos')}><img src={require('../../assets/imgs/dashboard/People.png')} /> Cursos</li>
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={() => handleClick('Chatbot', 'Chatbot')}><img src={require('../../assets/imgs/dashboard/ChatBot.png')} /> Chat Bot</li>
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={() => handleClick('Configuracoes', 'Configurações')}><img src={require('../../assets/imgs/dashboard/Settings.png')} /> Configurações</li>
          <li className={clicked ? 'li-barra-curta' : 'li-texto-barra'} onClick={handleLogout}><img src={require('../../assets/imgs/dashboard/Logout.png')} /> Sair </li>
        </ul>
      </div>
      <div className={clicked ? 'main-content-curta' : 'main-content'}>
        <h2 style={{ color: 'black' }}>{nomeComponent}</h2>
        <div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;