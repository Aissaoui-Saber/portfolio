import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/brinnng.png"
import img1 from "../assets/projects/brinnng/image 1.jpg"
import img2 from "../assets/projects/brinnng/image 2.jpg"
import img3 from "../assets/projects/brinnng/image 3.jpg"
import img4 from "../assets/projects/brinnng/image 4.jpg"
import img5 from "../assets/projects/brinnng/image 5.jpg"
import img6 from "../assets/projects/brinnng/image 6.jpg"
import img7 from "../assets/projects/brinnng/image 7.jpg"
import img8 from "../assets/projects/brinnng/image 8.png"
import img9 from "../assets/projects/brinnng/image 9.png"
import img10 from "../assets/projects/brinnng/image 10.png"
import img11 from "../assets/projects/brinnng/image 11.png"
import img12 from "../assets/projects/brinnng/image 12.png"

import vid1 from "../assets/projects/brinnng/video 1.mp4";
import vid2 from "../assets/projects/brinnng/video 2.mp4";
import vid3 from "../assets/projects/brinnng/video 3.mp4";
import vid4 from "../assets/projects/brinnng/video 4.mp4";
import vid5 from "../assets/projects/brinnng/video 5.mp4";
import vid6 from "../assets/projects/brinnng/video 6.mp4";
import vid7 from "../assets/projects/brinnng/video 7.mp4";
import { useState } from "react";

function Brinnng() {
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
            <h1 className="project__info__title">BRINNNG!</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION & MOBILE APPLICATION" : "APPLICATION WEB & APPLICATION MOBILE"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a part of a project, this part consists of mobile application developed to collect informations and pictures about food products in order to create a database of products then it will be used for the rest part of the project, and web application for checking and validating collected products" : "C'est une partie d'un projet, cette partie se compose d'une application mobile développée pour collecter des informations et des images sur les produits alimentaires afin de créer une base de données de produits puis elle sera utilisée pour le reste du projet, et d'une application web pour vérifier et valider les produits collectés"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>DART</li>
                <li>Flutter</li>
                <li>SQLite</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JSON</li>
                <li>NodeJS</li>
                <li>Web API</li>
                <li>MySQL</li>
                <li>SQL</li>
                <li>Web Hosting</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Visual Studio Code ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Android Studio ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>DB Browser for SQLite ({lang === "EN" ? "Reading SQLite databases" : "Lecture de bases de données SQLite"})</li>
                <li>Postman ({lang === "EN" ? "API Testing" : "Tests API"})</li>
                <li>Entreprise Architect ({lang === "EN" ? "UML diagrams" : "Diagrammes UML"})</li>
                <li>MySQL Workbench ({lang === "EN" ? "Creating and managing databases" : "Création et gestion de bases de données"})</li>
                <li>Hostinger.com ({lang === "EN" ? "Web hosting" : "Hébergement Web"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <p>{lang === "EN" ? "Mobile Application" : "Application Mobile"}</p>
            <ul>
                <li>{lang === "EN" ? "Create username at the first use of the application" : "Créer un nom d'utilisateur lors de la première utilisation de l'application"}</li>
                <li>{lang === "EN" ? "Fill informations about the product" : "Remplissez les informations sur le produit"}</li>
                <li>{lang === "EN" ? "Take pictures of the product or import them from local storage" : "Prenez des photos du produit ou importez-les depuis le stockage local"}</li>
                <li>{lang === "EN" ? "Save draft data to local SQLite database" : "Enregistrer les données brouillon dans la base de données SQLite locale"}</li>
                <li>{lang === "EN" ? "The user can edit or delete draft data before upload the product's data to the server" : "L'utilisateur peut modifier ou supprimer les brouillons de données avant de télécharger les données du produit sur le serveur"}</li>
                <li>{lang === "EN" ? "Upload draft data manually to the server when the user is connected to internet" : "Téléchargez manuellement les brouillons de données sur le serveur lorsque l'utilisateur est connecté à Internet"}</li>
                <li>{lang === "EN" ? "The user can update products list form server to see all the collected products including others user's collected products" : "L'utilisateur peut mettre à jour la liste de produits depuisle serveur pour voir tous les produits collectés, y compris les produits collectés par d'autres utilisateurs."}</li>
                <li>{lang === "EN" ? "The user can't collect a product that's exists before in the database" : "L'utilisateur ne peut pas collecter un produit qui existe auparavant dans la base de données"}</li>
            </ul>
            <br></br>
            <p>{lang === "EN" ? "Web Application" : "Application Web"}</p>
            <ul>
                <li>{lang === "EN" ? "Show the list of collected products and the username of the collector":"Afficher la liste des produits collectés et le nom d'utilisateur du collecteur"}</li>
                <li>{lang === "EN" ? "Show details of each product and edit the informations if they are not correct":"Afficher les détails de chaque produit et modifier les informations si elles ne sont pas correctes"}</li>
                <li>{lang === "EN" ? "Validate the product and mark it as treated if the informations and images are good":"Valider le produit et le marquer comme traité si les informations et images sont bonnes"}</li>
                <li>{lang === "EN" ? "Show two lists of products, Treated list and untreated list":"Afficher deux listes de produits, liste traitée et liste non traitée"}</li>
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
        <img className="project__image" src={img6}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img7}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img8}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img9}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img10}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img11}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img12}></img>
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
export default Brinnng;