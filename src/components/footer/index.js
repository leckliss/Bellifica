import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/footer/footerlogo.png';
import Insta from '../../assets/imgs/footer/insta.png';
import Linke from '../../assets/imgs/footer/linke.png';

function Footer() {

  return (
    <>
    <footer>
      <img src={Logo} alt="Logo" className='footerlogo' />
      <div>
        <ul>
          <li >Institucional</li>
          <li >Politica de Privacidade</li>
        </ul>
        <ul>
          <li >FAQ</li>
          <li >Fale Conosco</li>
        </ul>
      </div>
      <img src={Insta} className='redes' alt="Instagram Logo" />
      <img src={Linke} className='redes' alt="Linkedin Logo" />
    </footer>
    <div className='copyri'>
        <p>Copyright © Bellifica - 2023 - Todos os direitos reservados</p>
      </div>
    </>
  );
}

export default Footer;


