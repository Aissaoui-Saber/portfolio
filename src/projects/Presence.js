import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/presence.png"
import img1 from "../assets/projects/presence/image 1.png"
import img2 from "../assets/projects/presence/image 2.png"
import img3 from "../assets/projects/presence/image 3.png"
import img4 from "../assets/projects/presence/image 4.png"
import img5 from "../assets/projects/presence/image 5.png"

import vid1 from "../assets/projects/presence/video 1.mp4";
import vid2 from "../assets/projects/presence/video 2.mp4";
import vid3 from "../assets/projects/presence/video 3.mp4";
import { useState } from "react";

function Presence() {
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
            <h1 className="project__info__title">PRESENCE</h1>
            <h3 className="project__info__type">{lang === "EN" ? "MOBILE APPLICATION" : "APPLICATION MOBILE"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a project for counting presence and absence of students in school restaurant" : "C'est un projet pour compter la présence et l'absence des élèves au restaurant scolaire"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>DART</li>
                <li>Flutter</li>
                <li>SQLite</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Android Studio ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>DB Browser for SQLite ({lang === "EN" ? "Reading SQLite databases" : "Lecture de bases de données SQLite"})</li>
                <li>Adobe XD ({lang === "EN" ? "Designing user interfaces" : "Conception d'interfaces utilisateur"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Add student informations to database" : "Ajouter les informations sur les étudiants à la base de données"}</li>
                <li>{lang === "EN" ? "Export students list to CSV file" : "Exporter la liste des étudiants vers un fichier CSV"}</li>
                <li>{lang === "EN" ? "Import students list from CSV file" : "Importer la liste des étudiants à partir d'un fichier CSV"}</li>
                <li>{lang === "EN" ? "Scan student barcode to count his presence" : "Scannez le code barre de l'élève pour compter sa présence"}</li>
                <li>{lang === "EN" ? "Show statistics of presence and absence at specefied day" : "Afficher les statistiques de présence et d'absence au jour spécifié"}</li>
                <li>{lang === "EN" ? "Export presence and absence list to CSV file" : "Exporter la liste de présence et d'absence vers un fichier CSV"}</li>
            </ul>
        </div>
        <br></br>
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Images</h1>
        <br></br>
        <img className="project__image" src={img1}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img2}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img3}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img4}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img5}></img>
        <br></br>
        <br></br>
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Videos</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
        <video controls={true} className="project__image" src={vid2}></video>
        <br></br>
        <br></br>
        <video controls={true} className="project__image" src={vid3}></video>
        <br></br>
        <br></br>
    </section>
}
export default Presence;