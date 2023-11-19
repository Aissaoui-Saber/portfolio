import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/championship.png"

import vid1 from "../assets/projects/championship/video 1.mp4";
import { useState } from "react";

function Championship() {
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
            <h1 className="project__info__title">CHAMPIONSHIP SCHEDULER</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION" : "APPLICATION WEB"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a web application for scheduling football matches of a championship":"C'est une application web pour programmer les matchs de football d'un championnat"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>REACT</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Adobe XD ({lang === "EN" ? "Designing user interfaces" : "Conception d'interfaces utilisateur"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Creat list of teams":"Créer une liste d'équipes"}</li>
                <li>{lang === "EN" ? "Devid teams into groups of 3 or 4 depending on the total number of teams":"Divisez les équipes en groupes de 3 ou 4 selon le nombre total d'équipes"}</li>
                <li>{lang === "EN" ? "Shuffle randomly the repartition of teams in the groups":"Mélangez aléatoirement la répartition des équipes dans les groupes"}</li>
                <li>{lang === "EN" ? "Switch manually teams between groups":"Basculer manuellement les équipes entre les groupes"}</li>
                <li>{lang === "EN" ? "Ability to print the groups":"Possibilité d'imprimer les groupes"}</li>
                <li>{lang === "EN" ? "Generates all possible matches of each group (without date)":"Génère tous les matchs possibles de chaque groupe (sans date)"}</li>
                <li>{lang === "EN" ? "Ability to print generated matches":"Possibilité d'imprimer les matchs générées"}</li>
                <li>{lang === "EN" ? "Define date of begining of each phase in the championship and define the days of the week to play and the number of matches in each day":"Définir la date de début de chaque phase du championnat et définir les jours de la semaine à jouer et le nombre de matchs dans chaque journée"}</li>
                <li>{lang === "EN" ? "Generating scheduled matches list":"Générer la liste des matchs programmés"}</li>
                <li>{lang === "EN" ? "Ability to print generated scheduled matches":"Possibilité d'imprimer les matchs programmés générés"}</li>
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
export default Championship;