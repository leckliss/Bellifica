import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';


import Styles from './Curso.module.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';

import blob from '../../assets/imgs/curso/mulher-estudando.png'
import senac from '../../assets/imgs/curso/logo-senac.png'
import financeiro from '../../assets/imgs/curso/financeiro.png'
import marketing from '../../assets/imgs/curso/marketing.png'
import estetica from '../../assets/imgs/curso/beleza-estetica.png'
import cabelosenac from '../../assets/imgs/curso/cabelo-senac.png'
import maquiadorasenac from '../../assets/imgs/curso/maquiadora.png'
import manicuresenac from '../../assets/imgs/curso/maos-pes.png'

import embelleze from '../../assets/imgs/curso/embelleze-logo.png'
import cabembelleze from '../../assets/imgs/curso/cabelo-embelleze.png'
import barbaembelleze from '../../assets/imgs/curso/barba-embelleze.png'
import olhosembelleze from '../../assets/imgs/curso/olhos-embelleze.png'
import makeembelleze from '../../assets/imgs/curso/maquiagem-embelleze.png'
import unhasembelleze from '../../assets/imgs/curso/unhas-embelleze.png'
import depiembelleze from '../../assets/imgs/curso/depilação-embelleze.png'

import boti from '../../assets/imgs/curso/logo-boticario.png'
import unhasboti from '../../assets/imgs/curso/unhas-boticario.png'
import alongamentoboti from '../../assets/imgs/curso/alongamento-boticario.png'
import makeboti from '../../assets/imgs/curso/maquiagem-boticario.png'
import vendasboti from '../../assets/imgs/curso/vendas-boticario.png'
import desenboti from '../../assets/imgs/curso/desenvolvimento-pessoal-boticario.png'
import empreenboti from '../../assets/imgs/curso/mulher-empreendedora-boticario.png'

import FundinRosa from '../../assets/imgs/curso/fundinrosa.png';
import MulherCurso from '../../assets/imgs/curso/mulhercurso.png';


