import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/footer/footerlogo.png';
import Insta from '../../assets/imgs/footer/instagram.png';
import InstaRose from '../../assets/imgs/footer/instagramrose.png';
import Linkedin from '../../assets/imgs/footer/linkedin.png';
import LinkedinRose from '../../assets/imgs/footer/linkdinrose.png';
import Forms from '../../assets/imgs/footer/forms.png';
import FormsRose from '../../assets/imgs/footer/formsrose.png';
import Linktree from '../../assets/imgs/footer/linktree.png';
import LinktreeRose from '../../assets/imgs/footer/linktreerose.png';

import { Link } from 'react-router-dom';

function Footer() {

  const [hoverInsta, setHoverInsta] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverForms, setHoverForms] = useState(false);
  const [hoverLinktree, setHoverLinktree] = useState(false);

  return (
    <div className='footerdiv'>
      <footer>
        <img src={Logo} alt="Logo" className='footerlogo' />
        <div>
          <ul>
            <h2>Quem Somos</h2>
            <Link to={'/sobre'} style={{ textDecoration: 'none' }}><li >Institucional</li></Link>
            <Link to={'/politica'} style={{ textDecoration: 'none' }}><li >Politica de Privacidade</li></Link>
          </ul>
          <ul>
            <h2>Contato</h2>
            <Link to={'/faq'} style={{ textDecoration: 'none' }}><li >FAQ</li></Link>
            <Link to={'/faleconosco'} style={{ textDecoration: 'none' }}><li >Fale Conosco</li></Link>
          </ul>
        </div>
        <div className='redesdiv'>
          <a href="https://www.instagram.com/bellifica/" target='_blank'
            onMouseEnter={() => setHoverInsta(true)}
            onMouseLeave={() => setHoverInsta(false)}>
            <img src={hoverInsta ? InstaRose : Insta} className='redes' alt="Instagram Logo" />
          </a>
          <a href="https://www.linkedin.com/company/bellifica" target='_blank'
            onMouseEnter={() => setHoverLinkedin(true)}
            onMouseLeave={() => setHoverLinkedin(false)}>
            <img src={hoverLinkedin ? LinkedinRose : Linkedin} className='redes' alt="LinkedIn Logo" />
          </a>
          <a href="https://wuzl6fo23io.typeform.com/to/M0zbewHw" target='_blank'
            onMouseEnter={() => setHoverForms(true)}
            onMouseLeave={() => setHoverForms(false)}>
            <img src={hoverForms ? FormsRose : Forms} className='redes' alt="Forms Logo" />
          </a>
          <a href="https://linktr.ee/bellifica" target='_blank'
            onMouseEnter={() => setHoverLinktree(true)}
            onMouseLeave={() => setHoverLinktree(false)}>
            <img src={hoverLinktree ? LinktreeRose : Linktree} className='redes' alt="Linktree Logo" />
          </a>
        </div>
      </footer>
      <div className='copyri'>
        <p>Copyright © Bellifica - 2023 - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;


