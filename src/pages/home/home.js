import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Styles from './home.module.css';


import imgideia from '../../assets/imgs/home/caixaideia.png';
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
import {useState, useEffect, useRef} from 'react';

import img1coment from '../../assets/imgs/home/Ellipse 46.png';




function Home () {
    const carrossel = useRef();
    const [width,setWidth] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWhidth,carrossel.current?.offsetWidth)
        setWidth (carrossel.current?.scrollWhidth - carrossel.current?.offsetWidth)
    },[])

    const coment = useRef();
    
    useEffect(() => {
        console.log(coment.current?.scrollWhidth,coment.current?.offsetWidth)
        setWidth (coment.current?.scrollWhidth - coment.current?.offsetWidth)
    },[])

    return (

        <>
          <Header/>


            {/* Sessão1 ==================================================================== */}
            <section className= {Styles.sessão1}>

                <div className={Styles.slide}>
                    <h1>
                    Embelezando Sonhos, Estruturando Realidades.
                    </h1>
                </div>
            
            </section>
            
             {/* Sessão2 ==================================================================== */}
            <section className= {Styles.sessão2}>
           

                <div  className={Styles.imagensprof}>
                    <div data-aos="fade-right" className={Styles.imgles}></div>
                    <div data-aos="fade-left"className={Styles.imgldr}></div>
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
            <section className= {Styles.sessão4}>

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
                        <motion.div className={Styles.carrossel} whileTap={{cursor: "grabbing"}}>
                            <motion.div className={Styles.inner} drag= "x"
                            dragConstraints = {{right:0, left: - width}}>
                                
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
                    <motion.div className={Styles.coment} whileTap={{cursor: "grabbing"}}>
                        <motion.div className={Styles.blug} drag= "x"
                        dragConstraints = {{right:1, left: -width}}>

                        
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

            <section className={Styles.sessão6}>

                <div className={Styles.titulo}><h1>Nossos Planos</h1></div>
                <div className={Styles.caixaplanos}>

                    <div className={Styles.caixagratuito}>
                        <h3>Gratuito</h3>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>

                        <h2>R$ 0,00</h2>
                        
                    </div>
                    <div className={Styles.caixapremium}>
                        <h3>Premium</h3>
                        
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>
                        <p>-Lorem Ipsum been induLorem</p>


                        <h2>R$ 49,99</h2>
                        
                    </div>



                </div>

            </section>

            <Footer/>
        </>
    )



}

export default Home;