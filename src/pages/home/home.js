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

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import img1coment from '../../assets/imgs/home/Ellipse 46.png';




function Home() {
    

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

    return (
        <div className={Styles.paghome}>

            <Header />

            <div className={Styles.espaco}>
                <section className={Styles.sessão1} id='inicio' name='inicio' style={{ backgroundImage: backgrounds[backgroundIndex].image, backgroundSize: 'cover' }}>
                    <div className={Styles.cobertura}>
                        <div className={`${Styles.slide} typing-effect`}>
                            <h1 style={{ color: backgrounds[backgroundIndex].color, width: '20%', height:'20vh' }}>
                                {text}
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
            {/* Sessão2 ==================================================================== */}
            <section className={Styles.sessão2}>


                <div className={Styles.imagensprof}>
                    <div data-aos="fade-right" className={Styles.imgles}></div>
                    <div data-aos="fade-left" className={Styles.imgldr}>
                        <h1>O que é a Bellifica?</h1>
                        <p>Somos uma startup dedicada a auxiliar microempreendedores no ramo da beleza a realizar seus sonhos de gerenciar seu próprio negócio e alcançar o crescimento desejado.</p>
                    </div>
                </div>

            </section>


            {/* Sessão3 ==================================================================== */}
            <section className= {Styles.sessão3}>
           
                <div className={Styles.seH1}><h1>O que oferecemos?</h1></div>



                <div className={Styles.Caixas}>
                    <div className={Styles.caixona1}>
                        <div className={Styles.caixaideia}>
                            <img src={imgideia}></img>
                            <p>Nossa ideia é que você consiga realmente aprender a enfrentar suas dificuldades em seu trabalho</p>
                        </div>
                        <div className={Styles.caixagestao}>
                            <img src={imggestao}></img>
                            <p>Ajudamos a precificar seus serviços, potencializando os lucros do negócio</p>
                        </div>
                    </div>

                    <div className={Styles.caixona2}>
                        <div className={Styles.caixacurso}>
                            <img src={imgcurso}></img>
                            <p>Recomendamos cursos e dicas para ajudar a melhorar seu serviço e que você consiga expandir seus serviços</p>
                        </div>
                        <div className={Styles.caixaauxilio}>
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
                        </div>
                    </div>

                    <div className={Styles.carrosselcurso}>
                        <motion.div className={Styles.carrossel} whileTap={{ cursor: "grabbing" }}>
                            <motion.div className={Styles.inner} drag="x"
                                dragConstraints={{ right: 0, left: - width }}>

                                <img src={imgcurso1} alt="Curso 1"></img>
                                <img src={imgcurso2} alt="Curso 2"></img>
                                <img src={imgcurso3} alt="Curso 3"></img>
                                <img src={imgcurso4} alt="Curso 4"></img>
                                <img src={imgcurso5} alt="Curso 5"></img>
                                <img src={imgcurso6} alt="Curso 6"></img>


                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* Sessão5 ==================================================================== */}

            <section className={Styles.sessão5}>
                <div className={Styles.comentarios}>
                    <div className={Styles.blabla}><h1>Comentários</h1></div>
                </div>

                <div className={Styles.campocoment}>
                    <motion.div className={Styles.coment} whileTap={{ cursor: "grabbing" }}>
                        <motion.div className={Styles.blug} drag="x"
                            dragConstraints={{ right: 1, left: -width }}>


                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>

                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>

                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>

                            <div className={Styles.Caixacoment}>
                                <div className={Styles.foto}></div>
                                <h1>ANA</h1>
                                <p>A plataforma me ajudou a ver minha empresa com outros olhos, hoje consigo me planejar com futuros serviços.</p>
                            </div>

                        </motion.div>

                    </motion.div>
                </div>


            </section>


            {/* Sessão6 ==================================================================== */}

            <section className={Styles.sessão6} id='planos' name='planos'>

                <div className={Styles.titulo}><h1>Nossos Planos</h1></div>
                <div className={Styles.caixaplanos}>

                    <div className={Styles.caixagratuito}>
                        <h3>Pupa</h3>

                        <li>Para ajudar os profissionais que estão começando ou os que querem testar nossos serviços, oferecemos alguns recursos gratuitos:</li>
                        <li>Cursos</li>
                        <li>Guia de cursos presenciais</li>
                        <li>Consultoria para ajudar você a entrar nos trilhos e retirar todas suas duvidas para você crescer.</li>

                        <h2>R$ 0,00</h2>

                    </div>
                    <div className={Styles.caixapremium}>
                        <h3>Borboleta</h3>

                        <li>E para os profissionais que já estão na area ou querem mais ajuda para se organizar oferecemos melhores recursos, dentre eles:</li>
                        <li>Serviço de agendamento automatizado</li>
                        <li>Cursos premium</li>
                        <li>Consultoria premium</li>
                        <li>Recursos extra</li>

                        <h2>R$ 49,99</h2>

                    </div>



                </div>

            </section>

            <Footer />
        </div>
    )


}



export default Home;