import { useState, useRef, useEffect } from "react";
import photoshop from "../assets/images/otherSkills/photoshop.png";
import illustrator1 from "../assets/images/otherSkills/illustrator 1.png";
import illustrator2 from "../assets/images/otherSkills/illustrator 2.png";
import illustrator3 from "../assets/images/otherSkills/illustrator 3.png";
import illustrator4 from "../assets/images/otherSkills/illustrator 4.png";
import illustrator5 from "../assets/images/otherSkills/illustrator 5.png";
import illustrator6 from "../assets/images/otherSkills/illustrator 6.png";
import xd1 from "../assets/images/otherSkills/xd/xd1.png";
import xd2 from "../assets/images/otherSkills/xd/xd2.png";
import xd3 from "../assets/images/otherSkills/xd/xd3.png";
import xd4 from "../assets/images/otherSkills/xd/xd4.png";
import xd5 from "../assets/images/otherSkills/xd/xd5.png";
import xd6 from "../assets/images/otherSkills/xd/xd6.png";
import xd7 from "../assets/images/otherSkills/xd/xd7.png";
import xd8 from "../assets/images/otherSkills/xd/xd8.png";
import xd9 from "../assets/images/otherSkills/xd/xd9.png";
import xd10 from "../assets/images/otherSkills/xd/xd10.png";
import xd11 from "../assets/images/otherSkills/xd/xd11.png";
import xd12 from "../assets/images/otherSkills/xd/xd12.png";
import xd13 from "../assets/images/otherSkills/xd/xd12.5.png";
import xd14 from "../assets/images/otherSkills/xd/xd13.png";
import xd15 from "../assets/images/otherSkills/xd/xd14.png";
import xd16 from "../assets/images/otherSkills/xd/xd15.png";
import xd17 from "../assets/images/otherSkills/xd/xd16.png";
import office from "../assets/images/otherSkills/office.png";

import film1 from "../assets/videos/film making/film (1).mp4"
import film2 from "../assets/videos/film making/film (2).mp4"
import film3 from "../assets/videos/film making/film (3).mp4"
import film4 from "../assets/videos/film making/film (4).mp4"

import hardware1 from "../assets/videos/hardware/hardware (1).mp4"
import hardware2 from "../assets/videos/hardware/hardware (2).mp4"
import hardware3 from "../assets/videos/hardware/hardware (3).mp4"
import hardware4 from "../assets/videos/hardware/hardware (4).mp4"
import hardware5 from "../assets/videos/hardware/hardware (5).mp4"
import language from "../language";
import "../sections/OtherSkills.scss";

function VideoScrollPlay({ src, className, style }) {
    const ref = useRef();
    return <video loop={true} preload="auto" ref={ref} autoPlay={false} muted={true} style={style} className={className} src={src} onMouseEnter={() => { ref.current.play() }} onMouseLeave={() => { ref.current.pause() }}></video>
}

function Slideshow({ images, initialImage }) {
    const [currentImage, setCurrentImage] = useState(initialImage);

    function changeCurrentImage(direction) {
        if (direction === ">") {
            if (currentImage < images.length) {
                setCurrentImage(currentImage + 1);
            }
        } else {
            if (currentImage > 0) {
                setCurrentImage(currentImage - 1);
            }
        }
    }
    return <div className="slideShow">
        <div className="slideShow__direction__left" onClick={() => changeCurrentImage("<")} style={currentImage === 0 ? { visibility: "hidden" } : { visibility: "visible" }}></div>
        <img className="slideShow__image" src={images[currentImage]}></img>
        <div className="slideShow__direction__right" onClick={() => changeCurrentImage(">")} style={currentImage === images.length - 1 ? { visibility: "hidden" } : { visibility: "visible" }}></div>
    </div>
}

