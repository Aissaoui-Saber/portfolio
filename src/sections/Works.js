import "../sections/Works.scss";
import { Outlet, Link } from "react-router-dom";
import { useRef } from "react";
import prodabri from "../assets/images/works/prodabri.svg"
import portfolio from "../assets/images/works/portfolio.png"
import brinnng from "../assets/images/works/brinnng.png"
import championship from "../assets/images/works/championship.png"
import todo from "../assets/images/works/todo.png"
import presence from "../assets/images/works/presence.png"
import gpstracker from "../assets/images/works/gps-tracker.png"
import linkedIn from "../assets/images/works/linkedin-downloader.png"
import openCV from "../assets/images/works/opencv.png"
import PISTOLERO from "../assets/images/works/Pistolero.png"
import dames from "../assets/images/works/dames.png"
import robot from "../assets/images/works/robot.png"
import pizza from "../assets/images/works/pizza.png"
import rss from "../assets/images/works/mplrss.png"

import language from "../language";

function Works(){
    const prodabriRef = useRef();
    const portfolioRef = useRef();
    const brinnngRef = useRef();
    const championshipRef = useRef();
    const todoRef = useRef();
    const presenceRef = useRef();
    const gpstrackerRef = useRef();
    const linkedInRef = useRef();
    const openCVRef = useRef();
    const PISTOLERORef = useRef();
    const damesRef = useRef();
    const robotRef = useRef();
    const pizzaRef = useRef();
    const rssRef = useRef();
    return <section id="works" className="works">
        <h1>{language.getLanguage() === "EN" ? "Works" : "Traveaux"}</h1>
        <br></br>
        <br></br>
        <h3>2023</h3>
        <div className="works__projects">
            <div className="works__projects__project" onClick={()=>{prodabriRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#CB4444"}}>
                    <img src={prodabri}></img>
                </div>
                <span className="works__projects__project__title"><Link preventScrollReset={true} ref={prodabriRef} to={'/prodabri'}>PRODABRI</Link></span>
            </div>
            <div className="works__projects__project" onClick={()=>{portfolioRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#44CB9D"}}>
                    <img src={portfolio}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={portfolioRef} to="/portfolio">Portfolio</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <h3>2022</h3>
        <div className="works__projects">
            <div className="works__projects__project" onClick={()=>{brinnngRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#5944CB"}}>
                    <img src={brinnng}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={brinnngRef} to="/brinnng">BRINNNG!</Link></span>
            </div>
            <div className="works__projects__project" onClick={()=>{championshipRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#CBC744"}}>
                    <img src={championship}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={championshipRef} to="/championship">Championship scheduler</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <h3>2021</h3>
        <div className="works__projects">
            <div className="works__projects__project" onClick={()=>{presenceRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#70CB44"}}>
                    <img src={presence}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={presenceRef} to="/presence">Presence</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{todoRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#44CBBD"}}>
                    <img src={todo}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={todoRef} to="/todo">Advanced Todo list</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <h3>2020</h3>
        <div className="works__projects">
            <div className="works__projects__project"  onClick={()=>{gpstrackerRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#9900FF"}}>
                    <img src={gpstracker}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={gpstrackerRef} to="/gps_tracker">GPS Tracker</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{linkedInRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#FF0099"}}>
                    <img src={linkedIn}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={linkedInRef} to="/linkedIn_video_downloader">LinkedIn Learning Downloader</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{openCVRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#FFCC00"}}>
                    <img src={openCV}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={openCVRef} to="/image_processing_opencv">Image processing with OpenCV</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <h3>2019</h3>
        <div className="works__projects">
            <div className="works__projects__project"  onClick={()=>{PISTOLERORef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#FF5700"}}>
                    <img src={PISTOLERO}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={PISTOLERORef} to="/pistolero">PISTOLERO</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{damesRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#CCF3B5"}}>
                    <img src={dames}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={damesRef} to="/checkers">Checkers game</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{robotRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#3DA2FB"}}>
                    <img src={robot}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={robotRef} to="/line_following_robot">Line follower Robot</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <h3>2018</h3>
        <div className="works__projects">
            <div className="works__projects__project"  onClick={()=>{pizzaRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#427065"}}>
                    <img src={pizza}></img>
                </div>
                <span href="Pizza" className="works__projects__project__title"><Link ref={pizzaRef} to="/pizza">Pizza ordering system</Link></span>
            </div>
            <div className="works__projects__project"  onClick={()=>{rssRef.current.click()}}>
                <div className="works__projects__project__image" style={{backgroundColor: "#94855B"}}>
                    <img src={rss}></img>
                </div>
                <span className="works__projects__project__title"><Link ref={rssRef} to="/rss_reader">RSS Reader</Link></span>
            </div>
        </div>
        <br></br>
        <br></br>
        <Outlet></Outlet>
    </section>
}

export default Works;