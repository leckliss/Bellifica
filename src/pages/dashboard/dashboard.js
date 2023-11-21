import React,{useState} from 'react';
import Bellifica from '../../assets/imgs/dashboard/bellifica.png';
import BellificaB from '../../assets/imgs/dashboard/B.png';
import './styles.css';
//components
import Painel from '../../components/painel/painel'
import Cursos from '../../components/cursos/cursos';
import Agenda from '../../components/agenda/agenda';
import Configuracoes from '../../components/configuracoes/configuracoes';


function Dashboard() {
  const [clicked, setClicked] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Bellifica);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img src={logoSrc} alt="Logo" className={clicked ? 'logo2' : 'logo'} />
        <ul>
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/Initial.png')}/> Pagina Inicial</a> </li>
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/Calendar.png')}/> Calendario</a> </li>
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/People.png')}/> Cursos e Dicas</a> </li>
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/Settings.png')}/> Configurações</a> </li>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <li><a href="#"><img src={require('../../assets/imgs/dashboard/Logout.png')}/> Sair</a> </li>
          
        </ul>
      </div>
      <div className="main-content">
        //components que serão renderizados
        <h2>Painel de Controle</h2>
        <div>
          <h3>Conteúdo Dinâmico</h3>
          <h3>Vídeo de Exemplo</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Vídeo de Exemplo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;