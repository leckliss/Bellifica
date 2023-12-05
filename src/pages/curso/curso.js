import { motion } from 'framer-motion'
import {useState, useEffect, useRef} from 'react'

import Styles from './Curso.module.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';

import blob from '../../assets/imgs/curso/mulher-estudando.png'
import senac from '../../assets/imgs/curso/logo-senac.png'
import financeiro from '../../assets/imgs/curso/financeiro.jpg'
import marketing from '../../assets/imgs/curso/marketing.jpg'
import estetica from '../../assets/imgs/curso/beleza-estetica.jpg'

const images = [financeiro, marketing, estetica]


function Curso() {

    const carousel = useRef();
    const[width, setWidth] = useState(0)

    useEffect(()=>{
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (

        <body className={Styles.pagcurso}>

            <Header />

            {/*parte de quem somos*/}

            <section className={Styles.banner}>

                <div className={Styles.caixaroxa}>
                    <div className={Styles.descricurso}>
                        <h1 className={Styles.titcurso}>Chegou a hora de desembaraçar a sua vida</h1>

                        <p className={Styles.textcurso}>Nesta seção contém cursos com parceiros que iremos oferecer para você bellificar mais ainda o seu empreendimento</p>
                    </div>

                    <img src={blob} alt='mulher estudando' className={Styles.imgbanner} />
                </div>

            </section>

            <section className={Styles.senac}>
                <img src={senac} alt='logo senac' className={Styles.logosenac} />
                <motion.div ref={carousel} className={Styles.carousel} whileTap={{cursor: "grabbing"}}>
                    <motion.div className={Styles.interno} drag="x" dragConstraints={{right: 0, left: -width}}>

                        {images.map(image=>(

                            <motion.div className={Styles.item} key={image}>
                                <img src={image} alt='texto alt' />
                            </motion.div>

                        ))}

                    </motion.div>
                </motion.div>
            </section>


            <Footer />
        </body>

    )
}


export default Curso;