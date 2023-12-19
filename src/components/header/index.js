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
  const handleCursoClick = () => {
    const element2 = document.getElementById('inicio-curso');
    if (element2) {
      navigate('/#inicio-curso');
      element2.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleProdutosClick = () => {
    const element2 = document.getElementById('inicio-produtos');
    if (element2) {
      navigate('/#inicio-produtos');
      element2.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleSobreClick = () => {
    const element2 = document.getElementById('inicio-sobre');
    if (element2) {
      navigate('/#inicio-sobre');
      element2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  const mobileMenuItems = (
    <>

      {isMobile && (
        <>
          <Link to={'/curso'} onClick={handleCursoClick} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-pink' : 'menu-option-pink'} >Cursos</p></Link>
          <Link to={'/produtos'} onClick={handleProdutosClick} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-pink' : 'menu-option-pink'} >Produtos</p></Link>
          <Link to={'/sobre'} onClick={handleSobreClick} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-pink' : 'menu-option-pink'}>Quem Somos</p></Link>
        </>
      )}
    </>
  );

  const desktopMenuItems = (
    <>
      <Link to={'/cadastro'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-pink' : 'menu-option-pink'}>Cadastrar-se</p></Link>
      <Link to={'/login'} style={{ textDecoration: 'none' }}><p className={scrolled ? 'menu-option-pink' : 'menu-option-pink'}>Login</p></Link>
    </>
  );


  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };


    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 200);
      setLogoSrc(scrollTop > 200 ? LogoBr : LogoBr);
      setMenuSrc(scrollTop > 200 ? MenuBr : MenuBr);
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isDropdownVisible ? 'active' : ''}`}>
      <ul>
        <li><Link to={'/curso'} onClick={handleCursoClick} className={scrolled && isMobile ? 'title' : 'text-white2'}>Cursos</Link></li>
        <li><Link to={'/produtos'} onClick={handleProdutosClick} className={scrolled && isMobile ? 'title' : 'text-white2'}>Serviços</Link></li>
        <li><Link to={'/#inicio'} onClick={handleInicioClick}><img src={logoSrc} alt="Logo" className={scrolled ? 'logo2' : 'logo'} /></Link></li>
        <li><Link to={'/sobre'} onClick={handleSobreClick} className={scrolled && isMobile ? 'title' : 'text-white2'}>Quem Somos</Link></li>
        <div className='header-login'>
          <button className='menu-button' onClick={handleLoginClick}>
            <img src={scrolled ? MenuBr : MenuBr} alt="Menu" className='menu-img' />
          </button>
          {isDropdownVisible && (
            <div className='dropdown-content'>
              {mobileMenuItems}
              {desktopMenuItems}
            </div>
          )}
        </div>
      </ul>
    </header>
  );
}

export default Header;
