import NavBar from "./Navbar";
import "./Project.scss";

import headerImage from "../assets/images/works/opencv.png"
import img1 from "../assets/projects/opencv/image 1.png"
import img2 from "../assets/projects/opencv/image 2.png"
import img3 from "../assets/projects/opencv/image 3.png"
import img4 from "../assets/projects/opencv/image 4.png"
import img5 from "../assets/projects/opencv/image 5.png"
import img6 from "../assets/projects/opencv/image 6.png"
import img7 from "../assets/projects/opencv/image 7.png"
import img8 from "../assets/projects/opencv/image 8.png"
import img9 from "../assets/projects/opencv/image 9.png"

import vid1 from "../assets/projects/opencv/video 1.mp4";
import { useState } from "react";

function Opencv() {
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
            <h1 className="project__info__title">IMGE PROCESSING WITH OpenCV</h1>
            <h3 className="project__info__type">{lang === "EN" ? "C++ CONSOLE APPLICATION" : "APPLICATION CONSOLE C++"}</h3>
            <br></br>
            <br></br>
            <div className="project__info__topicTitle"><h4>DESCRIPTION</h4><hr></hr></div>
            <p>{lang === "EN" ? "It's an educational project of machine learning which consist of develop an image processing program (detection of free/occupied parking spaces, detection of mask-wearing for COVID-19) using OpenCV and C++ by writhing special algorithms":"Il s'agit d'un projet pédagogique de machine learning qui consiste à développer un programme de traitement d'images (détection de places de parking libres/occupées, détection du port de masque pour le COVID-19) en utilisant OpenCV et C++ en faisant tourner des algorithmes spéciaux"}</p>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED LANGUAGES, FRAMEWORKS & TECHNIQUES" : "LANGAGES, FRAMEWORKS ET TECHNIQUES UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>C++</li>
                <li>OpenCV</li>
            </ul>
            <br></br>
            <div className="project__info__topicTitle"><h4>{lang === "EN" ? "USED SOFTWARES & TOOLS" : "LOGICIELS ET OUTILS UTILISÉS"}</h4><hr></hr></div>
            <ul>
                <li>Microsoft Windows ({lang === "EN" ? "Operating system" : "Système d'exploitation"})</li>
                <li>Microsoft Visual Studio ({lang === "EN" ? "Coding" : "Codage"})</li>
            </ul>
            <br></br>
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
        <h1 style={{ fontSize: "4vh", color: "#DFDFDF", marginLeft: "4vh" }}>Video</h1>
        <br></br>
        <video controls={true} className="project__image" src={vid1}></video>
        <br></br>
        <br></br>
    </section>
}
export default Opencv;