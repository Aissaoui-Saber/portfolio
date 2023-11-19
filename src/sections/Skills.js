import "../sections/Skills.scss";
import problemSolvingImage from "../assets/images/skills/problem_solving.png";
import uxDesignImage from "../assets/images/skills/ux_design.png";
import databaseImage from "../assets/images/skills/database.png";
import umlImage from "../assets/images/skills/uml.png";
import frontendImage from "../assets/images/skills/frontend.png";
import codeFixImage from "../assets/images/skills/codefix.png";
import webDevToolImage from "../assets/images/skills/webdevtool.png";
import backendImage from "../assets/images/skills/backend.png";
import mobileDevImage from "../assets/images/skills/mobileDev.png";
import language from "../language";
import programming from "../assets/images/about/programming.png";

import { Outlet, Link } from "react-router-dom";

function Programming({ lang }) {
    return <div className="programming">
        <div>
            <h1 className="programming__header">{lang === "EN" ? "Programming basics".toUpperCase() : "Bases de la programmation".toUpperCase()}</h1>
            <div className="programming__skills">
                <div className="programming__skills__algo">
                    <h3>{lang === "EN" ? "Algorithms and problem solving".toUpperCase() : "Algorithmes et résolution de problèmes".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "I write algorithms and programs that solve problems" : "J'écris des algorithmes et des programmes qui résolvent des problèmes"}</p>
                </div>
                <img className="programming__skills__image" src={programming}></img>
                <div className="programming__skills__ds">
                    <h3>{lang === "EN" ? "Data structures".toUpperCase() : "Structures de données".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "Knowledge of simple, complex data structures" : "Connaissance des structures de données simples et complexes"}</p>
                </div>
                <div className="programming__skills__oop">
                    <h3>{lang === "EN" ? "Object Oriented Programming".toUpperCase() : "Programmation orientée objet".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "Knowledge of OOP and programming in JAVA" : "Connaissance de la POO et de la programmation en JAVA"}</p>
                </div>
                <div className="programming__skills__debug">
                    <h3>{lang === "EN" ? "Debugging and detecting code issues".toUpperCase() : "Débogage et détection des problèmes de code".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "I understand errors, i debug and fix code issues and i search for solutions" : "Je comprends les erreurs, je débogue et corrige les problèmes de code et je recherche des solutions"}</p>
                </div>
                <div className="programming__skills__lang">
                    <h3>{lang === "EN" ? "Programming languages".toUpperCase() : "Langages de programmation".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "I Experienced different languages Pascal, C, C++, C#, Java, PHP, Python, JavaScript, Dart" : "J'ai expérimenté différents langages Pascal, C, C++, C#, Java, PHP, Python, JavaScript, Dart"}</p>
                </div>
            </div>
        </div>
    </div>
}

function Conception({ lang }) {
    return <div className="conception">
        <div>
            <h1 className="conception__header">{"Conception".toUpperCase()}</h1>
            <div className="conception__skills">
                <div className="conception__skills__skill">
                    <img src={umlImage}></img>
                    <h3>{lang === "EN" ? "UML diagrams".toUpperCase() : "Diagrames UML".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "I design UML diagrams (Class, Use case, Activity, Sequence) using Enterprise Architect" : "Je conçois des diagrammes UML (Classe, Cas d'utilisation, Activité, Séquence) à l'aide d'Enterprise Architect"}</p>
                </div>
                <div className="conception__skills__skill">
                    <img src={uxDesignImage}></img>
                    <h3>UI / UX DESIGN</h3>
                    <p>{lang === "EN" ? "I design user interfaces and prototypes using Adobe XD" : "Je conçois des interfaces utilisateur et des prototypes avec Adobe XD"}</p>
                </div>
                <div className="conception__skills__skill">
                    <img src={databaseImage}></img>
                    <h3>{lang === "EN" ? "Database conception and management".toUpperCase() : "Conception et gestion de bases de données".toUpperCase()}</h3>
                    <p>{lang === "EN" ? "I do the conception, creation and management of databases using MySQL Workbench, Writing SQL commands" : "Je fais la conception, la création et la gestion de bases de données à l'aide de MySQL Workbench, écriture de commandes SQL"}</p>
                </div>
            </div>
        </div>
    </div>
}

function Dev({ lang }) {
    return <div className="dev">
        <div>
            <h1 className="dev__header">{lang === "EN" ? "Front end, Back end and Mobile development".toUpperCase() : "Développement Front-end, Back-end et Mobile".toUpperCase()}</h1>
            <div className="dev__skills">
                <div className="dev__skills__skill">
                    <img src={frontendImage}></img>
                    <h3>FRONT END</h3>
                    <ul>
                        <li>{lang === "EN" ? "Writing HTML code and styling with SCSS" : "Écriture de code HTML et style avec SCSS"}</li>
                        <li>Responsive design</li>
                        <li>{lang === "EN" ? "Leaflet library" : "Bibliothèque Leaflet"}</li>
                        <li>{lang === "EN" ? "Knowledge of native Javascript" : "Connaissance du Javascript natif"}</li>
                        <li>{lang === "EN" ? "Creating REACT Applications" : "Création d'applications REACT"}</li>
                        <li>{lang === "EN" ? "Use of navigator development tool for inspecting code, network, requests, responses and responsive design" : "Utilisation de l'outil de développement de navigateur pour inspecter le code, le réseau, les requêtes, les réponses et responsive design"}</li>
                    </ul>
                </div>
                <div className="dev__skills__skill">
                    <img src={backendImage}></img>
                    <h3>BACK END</h3>
                    <ul>
                        <li>{lang === "EN" ? "Creating web server using NodeJS and Express" : "Création de serveur Web à l'aide de NodeJS et Express"}</li>
                        <li>{lang === "EN" ? "Connection with Database server" : "Connexion avec le serveur de base de données"}</li>
                        <li>{lang === "EN" ? "Create API and test it with Postman" : "Créer une API et la tester avec Postman"}</li>
                        <li>{lang === "EN" ? "Knowledge of HTTP and Websocket" : "Connaissance de HTTP et Websocket"}</li>
                        <li>{lang === "EN" ? "Web server hosting, configuration and deployment" : "Hébergement, configuration et déploiement de serveur Web"}</li>
                    </ul>
                </div>
                <div className="dev__skills__skill">
                    <img src={mobileDevImage}></img>
                    <h3>MOBILE</h3>
                    <ul>
                        <li>{lang === "EN" ? "Creating mobile cross platform application using Flutter" : "Création d'une application mobile multiplateforme avec Flutter"}</li>
                    </ul>
                </div>
            </div>
            <Link className="skills__extraSkills" to="/extra_skills">{lang === "EN" ? "EXTRA SKILLS":"COMPÉTENCES SUPPLÉMENTAIRES"}</Link>
        </div>
    </div>
}

function Skills() {
    return <section id="skills" className="skills">
        <h1>{language.getLanguage() === "EN" ? "Skills" : "Compétences"}</h1>
        <Programming lang={language.getLanguage()}></Programming>
        <Conception lang={language.getLanguage()}></Conception>
        <Dev lang={language.getLanguage()}></Dev>
        
    </section>
}
export default Skills;