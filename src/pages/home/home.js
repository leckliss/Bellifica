import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Styles from './home.module.css';

import imgideia from '../../assets/imgs/home/caixaideia.png'
import imggestao from '../../assets/imgs/home/caixagestao.png';
import imgcurso from '../../assets/imgs/home/caixacurso.png';
import imgauxilio from '../../assets/imgs/home/caixaauxilio.png';

import imgcurso1 from '../../assets/imgs/home/imgcurso1.png';
import imgcurso2 from '../../assets/imgs/home/imgcurso2.png';
import imgcurso3 from '../../assets/imgs/home/imgcurso3.png';
import imgcurso4 from '../../assets/imgs/home/imgcurso4.png';
import imgcurso5 from '../../assets/imgs/home/imgcurso5.png';
import imgcurso6 from '../../assets/imgs/home/imgcurso6.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import FundinRoxo from '../../assets/imgs/home/fundinroxo.png';
import Prof1 from '../../assets/imgs/home/prof1.png';
import Prof2 from '../../assets/imgs/home/prof2.png';
import Prof3 from '../../assets/imgs/home/prof3.png';
import Prof4 from '../../assets/imgs/home/prof4.png';
import Prof5 from '../../assets/imgs/home/prof5.png';
import Prof6 from '../../assets/imgs/home/prof6.png';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/imgs/home/img1.jpg';
import img2 from '../../assets/imgs/home/img2.jpg';
import img3 from '../../assets/imgs/home/img3.jpg';
import Borbo from '../../assets/imgs/home/borbo.png';
import Borbo2 from '../../assets/imgs/home/borbo2.png';
import Pupa from '../../assets/imgs/home/pupa.png';
import Pupa2 from '../../assets/imgs/home/pupa2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import videomake from '../../assets/video/make.mp4'

