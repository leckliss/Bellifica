import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/footer/footerlogo.png';
import Insta from '../../assets/imgs/footer/insta.png';
import Linke from '../../assets/imgs/footer/linke.png';

const Footer = () => {

  return (
    <footer>
      <img src={Logo} alt="Logo" className='logo' />
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
      <img src={Insta} alt="Instagram Logo" />
      <img src={Linke} alt="Linkedin Logo" />
    </footer>
  );
}

export default Footer;


