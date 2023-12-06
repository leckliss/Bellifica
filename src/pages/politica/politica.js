import Header from "../../components/header";
import Footer from "../../components/footer";
import Style from "./politica.module.css";

function Politica() {
    return (
        <div className={Style.pagsobre}>
            <Header />
            <section className={Style.politica_corpo}>
                <h1 className={Style.politica_titulo}>Política de Privacidade</h1>
                <br />
                <br />
                <div className={Style.descricoes_text}>
                    <p className={Style.coleta_info}><span className={Style.destaque_politica}>Coleta de Informações Pessoais:</span> Em determinadas circunstâncias, a Equipe Bellifica pode coletar informações pessoais dos usuários, como nome, endereço de e-mail, país e data de nascimento. Esses dados são coletados com o intuito de aprimorar nossos serviços e proporcionar uma experiência personalizada para cada usuário.</p>
                    <br />
                    <p className={Style.coleta_info}><span className={Style.destaque_politica}>Utilização de Cookies:</span> Nossa plataforma utiliza cookies para melhorar a navegação e personalizar o conteúdo apresentado aos usuários. Esses cookies são automaticamente coletados durante a navegação, porém é possível desativá-los nas configurações do navegador.</p>
                    <br />
                    <p className={Style.coleta_info}><span className={Style.destaque_politica}>Compartilhamento de informações:</span> As informações coletadas dos usuários não serão divulgadas ou compartilhadas com terceiros, exceto em casos determinados por ordem judicial ou relacionados à segurança do usuário e da plataforma.</p>
                    <br />
                    <p className={Style.coleta_info}><span className={Style.destaque_politica}>Medidas de Segurança:</span> Implementamos medidas de segurança para proteger as informações dos usuários, embora não nos responsabilizemos por possíveis violações de segurança.Ao utilizar nossos serviços, o usuário concorda com as políticas de privacidade aqui descritas. Em caso de dúvidas ou sugestões, entre em contato conosco.</p>
                    <br />
                    <br />
                    <p className={Style.agradecimento_politica}>Atenciosamente, Equipe Bellifica</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Politica;