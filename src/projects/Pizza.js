import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/pizza.png"
import img1 from "../assets/projects/pizza/image-054.jpg"
import img2 from "../assets/projects/pizza/image-055.jpg"
import img3 from "../assets/projects/pizza/image-056.jpg"
import img4 from "../assets/projects/pizza/image-057.jpg"
import img5 from "../assets/projects/pizza/image-058.jpg"
import img6 from "../assets/projects/pizza/image-059.jpg"
import img7 from "../assets/projects/pizza/image-060.jpg"
import img8 from "../assets/projects/pizza/image-063.png"
import img9 from "../assets/projects/pizza/image-064.jpg"
import img10 from "../assets/projects/pizza/image-065.jpg"
import img11 from "../assets/projects/pizza/image-066.png"
import img12 from "../assets/projects/pizza/image-067.jpg"
import img13 from "../assets/projects/pizza/image-068.png"
import img14 from "../assets/projects/pizza/image-069.jpg"
import img15 from "../assets/projects/pizza/image-070.png"
import img16 from "../assets/projects/pizza/image-071.png"
import img17 from "../assets/projects/pizza/image-072.jpg"
import img18 from "../assets/projects/pizza/image-073.jpg"
import img19 from "../assets/projects/pizza/image-074.jpg"
import img20 from "../assets/projects/pizza/image-075.jpg"
import { useState } from "react";
function Pizza() {
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
            <h1 className="project__info__title">PIZZA ORDERING SYSTEM</h1>
            <h3 className="project__info__type">{lang === "EN" ? "WEB APPLICATION" : "APPLICATION WEB"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's a web application for ordering pizza, it's composed in two parts, client side to pass orders and vendor side to receive orders" : "C'est une application web pour commander des pizzas, elle est composée de deux parties, côté client pour passer les commandes et côté vendeur pour recevoir les commandes"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>AJAX</li>
                <li>MySQL</li>
                <li>SQL</li>
                <li>PHP</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Adobe Dreamweaver ({lang === "EN" ? "Coding" : "Codage"})</li>
                <li>Adobe Photoshop ({lang === "EN" ? "Image editing" : "Retouche d'image"})</li>
                <li>Entreprise architect ({lang === "EN" ? "UML diagrams" : "Diagrammes UML"})</li>
                <li>PhpMyAdmin ({lang === "EN" ? "Creating and managing databases" : "Création et gestion de bases de données"})</li>
                <li>Microsoft IIS ({lang === "EN" ? "Web server" : "Serveur Web"})</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "FEATURES" : "FONCTIONNALITÉS"}</h4><hr></hr></div>
            <p>{lang === "EN" ? "As a client :" : "En tant que client :"}</p>
            <ul>
                <li>{lang === "EN" ? "Brows menu of pizza and drinks":"Parcourir le menu de pizzas et de boissons"}</li>
                <li>{lang === "EN" ? "Pass order and get printable bill":"Passez la commande et obtenez une facture imprimable"}</li>
                <li>{lang === "EN" ? "Check delivery availability and opening times":"Vérifier la disponibilité de livraison et les horaires d'ouverture"}</li>
                <li>{lang === "EN" ? "Contact the vendor":"Contacter le vendeur"}</li>
            </ul>
            <br></br>
            <p>{lang === "EN" ? "As a vendor :" : "En tant que vendeur :"}</p>
            <ul>
                <li>{lang === "EN" ? "Define delivery availability":"Définir la disponibilité de livraison"}</li>
                <li>{lang === "EN" ? "Define delivery cities":"Définir les villes de livraison"}</li>
                <li>{lang === "EN" ? "Create and modify menu components":"Créer et modifier des composants de menu"}</li>
                <li>{lang === "EN" ? "Receive orders and read details":"Recevoir les commandes et lire les détails"}</li>
                <li>{lang === "EN" ? "Search in oreders":"Rechercher dans les commandes"}</li>
                <li>{lang === "EN" ? "Read clients messages":"Lire les messages des clients"}</li>
                <li>{lang === "EN" ? "Read statistics":"Lire les statistiques"}</li>
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
        <img className="project__image" src={img13}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img14}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img15}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img16}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img17}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img18}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img19}></img>
        <br></br>
        <br></br>
        <img className="project__image" src={img20}></img>
        <br></br>
        <br></br>
    </section>
}
export default Pizza;