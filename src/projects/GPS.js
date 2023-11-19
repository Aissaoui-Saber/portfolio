import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/gps-tracker.png"
import vid1 from "../assets/projects/gps/video 1.mp4";
import vid2 from "../assets/projects/gps/video 2.mp4";
import vid3 from "../assets/projects/gps/video 3.mp4";
import { useState } from "react";

function GPS() {
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
            <h1 className="project__info__title">GPS TRACKER</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION & MOBILE APPLICATION" : "APPLICATION WEB & APPLICATION MOBILE"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a small project i created to experience websockets, gps coordinates and Leaflet map library. this application allows to track a mobile's position and show it on the map" : "C'est un petit projet que j'ai créé pour découvrir les websockets, les coordonnées GPS et la bibliothèque de cartes Leaflet. cette application permet de suivre la position d'un mobile et de l'afficher sur la carte"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Leaflet</li>
                <li>NodeJS</li>
                <li>Websockets</li>
                <li>Flutter</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Android Studio ({lang === "EN" ? "Coding mobile application" : "Codage d'application mobile"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>FEATURES</h4><hr></hr></div>
            <p>{lang === "EN" ? "Mobile Application" : "Application Mobile"}</p>
            <ul>
                <li>{lang === "EN" ? "Sending continually GPS coordinates to the server using Websockets" : "Envoi continu de coordonnées GPS au serveur à l'aide de Websockets"}</li>
            </ul>
            <p>{lang === "EN" ? "Web Application" : "Application Web"}</p>
            <ul>
                <li>{lang === "EN" ? "Receiving GPS coordinates and show them in Leaflet map" : "Recevoir les coordonnées GPS et les afficher sur la carte Leaflet"}</li>
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
export default GPS;