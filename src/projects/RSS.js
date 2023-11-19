import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/mplrss.png"
import vid1 from "../assets/projects/rss/video 1.mp4";

import { useState } from "react";
function RSS() {
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
            <h1 className="project__info__title">RSS READER</h1>
            <h3 className="project__info__type">{lang === "EN" ? "MOBILE APPLICATION" : "APPLICATION MOBILE"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's an android application for downloading and reading RSS documents" : "C'est une application Android pour télécharger et lire des documents RSS"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>JAVA</li>
                <li>SQL</li>
                <li>SQLite</li>
                <li>XML</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Android Studio ({lang === "EN" ? "Development" : "Développement"})</li>
                <li>DB Browser for SQLite ({lang === "EN" ? "Reading SQLite databases" : "Lecture de bases de données SQLite"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Type the RSS document link to download":"Tapez le lien du document RSS à télécharger"}</li>
                <li>{lang === "EN" ? "Downland the RSS document, Parse the XML file and store data into SQLite database":"Téléchargez le document RSS, analysez le fichier XML et stockez les données dans la base de données SQLite"}</li>
                <li>{lang === "EN" ? "Display RSS document feeds for reading":"Afficher les flux de documents RSS pour la lecture"}</li>
                <li>{lang === "EN" ? "Add and remove feeds to favorites":"Ajouter et supprimer des flux aux favoris"}</li>
                <li>{lang === "EN" ? "Search by keyword":"Recherche par mots-clés"}</li>
                <li>{lang === "EN" ? "Remove documents manually and automatically after 30 days from download date":"Supprimez les documents manuellement et automatiquement 30 jours après la date de téléchargement"}</li>
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
export default RSS;