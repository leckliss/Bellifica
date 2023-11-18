import Styles from './Section1.module.css'
import Header from '../../components/header/index'


function Section1(){
    
    return(
        <section className= {Styles.sessão1}>
            <Header/>

            <div className={Styles.slide}>
                <h1>
                 Embelezando Sonhos, Estruturando Realidades.
                </h1>
            </div>
            
        </section>
    )
}

export default Section1

