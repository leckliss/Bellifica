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
        {/* Aqui, o Link é usado como um componente de lista com a classe apropriada */}
        <Link to="/planos"><li className='header-option'>Planos</li></Link>
        <Link to="/produtos"><li className='header-option'>Produtos</li></Link> 
        <li>
          <img src={Logo} alt="Logo" className='logo' />
        </li>
        <Link to="/quem-somos"><li className='header-option'>Quem Somos</li></Link>
        <li className='header-login'>
          <button className='menu-button' onClick={handleLoginClick}>
            <img src={Menu} alt="Menu" className='menu-img' />
          </button>
          {isDropdownVisible && (
            <div className='dropdown-content'>
              {/* Aqui, você pode querer usar o Link em vez de p para navegação */}
              <Link to="/cadastro"><p className='menu-option'>Cadastrar-se</p></Link>
              <Link to="/login"><p className='menu-option'>Fazer Login</p></Link>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