import { useGesture } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    const navigate = useNavigate();
    const handleNavigateToCurso = () => {
        navigate('/curso');
    };

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds = [
        { image: '../../assets/imgs/home/img1.png', color: '#0c301c' },
        { image: '../../assets/imgs/home/img2.png', color: '#61342d' },
        { image: '../../assets/imgs/home/img3.jpeg', color: '#2d1c20' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) =>
                prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    const [text, setText] = useState('');
    const fullText = ' Embelezando sonhos, estruturando realidades...';

    useEffect(() => {
        let charIndex = 0;
        const typingEffect = setInterval(() => {
            // Verifica se o próximo caractere é o ponto final
            if (fullText[charIndex] === '.') {
                setText((prev) => prev + fullText[charIndex]); // Adiciona o ponto final
                clearInterval(typingEffect); // Interrompe o intervalo após adicionar o ponto final
            } else if (charIndex < fullText.length) {
                setText((prev) => prev + fullText[charIndex]);
                charIndex++;
            }
        }, 150); // Velocidade de digitação

        return () => clearInterval(typingEffect);
    }, []);


    const [carouselProps, setCarouselProps] = useSpring(() => ({
        x: 0,
        config: { friction: 50, tension: 200 },
    }));

    const bind = useGesture({
        onDrag: ({ active, movement: [x] }) => {
            if (active) {
                setCarouselProps({ x });
            }
        },
        onDragEnd: () => {
            // Add logic here to snap the carousel to the nearest position if needed.
        },
    });

    const [scrollX, setScrollX] = useState(0);
    const carouselRef = useRef(null);

    const totalComentarios = 5;
    const maxScroll = totalComentarios - 1;

    const scrollLeft = () => {
        if (scrollX < 0) {
            const newScrollX = scrollX + 1;
            setScrollX(newScrollX);
            carouselRef.current.style.transform = `translateX(${newScrollX * 20}%)`;
        }
    };

    const scrollRight = () => {

        if (scrollX > -maxScroll) {
            const newScrollX = scrollX - 1;
            setScrollX(newScrollX);
            carouselRef.current.style.transform = `translateX(${newScrollX * 20}%)`;
        }
    };

    const carrossel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    const coment = useRef();

    useEffect(() => {
        console.log(coment.current?.scrollWidth, coment.current?.offsetWidth)
        setWidth(coment.current?.scrollWidth - coment.current?.offsetWidth)
    }, [])

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculatePosition = () => {
        const newPosition = scrollPosition * 0.3;
        return newPosition > 150 ? 150 : newPosition;
    };

    const myRef = useRef(null);

    const scrollToSection = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const section = document.getElementById('inicio');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);




    return (
        <div className={Styles.paghome}>

            <Header />

            <div className={Styles.carrosel} id='inicio' name='inicio'>

                <div className={Styles.sec11}>
                    <div style={{ color: 'black', fontWeight: 'bolder', }}>
                        <h1 className={Styles.typingeffect}>
                            <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>Embelezando</span> sonhos...
                        </h1>
                        <h1 className={Styles.typingeffect2}>
                            Estruturando <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>realidades</span>
                        </h1>
                    </div>
                    <h5 style={{ fontSize: 'x-large', color: 'white' }}>Com a Bellifica você torna-se um(a) profissional organizado(a)</h5>
                    <button className={Styles.buttonino} onClick={scrollToSection}>Conhecer planos</button>

                </div>

                <div className={Styles.sec12}>

                    <img
                        className={Styles.fundinroxo}
                        src={FundinRoxo}
                        style={{ transform: `translateY(${calculatePosition()}px)` }}
                    />

                    <Carousel className={Styles.profsscar} >
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof1} />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof2} />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof3} />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof4} />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof5} />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img className={Styles.profss} src={Prof6} />
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>

            {/* Sessão2 ==================================================================== */}
            <section className={Styles.sessão2}>


                <div className={Styles.imagensprof}>
                    <div data-aos="fade-right" className={Styles.imgles}></div>
                    <div className={Styles.imgldr}>
                        <h1>O que é a Bellifica?</h1>
                        <p>Somos uma startup dedicada a auxiliar microempreendedores no ramo da beleza a realizar seus sonhos de gerenciar seu próprio negócio e alcançar o crescimento desejado.</p>
                    </div>
                </div>

            </section>


            {/* Sessão3 ==================================================================== */}
            <section className={Styles.sessão3}>


                <h1 style={{color: 'black'}}>O que fazemos?</h1>



                <div className={Styles.Caixas}>
                    <div className={Styles.caixona1}>
                        <div data-aos="fade-right" className={Styles.caixaideia}>
                            <img src={imgideia}></img>
                            <p>Nossa ideia é que você consiga realmente aprender a enfrentar suas dificuldades em seu trabalho</p>
                        </div>
                        <div data-aos="fade-left" className={Styles.caixagestao}>
                            <img src={imggestao}></img>
                            <p>Ajudamos a precificar seus serviços, potencializando os lucros do negócio</p>
                        </div>
                    </div>

                    <div className={Styles.caixona2}>
                        <div data-aos="fade-right" className={Styles.caixacurso}>
                            <img src={imgcurso}></img>
                            <p>Recomendamos cursos e dicas para ajudar a melhorar seu serviço e que você consiga expandir seus serviços</p>
                        </div>
                        <div data-aos="fade-left" className={Styles.caixaauxilio}>
                            <img src={imgauxilio}></img>
                            <p>Auxiliamos você a como você pode deixar seu negocio mais rentável e atraente para atrair mais clientes</p>
                        </div>
                    </div>
                </div>

            </section>


            {/* Sessão4 ==================================================================== */}
            <section className={Styles.sessão4}>

                <div className={Styles.sessãocurso}>

                    <div className={Styles.quadro}>
                        <div className={Styles.quadrocursos}>
                            <h3>Cursos</h3>
                            <p>Daremos uma breve introdução sobre a área que você deseja incluir em seus serviços ou migrar
                            </p>
                            <p><br></br>Encaminharemos você à cursos de seu interesse para que você possa se especializar e colocar seus conhecimentos em prática.</p>

                            <button className={Styles.buttoninocursos} onClick={handleNavigateToCurso} >Conhecer cursos</button>
                        </div>

                    </div>

                </div>

            </section>


            {/* Sessão5 ==================================================================== */}

            <section className={Styles.sessão5}>
                <div className={Styles.comentarios}>
                    <div className={Styles.blabla}><h1>Comentários</h1></div>
                </div>

                <div className={Styles.campocoment}>

                    <button className={Styles.setaes} onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </button>

                    <div className={Styles.coment}>
                        <div className={Styles.blug} ref={carouselRef} style={{ transform: `translateX(${scrollX * 20}%)` }}>
                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>

                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>JOSÉ</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>MARIA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>

                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>SUELEN</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>MATHIAS</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>
                        </div>
                    </div>

                    <button className={Styles.setadr} onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>

                </div>

            </section >


            {/* Sessão6 ==================================================================== */}

            < section className={Styles.sessão6} id='planos' name='planos' ref={myRef} >

                <h1 className={Styles.titulo}>Nossos Planos</h1>
                <div className={Styles.caixaplanos}>

                    <div className={Styles.caixagratuito} data-aos="fade-up">
                        <div className={Styles.caixagratuitotitulo}>
                            <img src={Pupa} style={{ height: 50, width: 50 }} />
                            <h3>Pupa</h3>
                            <img src={Pupa2} style={{ height: 50, width: 50 }} />
                        </div>
                        <h4 style={{ color: 'black', textAlign: 'center', width: '80%' }}>Indicado para ajudar os profissionais que estão começando ou os que querem testar nossos serviços, oferecemos alguns recursos gratuitos:</h4>
                        <li>Cursos gratuitos</li>
                        <li>Dicas para seu negócio</li>
                        <li>Recomendação de cursos</li>

                        <h2 style={{ textDecoration: 'line-through', fontSize: '3vh' }}>R$ 19,90</h2>
                        <h4 style={{ color: '#673e99', fontSize: '5vh' }}>GRÁTIS</h4>

                    </div>
                    <div className={Styles.caixapremium} data-aos="fade-up">
                        <div className={Styles.caixapremiumtitulo}>
                            <img src={Borbo} style={{ height: 50, width: 50 }} />
                            <h3>Borboleta</h3>
                            <img src={Borbo2} style={{ height: 50, width: 50 }} />
                        </div>
                        <h4 style={{ color: 'black', textAlign: 'center', width: '80%' }}>Indicado para os profissionais que já atuam na área ou querem mais ajuda para se organizar oferecemos melhores recursos, dentre eles:</h4>
                        <li>Cursos premium</li>
                        <li>Chat-bot com IA</li>
                        <li>Recursos Plus desbloqueados</li>

                        <h2 style={{ textDecoration: 'line-through', fontSize: '3vh' }}>R$ 69,90</h2>
                        <h2 style={{ fontSize: '5vh' }}>R$ 49,<span style={{ fontSize: '0.5em', color: 'black' }}>90</span>/ mês</h2>

                    </div>



                </div>

            </section >

            <Footer />
        </div >
    )


}



export default Home;