import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/footer/footerlogo.png';
import Insta from '../../assets/imgs/footer/insta.png';
import Linke from '../../assets/imgs/footer/linke.png';

import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footerdiv'>
      <footer>
        <img src={Logo} alt="Logo" className='footerlogo' />
        <div>
          <ul>
            <h2>Quem Somos</h2>
            <Link to={'/sobre'} style={{textDecoration: 'none'}}><li >Institucional</li></Link>
            <Link to={'/politica'} style={{textDecoration: 'none'}}><li >Politica de Privacidade</li></Link>
          </ul>
          <ul>
            <h2>Contato</h2>
            <Link to={'/faq'} style={{textDecoration: 'none'}}><li >FAQ</li></Link>
            <Link to={'/faleconosco'} style={{textDecoration: 'none'}}><li >Fale Conosco</li></Link>
          </ul>
        </div>
        <a href="https://www.instagram.com/bellifica/" target='_blank'><img src={Insta} className='redes' alt="Instagram Logo" /></a>
        <a href="https://www.linkedin.com/company/bellifica" target='_blank'><img src={Linke} className='redes' alt="Linkedin Logo" /></a>
      </footer>
      <div className='copyri'>
        <p>Copyright © Bellifica - 2023 - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;


