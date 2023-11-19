import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/robot.png"
import vid1 from "../assets/projects/robot/video 1.mp4";
import vid2 from "../assets/projects/robot/video 2.mp4";
import vid3 from "../assets/projects/robot/video 3.mp4";

import { useState } from "react";
function Robot() {
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
            <h1 className="project__info__title">LINE FOLLOWING ROBOT</h1>
            <h3 className="project__info__type">LEGO MINDSTORMS EV3</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a project i have done with friends in the university of Paris of a robot (LEGO MINDSTORMS EV3) which follows a line using color sensor":"C'est un projet que j'ai réalisé avec des amis à l'université de Paris d'un robot (LEGO MINDSTORMS EV3) qui suit une ligne grâce à un capteur de couleur"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>JAVA</li>
                <li>JAVA {lang === "EN" ? "for" : "pour"} LEGO MINDSTORMS EV3</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Oracle Netbeans ({lang === "EN" ? "Coding" : "Codage"})</li>
            </ul>
            <br></br>
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
export default Robot;