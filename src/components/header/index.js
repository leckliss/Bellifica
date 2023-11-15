import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/header/BellificaLogo.png';
import Menu from '../../assets/imgs/header/Menu.png';

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLoginClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header>
      <ul>
        <li className='header-option'>Planos</li>
        <li className='header-option'>Produtos</li>
        <li>
          <img src={Logo} alt="Logo" className='logo' />
        </li>
        <li className='header-option'>Quem Somos</li>
        <li className='header-login'>
          <button className='menu-button' onClick={handleLoginClick}>
            <img src={Menu} alt="Menu" className='menu-img' />
          </button>
          {isDropdownVisible && (
            <div className='dropdown-content'>
              <p className='menu-option'>Cadastrar-se</p>
              <p className='menu-option'>Fazer Login</p>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;


