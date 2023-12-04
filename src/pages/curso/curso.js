import Styles from './Curso.module.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';

import blob from '../../assets/imgs/curso/mulher-estudando.png'

function Curso() {
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
            <Footer />
        </body>

    )
}

export default Curso;