function Curso() {

    useEffect(() => {
        const section = document.getElementById('inicio-curso');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, []);

    // Array de imagens
    const images = [
        {
            src: financeiro,
            description: 'Financeiro',
            link: 'https://www.sp.senac.br/areas/gestao-e-negocios/financas?utm_source=google&utm_medium=cpc&utm_campaign=GCR_Areas&utm_content=Sitelink&gad_source=1&gclid=CjwKCAiA1MCrBhAoEiwAC2d64Wb-ejO6IrS-99tZ73oVkKENp5Ew2W_O3fQwiPirD36vTiWBahk-GBoC_JMQAvD_BwE'
        },

        {
            src: marketing,
            description: 'Marketing',
            link: 'https://www.sp.senac.br/areas/comunicacao-e-marketing/marketing'
        },
        {
            src: estetica,
            description: 'Estética',
            link: 'https://www.sp.senac.br/areas/beleza-e-estetica/estetica?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCAbomlYHeid3IPC-hf2k5EARQwI9DeXpXcxjogIml_wjlCoROhBrNhoCvIwQAvD_BwE#cursos-tecnicos?utm_source=google&utm_medium=cpc&utm_campaign=GCR_Areas&utm_content=Sitelink'
        },
        {
            src: cabelosenac,
            description: 'Cabelo e Barbearia',
            link: 'https://www.sp.senac.br/areas/beleza-e-estetica/cabelo-e-barbearia?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCAbomlYHeid3IPC-hf2k5EARQwI9DeXpXcxjogIml_wjlCoROhBrNhoCvIwQAvD_BwE#cursos-tecnicos?utm_source=google&utm_medium=cpc&utm_campaign=GCR_Areas&utm_content=Sitelink'
        },
        {
            src: maquiadorasenac,
            description: 'Maquiagem',
            link: 'https://www.sp.senac.br/areas/beleza-e-estetica/maquiagem?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCAbomlYHeid3IPC-hf2k5EARQwI9DeXpXcxjogIml_wjlCoROhBrNhoCvIwQAvD_BwE#cursos-tecnicos?utm_source=google&utm_medium=cpc&utm_campaign=GCR_Areas&utm_content=Sitelink'
        },
        {
            src: manicuresenac,
            description: 'Mãos e Pés',
            link: 'https://www.sp.senac.br/areas/beleza-e-estetica/pes-e-maos?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCAbomlYHeid3IPC-hf2k5EARQwI9DeXpXcxjogIml_wjlCoROhBrNhoCvIwQAvD_BwE#cursos-tecnicos?utm_source=google&utm_medium=cpc&utm_campaign=GCR_Areas&utm_content=Sitelink'
        },

    ];

    const images2 = [
        {
            src: cabembelleze,
            description: 'Cabelo',
            link: 'https://institutoembelleze.com/pt-br/categoria/cabelo'
        },

        {
            src: barbaembelleze,
            description: 'Barba',
            link: 'https://institutoembelleze.com/pt-br/categoria/barba'
        },

        {
            src: olhosembelleze,
            description: 'Olhos',
            link: 'https://institutoembelleze.com/pt-br/categoria/olhar'
        },

        {
            src: makeembelleze,
            description: 'Maquiagem',
            link: 'https://institutoembelleze.com/pt-br/categoria/maquiagem'
        },

        {
            src: unhasembelleze,
            description: 'Unhas',
            link: 'https://institutoembelleze.com/pt-br/categoria/unhas'
        },

        {
            src: depiembelleze,
            description: 'Depilação',
            link: 'https://institutoembelleze.com/pt-br/categoria/depilacao'
        },

    ];

    const images3 = [
        {
            src: unhasboti,
            description: 'Unhas'
        },

        {
            src: alongamentoboti,
            description: 'Alongamento de Unhas'
        },

        {
            src: makeboti,
            description: 'Maquiagem'
        },

        {
            src: vendasboti,
            description: 'Vendas'
        },

        {
            src: desenboti,
            description: 'Desenvolvimento pessoal'
        },

        {
            src: empreenboti,
            description: 'Empreendedorismo'
        },

    ];



    return (

        <body className={Styles.pagcurso}>

            <Header />

            <div className={Styles.carrosel} id='inicio-curso' name='inicio-curso'>

                <div className={Styles.sec11}>
                    <div style={{ color: 'black', fontWeight: 'bolder', }}>
                        <h1 className={Styles.typingeffect}>
                            Chegamos para <span style={{ color: '#fd9ba6', fontWeight: 'bolder' }}>desembaraçar</span> sua vida.
                        </h1>
                    </div>
                    <h5 style={{ fontSize: 'x-large', color: 'white' }}>Indicamos cursos com parceiros que iremos oferecer para você bellificar mais ainda o seu empreendimento</h5>
                    <button className={Styles.buttonino} >Conhecer mais</button>

                </div>

                <div className={Styles.sec12}>

                    <img
                        className={Styles.fundinrosa}
                        src={FundinRosa}
                    />
                    <img
                        className={Styles.mulhercurso}
                        src={MulherCurso}
                    />

                </div>

            </div>

            <section className={Styles.senac}>

                <div className={Styles.camplogosenac}>
                    <img src={senac} alt='logo senac' className={Styles.logosenac} />
                </div>

                <div className={Styles.page}>
                    <ImageCarousel images={images} />
                </div>

                <img src={embelleze} alt='logo embelleze' className={Styles.logoembelleze} />

                <div className={Styles.carroselembelleze}>
                    <ImageCarousel images={images2} />
                </div>

                <img src={boti} alt='logo instituto boticario' className={Styles.logoboti} />

                <div className={Styles.carroselembelleze}>
                    <ImageCarousel images={images3} />
                </div>
            </section>



            <Footer />
        </body>

    )
}


export default Curso;