import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Styles from './home.module.css';

function Home() {
    return (
        <>
            <Header />
            <section className={Styles.sessão1}>


                <div className={Styles.slide}>
                    <h1>
                        Embelezando Sonhos, Estruturando Realidades.
                    </h1>
                </div>

            </section>

            <section className={Styles.sessão2}>


                <div className={Styles.slide}>
                    <h1>
                        Embelezando Sonhos, Estruturando Realidades.
                    </h1>
                </div>

            </section>
            <Footer/>
        </>
    )
}

export default Home;