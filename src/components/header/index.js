import React, { useState, useEffect } from 'react';
import './styles.css';
import Home from '../../pages/home/home';
import LogoRs from '../../assets/imgs/header/BellificaLogorosa.png';
import LogoBr from '../../assets/imgs/header/BellificaLogo.png';
import MenuRs from '../../assets/imgs/header/MenuRs.png';
import MenuBr from '../../assets/imgs/header/Menu.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LogoBr);
  const [menuSrc, setMenuSrc] = useState(MenuBr);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  const handleInicioClick = () => {
    const element2 = document.getElementById('inicio');
    if (element2) {
      navigate('/#inicio');
      element2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 200);
      setLogoSrc(scrollTop > 200 ? LogoBr : LogoBr);
      setMenuSrc(scrollTop > 200 ? MenuBr : MenuBr);

      // Adiciona ou remove a classe para ocultar ou exibir o texto no dropdown
      const headerLogin = document.querySelector('.header-login');
      if (headerLogin) {
        if (scrollTop > 200) {
          headerLogin.classList.add('hide-text');
        } else {
          headerLogin.classList.remove('hide-text');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isDropdownVisible ? 'active' : ''}`}>
    <ul>
      {/* Links para diferentes seções, a classe muda conforme o estado de scroll */}
      <li><Link to={'/curso'}  className={scrolled ? 'text-white' : 'text-white2'}>Cursos</Link></li>
      <li><Link to={'/produtos'} className={scrolled ? 'text-white' : 'text-white2'}>Serviços</Link></li>
      <li><Link to={'/#inicio'} onClick={handleInicioClick}><img src={logoSrc} alt="Logo" className={scrolled ? 'logo2' : 'logo'} /></Link></li>
      <li><Link to={'/sobre'} className={scrolled ? 'text-white' : 'text-white2'}>Quem Somos</Link></li>
      <div className='header-login'>
        {/* Botão do menu, muda a imagem conforme o estado de scroll */}
        <button className='menu-button' onClick={handleLoginClick}>
          <img src={menuSrc} alt="Menu" className='menu-img' />
        </button>
        {/* Dropdown que aparece ao clicar no botão de menu */}
        {isDropdownVisible && (
          <div className={scrolled ? 'dropdown-content2' : 'dropdown-content'}>
            {/* Links dentro do dropdown, as classes mudam conforme o estado de scroll */}
            <Link to={'/cadastro'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-white' : 'menu-option-pink'}>Cadastrar-se</p></Link>
            <Link to={'/login'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-white' : 'menu-option-pink'}>Login</p></Link>
            <Link to={'/#planos'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'} >Planos</p></Link>
            <Link to={'/produtos'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'} >Produtos</p></Link>
            <Link to={'/sobre'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'}>Quem Somos</p></Link>
          </div>
        )}
      </div>
    </ul>
  </header>
  );
}

export default Header;
