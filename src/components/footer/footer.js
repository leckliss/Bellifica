import React from 'react';
import './styles.css';
import Logo from '../../assets/imgs/footer/footerlogo.png';
import Insta from '../../assets/imgs/footer/insta.png';
import Linke from '../../assets/imgs/footer/linke.png';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" className='logo' />
      <div className='footer-links'>
        <div className='footer-column'>
          <ul>
            <li>Institucional</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
        <div className='footer-column'>
          <ul>
            <li>FAQ</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
      </div>
      <div className='social-icons'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram Logo" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={Linke} alt="Linkedin Logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
