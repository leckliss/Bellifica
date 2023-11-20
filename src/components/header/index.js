// Importa os módulos necessários do React e do estilo CSS
import React, { useState, useEffect } from 'react';
import './styles.css';

// Importa os logos e imagens para os estados iniciais e alterados pelo scroll
import LogoRs from '../../assets/imgs/header/BellificaLogorosa.png';
import LogoBr from '../../assets/imgs/header/BellificaLogo.png';
import MenuRs from '../../assets/imgs/header/MenuRs.png';
import MenuBr from '../../assets/imgs/header/Menu.png';

// Importa o componente de link da biblioteca react-router-dom
import { Link } from 'react-router-dom';

function Header() {
  // Estados para controlar a visibilidade do dropdown, o estado de scroll e os sources dos logos e menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LogoRs);
  const [menuSrc, setMenuSrc] = useState(MenuRs);

  // Função para lidar com o clique no botão de login
  const handleLoginClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Efeito para lidar com o scroll e atualizar o estado conforme necessário
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Atualiza o estado de scroll
      setScrolled(scrollTop > 50);

      // Altera o src da imagem com base no estado de scroll
      setLogoSrc(scrollTop > 50 ? LogoBr : LogoRs);
      setMenuSrc(scrollTop > 50 ? MenuBr : MenuRs);
    };

    // Adiciona um listener para o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O segundo argumento [] garante que o efeito só é executado uma vez durante a montagem do componente

  // Componente de cabeçalho
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isDropdownVisible ? 'active' : ''}`}>
      <ul>
        {/* Links para diferentes seções, a classe muda conforme o estado de scroll */}
        <li><Link to={'/#planos'} className={scrolled ? 'text-white' : 'text-pink'}>Planos</Link></li>
        <li><Link to={'/produtos'} className={scrolled ? 'text-white' : 'text-pink'}>Produtos</Link></li>
        <li><Link to={'/'}><img src={logoSrc} alt="Logo" className={scrolled ? 'logo2' : 'logo'} /></Link></li>
        <li><Link to={'/sobre'} className={scrolled ? 'text-white' : 'text-pink'}>Quem Somos</Link></li>
        <li className='header-login'>
          {/* Botão do menu, muda a imagem conforme o estado de scroll */}
          <button className='menu-button' onClick={handleLoginClick}>
            <img src={menuSrc} alt="Menu" className='menu-img' />
          </button>
          {/* Dropdown que aparece ao clicar no botão de menu */}
          {isDropdownVisible && (
           <div className={scrolled ? 'dropdown-content2' : 'dropdown-content'}>
              {/* Links dentro do dropdown, as classes mudam conforme o estado de scroll */}
              <Link to={'/cadastrar'} style={{textDecoration: 'none'}}><p className={scrolled ? 'menu-option-white' : 'menu-option-pink'}>Cadastrar-se</p></Link>
              <Link to={'/login'} style={{textDecoration: 'none'}}><p className={scrolled ? 'menu-option-white' : 'menu-option-pink'}>Login</p></Link>
              <Link to={'/#planos'} style={{textDecoration: 'none'}}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'} >Planos</p></Link>
              <Link to={'/produtos'} style={{textDecoration: 'none'}}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'} >Produtos</p></Link>
              <Link to={'/sobre'} style={{textDecoration: 'none'}}><p className={scrolled ? 'menu-option2-white' : 'menu-option2-pink'}>Quem Somos</p></Link>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
