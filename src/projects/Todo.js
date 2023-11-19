import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/todo.png"
import img1 from "../assets/projects/todo/image 1.png"
import img2 from "../assets/projects/todo/image 2.png"
import img3 from "../assets/projects/todo/image 3.png"
import img4 from "../assets/projects/todo/image 4.png"

import vid1 from "../assets/projects/todo/video 1.mp4";
import { useState } from "react";

function Todo() {
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
            <h1 className="project__info__title">ADVANCED TODO LIST</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION" : "APPLICATION WEB"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a web application to write todo lists as a tree" : "C'est une application Web pour écrire des listes de tâches sous forme d'arborescence"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>XML</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <ul>
                <li>{lang === "EN" ? "Create a todo list":"Créer une liste de tâches"}</li>
                <li>{lang === "EN" ? "Create main task and add subtasks to it":"Créer une tâche principale et y ajouter des sous-tâches"}</li>
                <li>{lang === "EN" ? "Edit and remove tasks and subtasks":"Modifier et supprimer des tâches et des sous-tâches"}</li>
                <li>{lang === "EN" ? "Check and uncheck tasks and respect the hierarchy of tasks":"Cocher et décocher les tâches et respecter la hiérarchie des tâches"}</li>
                <li>{lang === "EN" ? "Tasks are stored in XML file using NodeJS":"Les tâches sont stockées dans un fichier XML à l'aide de NodeJS"}</li>
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
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Video</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
    </section>
}
export default Todo;