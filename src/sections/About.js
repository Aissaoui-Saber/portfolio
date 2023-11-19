import "../sections/About.scss";
import aboutImage from "../assets/images/about/about.png";
import diploma from "../assets/images/about/diploma_10748339.png";
import nvidia from "../assets/images/about/nvidia_882731.png";
import azure from "../assets/images/about/azure900.png";
import language from "../language";
function About() {
    return (
        <section id="about" className="about">
            <h1>{language.getLanguage() === "FR" ? "A propos de moi" : "About me"}</h1>
            <br></br>
            <br></br>

            <div className="about__info">
                <div >
                    <i>{language.getLanguage() === "FR" ? "Je m'appelle Saber, je suis concepteur et développeur d'applications web et mobiles." : "I'm Saber, I'm web & mobile application designer and developer."}</i>
                    <br></br>
                    <br></br>
                    <i>{language.getLanguage() === "FR" ? "Je suis très passionné d'informatique depuis mon enfance, J'ai étudié l'informatique et j'ai obtenu un diplôme universitaire en ingénierie des systèmes d'information et des logiciels." : "I'm very passionate in computer science since my childhood, I studied computer science and i got a bachelor's degree in engineering of information systems and software."}</i>
                    <br></br>
                    <br></br>
                    <i>{language.getLanguage() === "FR" ? "J'ai des bonnes bases en programmation et plein d'autres compétences, je fais la conception et le développement du front-end et du back-end des sites web et applications mobiles." : "I have good foundations of programming and much more skills, i do the conception and developments of the front end and back end of web sites and mobile applications."}</i>
                    <br></br>
                    <br></br>
                    <i>{language.getLanguage() === "FR" ? "J'ai acquis des compétences et une expérience très importante en informatique par un apprentissage autodidacte notamment en programmation et développement d'applications en pratiquant et en créant des projets." : "I got a very important experience and skills in computer science by self taught learning specially in programming and software developments by practicing and creating projects."}</i>
                    <br></br>
                    <br></br>
                    <i>{language.getLanguage() === "FR" ? "J'ai un bon relationnel et une bonne communication, une bonne écoute, je peux faire du travail seul et en équipe.\nJe suis créatif, j'analyse et je me concentre sur les détails.\nJ'ai une bonne capacité d'adaptation et d'intégration rapide, je peux prendre des responsabilités et gérer des situations." : "I have good relational and communication, good listening, i can do single and team work.\nI'm Creative, i analyze and focus on details.\nI have a good capacity of adaptation and quick integration,  i can take responsibility and manage situations."}</i>
                    <br></br>
                    <br></br>
                    <i>{language.getLanguage() === "FR" ? "Mon objectif est de bénéficier de nouvelles expériences et d'améliorer mes compétences en programmation et développement d'applications et de participer à la réalisation de plus de projets." : "My goal is to benefit new experiences and improve my skills in programming and  applications development and to participate to the realization of more projects."}</i>
                    <br></br>
                    <br></br>
                </div>
                <img src={aboutImage}></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h1>{language.getLanguage() === "FR" ? "Diplômes et certifications" : "Diplomas and certifications"}</h1>
            <div className="about__diploma">
                <div className="about__diploma__card">
                    <img src={diploma}></img>
                    <h3>{language.getLanguage() === "FR" ? "Licence en ingénierie des systèmes d'information et des logiciels":"Bachelor's degree in engineering of information systems and software"}</h3>
                </div>
                <div className="about__diploma__card">
                    <img src={nvidia}></img>
                    <h3>{language.getLanguage() === "FR" ? "Nvidia Fondamentaux du Deep Learning":"Nvidia Fundamentals of Deep Learning"}</h3>
                </div>
                <div className="about__diploma__card">
                    <img src={azure}></img>
                    <h3>{language.getLanguage() === "FR" ? "Fondamentaux de Microsoft Azure":"Microsoft Azure Fundamentals"}<br/>AZ-900</h3>
                </div>
            </div>
            <br></br>
            <br></br>
            <h1>{language.getLanguage() === "FR" ? "Langues" : "Languages"}</h1>
            <br></br>
            <br></br>

            <div className="about__languages">
                <div className="about__languages__lang">
                    <h3>{language.getLanguage() === "FR" ? "Français":"French"}</h3>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div></div>
                </div>
                <div className="about__languages__lang">
                    <h3>{language.getLanguage() === "FR" ? "Anglais":"English"}</h3>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="about__languages__lang">
                    <h3>{language.getLanguage() === "FR" ? "Arabe":"Arabic"}</h3>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                    <div className="fill"></div>
                </div>
            </div>
            <br></br>
            <br></br>

        </section>
    )
}

export default About;