function OtherSkills() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <div className="OSSection">
        <h1 className="OSSection__header">{language.getLanguage() === "EN" ? "Extra skills" : "Compétences supplémentaires"}</h1>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <img className="skillSection__presentation__photoshop" src={photoshop}></img>
                </div>
                <h1>Adobe Photoshop</h1>
                <p>{language.getLanguage() === "EN" ? "I use photoshop for editing and modify images" : "J'utilise Photoshop pour éditer et modifier des images"}</p>
            </div>
        </div>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <Slideshow images={[illustrator1, illustrator2, illustrator3, illustrator4, illustrator5, illustrator6]} initialImage={2}></Slideshow>
                </div>
                <h1>Adobe illustrator</h1>
                <p>{language.getLanguage() === "EN" ? "I use illustrator for creating illustrations and logo design" : "J'utilise Illustrator pour créer des illustrations et créer des logos"}</p>
            </div>
        </div>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <Slideshow images={[xd1, xd2, xd3, xd4, xd5, xd6, xd7, xd8, xd9, xd10, xd11, xd12, xd13, xd14, xd15, xd16, xd17]} initialImage={0}></Slideshow>
                </div>
                <h1>Adobe XD</h1>
                <p>{language.getLanguage() === "EN" ? "I can create user interfaces and prototypes for web and mobile applications" : "Je peux créer des interfaces utilisateur et des prototypes pour des applications web et mobiles"}</p>
            </div>
        </div>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <img className="skillSection__presentation__office" src={office}></img>
                </div>
                <h1>Microsoft Office</h1>
                <p>{language.getLanguage() === "EN" ? "I can use word for creating and editing documents, PowerPoint to create presentations and Excel for calculations sheets" : "Je peux utiliser Word pour créer et éditer des documents, PowerPoint pour créer des présentations et Excel pour les feuilles de calcul"}</p>
            </div>
        </div>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <div className="skillSection__presentation__filmMaking">
                        <VideoScrollPlay style={{ alignSelf: "end" }} className={"skillSection__presentation__filmMaking__video"} src={film1}></VideoScrollPlay>
                        <VideoScrollPlay className={"skillSection__presentation__filmMaking__video"} src={film2}></VideoScrollPlay>
                        <VideoScrollPlay style={{ alignSelf: "end" }} className={"skillSection__presentation__filmMaking__video"} src={film3}></VideoScrollPlay>
                        <VideoScrollPlay className={"skillSection__presentation__filmMaking__video"} src={film4}></VideoScrollPlay>
                    </div>
                </div>
                <h1>{language.getLanguage() === "EN" ? "Video editing and photography" : "Montage vidéo et photographie"}</h1>
                <p>{language.getLanguage() === "EN" ? "I do video editing and photography" : "Je fais du montage vidéo et de la photographie"}</p>
            </div>
        </div>
        <div className="skillSection">
            <div>
                <div className="skillSection__presentation">
                    <div className="skillSection__presentation__hardware">
                        <VideoScrollPlay style={{ gridArea: "vid1"}} className={"skillSection__presentation__hardware__video landscape"} src={hardware1}></VideoScrollPlay>
                        <VideoScrollPlay style={{ gridArea: "vid2"}} className={"skillSection__presentation__hardware__video portrait"} src={hardware3}></VideoScrollPlay>
                        <VideoScrollPlay style={{ gridArea: "vid3"}} className={"skillSection__presentation__hardware__video portrait"} src={hardware4}></VideoScrollPlay>
                        <VideoScrollPlay style={{ gridArea: "vid4"}} className={"skillSection__presentation__hardware__video portrait"} src={hardware5}></VideoScrollPlay>
                        <VideoScrollPlay style={{ gridArea: "vid5"}} className={"skillSection__presentation__hardware__video landscape"} src={hardware2}></VideoScrollPlay>
                    </div>
                </div>
                <h1>Hardware</h1>
                <p>{language.getLanguage() === "EN" ? "I master computer hardwares and i can detect and fix hardware issues, i can build desktop computers and install equipements" : "Je maîtrise le matériel informatique et je peux détecter et résoudre les problèmes matériels, je peux construire des ordinateurs de bureau et installer des équipements"}</p>
            </div>
        </div>
    </div>
}

export default OtherSkills;