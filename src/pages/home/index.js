import React from 'react';

import Header from '../../components/header/index.js';
import Footer from '../../components/footer/index.js';

import Fundo from '../../assets/imgs/home/ImageBackground.png';

import './styles.css';


const Home = () => {
  return (
    <>
      <Header/>
      <main className='background-page'>
        

        <div className='img-div'>
          <img src={Fundo} className='background-img'/>
        </div>
        <div className='text-div'>
          <p className='text'>Uma nova forma de <br/> transformar seu trabalho <br/> único e elegante</p>
        </div>
        
      </main>
      <Footer/>
    </>
  );
}

export default Home;
