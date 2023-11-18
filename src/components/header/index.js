import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/header/BellificaLogo.png';
import Menu from '../../assets/imgs/header/Menu.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLoginClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header>
      <ul>
        <li className='header-option'>Planos</li>
        <li className='header-option'><Link to={'/produtos'}>Produtos</Link></li>
        <li>
          <Link to={'/'}><img src={Logo} alt="Logo" className='logo' /></Link>
        </li>
        <li className='header-option'><Link to={'/sobre'}>Quem Somos</Link></li>
        <li className='header-login'>
          <button className='menu-button' onClick={handleLoginClick}>
            <img src={Menu} alt="Menu" className='menu-img' />
          </button>
          {isDropdownVisible && (
            <div className='dropdown-content'>
              <Link to={'/cadastrar'}><p className='menu-option'>Cadastrar-se</p></Link>
              <Link to={'/login'}><p className='menu-option'>Fazer Login</p></Link>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;


