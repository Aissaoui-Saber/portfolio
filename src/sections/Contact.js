import "./Contact.scss";
import tikTok from "../assets/images/contact/tik-tok.png";
import youtube from "../assets/images/contact/youtube.png";
import linkedin from "../assets/images/contact/linkedin.png";
import github from "../assets/images/contact/github-mark-white.png";
import language from "../language";
function Contact() {
    return <section id="contact" className="contact">
        <div className="contact__body">
            <h3>{language.getLanguage() === "EN" ? "Contact me".toUpperCase() : "Contacter moi".toUpperCase()}</h3>
            <p>saber96aissaoui@gmail.com</p>
            <br></br>
            <div className="contact__body__social">
                <a href="https://github.com/Aissaoui-Saber" target="_blank"><img src={github} width={40} style={{backgroundColor: "black", borderRadius: "50%"}}/></a>
                <a href="https://www.linkedin.com/in/saber-aissaoui-5aa64a170" target="_blank"><img src={linkedin} width={40} /></a>
                <a href="https://www.youtube.com/channel/UC4-lRf62DRYQdoJPr2VC7dg" target="_blank"><img src={youtube} width={40} /></a>
                <a href="https://www.tiktok.com/@a3dsm2011" target="_blank"><img src={tikTok} width={40} /></a>
            </div>
        </div>
    </section>
}
export default Contact;