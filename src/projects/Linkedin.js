import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/linkedin-downloader.png"
import vid1 from "../assets/projects/linkedin/video 1.mp4";
import vid2 from "../assets/projects/linkedin/video 2.mp4";
import vid3 from "../assets/projects/linkedin/video 3.mp4";
import { useState } from "react";

function Linkedin() {
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
            <h1 className="project__info__title">LINKEDIN VIDEO DOWNLOADER</h1>
            <h3 className="project__info__type">{lang === "EN" ? "GOOGLE CHROME EXTENSION & C# .NET APPLICATION":"EXTENSION GOOGLE CHROME & APPLICATION .NET C#"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a Google chrome extension i have made to download videos from linkedin learning website. It allows to download a course videos in just one click":"Il s'agit d'une extension Google Chrome que j'ai créée pour télécharger des vidéos à partir du site Web d'apprentissage LinkedIn. Elle permet de télécharger des vidéos de cours en un seul clic"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>JSON</li>
                <li>C#</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding the extension" : "Codage de l'extension"})</li>
                <li>Microsoft Visual Studio ({lang === "EN" ? "Coding C# apllication" : "Codage d'application C#"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>FEATURES</h4><hr></hr></div>
            <p>
            {lang === "EN" ? "Google Chrome extension :":"Extension Google Chrome :"}
            </p>
            <ul>
                <li>{lang === "EN" ? "Opens every video of selected course in new tab":"Ouvrir chaque vidéo du cours sélectionné dans un nouvel onglet"}</li>
                <li>{lang === "EN" ? "Get video link and title of every opens tab then close the tab":"Obtenir le lien de la vidéo et le titre de chaque onglet ouvert, puis fermez l'onglet"}</li>
                <li>{lang === "EN" ? "Generate all download links in JSON and copy it to clipboard":"Générer tous les liens de téléchargement en JSON et copiez-les dans le presse-papiers"}</li>
            </ul>
            <br></br>
            <p>
            {lang === "EN" ? "C# Application :":"Application C# :"}
            </p>
            <ul>
                <li>{lang === "EN" ? "Paste the JSON copied from the extension":"Collez le JSON copié depuis l'extension"}</li>
                <li>{lang === "EN" ? "Download all the links in structured folder":"Téléchargez tous les liens dans le dossier structuré"}</li>
            </ul>
        </div>
        <br></br>
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Videos</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
        <video controls={true} muted={true} className="project__image" src={vid2}></video>
        <br></br>
        <br></br>
        <video controls={true} muted={true} className="project__image" src={vid3}></video>
        <br></br>
        <br></br>
    </section>
}
export default Linkedin;