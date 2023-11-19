import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/Pistolero.png"
import vid1 from "../assets/projects/pistolero/video 1.mp4";
import { useState } from "react";

function Pistolero() {
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
            <h1 className="project__info__title">PISTOLERO</h1>
            <h3 className="project__info__type">{lang === "EN" ? "JAVAFX APPLICATION" : "APPLICATION JAVAFX"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a game i created with JavaFX" : "C'est un jeu que j'ai créé avec JavaFX"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>JAVAFX</li>
                <li>CSS</li>
                <li>XML</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Intellij IDEA ({lang === "EN" ? "Development" : "Développement"})</li>
                <li>Git & Github ({lang === "EN" ? "Version control" : "Contrôle de version"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Create new game by choosing number of bullets and demons":"Créez un nouveau jeu en choisissant le nombre de balles et de démons"}</li>
                <li>{lang === "EN" ? "Move the pistol in any direction using specefied keyboard keys":"Déplacez le pistolet dans n'importe quelle direction à l'aide des touches du clavier spécifiées"}</li>
                <li>{lang === "EN" ? "Shoot demons and kill them":"Tirez sur les démons et tuez-les"}</li>
                <li>{lang === "EN" ? "When male and female demons touches each other, a new demon born and the total number of demons increases by 1":"Lorsque les démons mâles et femelles se touchent, un nouveau démon naît et le nombre total de démons augmente de 1"}</li>
                <li>{lang === "EN" ? "If a demon touches the pistol the game is over":"Si un démon touche le pistolet, le jeu est terminé"}</li>
                <li>{lang === "EN" ? "Demons moves in random directions and they can't pass wood boxes":"Les démons se déplacent dans des directions aléatoires et ne peuvent pas dépasser les caisses en bois."}</li>
                <li>{lang === "EN" ? "Wood boxes are positioned randomly and differntly in each game":"Les caisses en bois sont positionnées de manière aléatoire et différente à chaque jeu"}</li>
                <li>{lang === "EN" ? "The player win the game when all demons are killed":"Le joueur gagne la partie lorsque tous les démons sont tués"}</li>
                <li>{lang === "EN" ? "The player can save and load the game":"Le joueur peut sauvegarder et charger le jeu"}</li>
                <li>{lang === "EN" ? "The player can reasign direction and fireing keys and adjust demons and postol speed":"Le joueur peut réaffecter la direction et les touches de tir et ajuster la vitesse des démons et du postolet"}</li>
            </ul>
        </div>
        <br></br>
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Video</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
    </section>
}
export default Pistolero;