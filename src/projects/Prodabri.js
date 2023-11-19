import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/prodabri.svg"

import vid1 from "../assets/projects/prodabri/video 1.mp4";
import vid2 from "../assets/projects/prodabri/video 2.mp4";
import vid3 from "../assets/projects/prodabri/video 3.mp4";
import vid4 from "../assets/projects/prodabri/video 4.mp4";
import vid5 from "../assets/projects/prodabri/video 5.mp4";
import vid6 from "../assets/projects/prodabri/video 6.mp4";
import vid7 from "../assets/projects/prodabri/video 7.mp4";
import { useState } from "react";

function Prodabri() {
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
            <h1 className="project__info__title">PRODABRI</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION & MOBILE APPLICATION" : "APPLICATION WEB & APPLICATION MOBILE"}</h3>
            <br></br>
            <br></br>
            <h3 style={{ color: "white", fontSize: "2vh", fontWeight: "400", backgroundColor: "orange", display: "inline-block", padding: "0.5vh 2vh", borderRadius: "15px" }}>{lang === "EN" ? "Currently in development" : "En cour de developement"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "PRODABRI is a numeric platform dedicated to producers and to newest investors, it allows to users to publish their products and services, and to make demands of goods and services" : "PRODABRI est une plateforme numérique dédiée aux producteurs et aux nouveaux investisseurs, elle permet aux utilisateurs de publier leurs produits et services, et de formuler des demandes de biens et services"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <p>{lang === "EN" ? "Currently used :": "Actuellement utilisé :"}</p>
            <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>JSON</li>
                <li>REACT</li>
                <li>MySQL</li>
                <li>SQL</li>
                <li>React Leaflet</li>
            </ul>
            <br></br>
            <p>{lang === "EN" ? "Will be used :" : "Sera utilisé :"}</p>
            <ul>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Websockets</li>
                <li>Web API</li>
                <li>Web Hosting</li>
                <li>Flutter</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Git & Github ({lang === "EN" ? "Version control" : "Contrôle de version"})</li>
                <li>Freepik.com ({lang === "EN" ? "Icons resource" : "Ressource d'icônes"})</li>
                <li>Adobe Illustrator ({lang === "EN" ? "Designing logo" : "Conception de logo"})</li>
                <li>Adobe XD ({lang === "EN" ? "Designing user interfaces" : "Conception d'interfaces utilisateur"})</li>
                <li>MySQL Workbench ({lang === "EN" ? "Creating and managing databases" : "Création et gestion de bases de données"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <p>{lang === "EN" ? "CURRENTLY IN DEVELOPMENT !" : "EN COUR DE DEVELOPEMENT !"}</p>
        </div>
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
        <video controls={true} className="project__image" src={vid4}></video>
        <br></br>
        <br></br>
        <video controls={true} className="project__image" src={vid5}></video>
        <br></br>
        <br></br>
        <video controls={true} className="project__image" src={vid6}></video>
        <br></br>
        <br></br>
        <video controls={true} className="project__image" src={vid7}></video>
        <br></br>
        <br></br>
    </section>
}
export default Prodabri;