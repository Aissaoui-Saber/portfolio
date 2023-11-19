import NavBar from "./Navbar";
import "./Project.scss";
import { useState } from "react";
import headerImage from "../assets/images/works/portfolio.png"
import vid1 from "../assets/projects/portfolio/out.mp4"


function Portfolio() {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const [lang, setLang] = useState(document.cookie.length == 0 ? "EN" : document.cookie.substring(9));
    return <section className="project">
        <NavBar changeLangTo={(data) => { setLang(data) }}></NavBar>
        <div className="project__info">
            <br></br>
            <br></br>
            <img className="project__info__image" src={headerImage}></img>
            <br></br>
            <br></br>
            <h1 className="project__info__title">PORTFOLIO</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB SITE" : "SITE WEB"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "This is my portfolio where you are now" : "Ceci est mon portfolio où vous êtes maintenant"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}
</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Web hosting</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
            <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Adobe XD ({lang === "EN" ? "Designing user interfaces" : "Conception d'interfaces utilisateur"})</li>
                <li>Adobe Photoshop ({lang === "EN" ? "Image editing" : "Retouche d'image"})</li>
                <li>Freepik.com ({lang === "EN" ? "Icons resource" : "Ressource d'icônes"})</li>
                <li>Hostinger.com ({lang === "EN" ? "Web hosting" : "Hébergement Web"})</li>
            </ul>
            <br></br>
        </div>
        <br></br>
        <br></br>
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Video</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
    </section>
}
export default Portfolio;