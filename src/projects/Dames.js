import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/dames.png"
import vid1 from "../assets/projects/dames/video 1.mp4";
import { useState } from "react";

function Dames() {
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
            <h1 className="project__info__title">CHECKERS GAME</h1>
            <h3 className="project__info__type">{lang === "EN" ? "C++ CONSOLE APPLICATION" : "APPLICATION CONSOLE C++"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a checkers game i created with c++ as console application":"C'est un jeu de dames que j'ai créé avec C++ comme application console"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>C++</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Microsoft Visual Studio ({lang === "EN" ? "Development" : "Développement"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Create new game by choosing the opponent (Human or Computer)":"Créez un nouveau jeu en choisissant l'adversaire (Humain ou Ordinateur)"}</li>
                <li>{lang === "EN" ? "Select the piece to move by typing the position":"Sélectionnez la pièce à déplacer en tapant la position"}</li>
                <li>{lang === "EN" ? "Suggest all moving possibilities of the selected piece to the player":"Proposer au joueur toutes les possibilités de déplacement de la pièce sélectionnée"}</li>
                <li>{lang === "EN" ? "the game ends when all of the pieces are dead of one of the players":"le jeu se termine lorsque toutes les pièces d'un des joueurs sont mortes"}</li>
                <li>{lang === "EN" ? "The player can undo the movement":"Le joueur peut annuler le mouvement"}</li>
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
export default Dames;