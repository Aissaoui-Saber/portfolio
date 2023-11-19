import "../sections/Hero.scss"
import heroImage from "../assets/images/Hero/hero_image.png"
import linesImage from "../assets/images/Hero/lines.png";
import { useEffect, useRef, useState } from "react";
import language from "../language";



function NavBar({setLanguage}) {
    const [lang, setLang] = useState(language.getLanguage());

    function switchLanguage(){
        if (document.cookie.substring(9) === "FR"){
            document.cookie = "language=EN; path=/";
            setLang("EN");
            setLanguage("EN");
        }else{
            document.cookie = "language=FR; path=/";
            setLang("FR");
            setLanguage("FR");
        }
    }
    return <div className="navbar">
        <div className="navbar__logo">
            <h1 className="navbar__logo__firstName">SABER</h1>
            <h1 className="navbar__logo__lastName">AISSAOUI</h1>
        </div>
        <div className="navbar__sections">
            <a href="#about">{lang==="FR" ? "A propos" : "About"}</a>
            <a href="#skills">{lang==="FR" ? "Compétences" : "Skills"}</a>
            <a href="#works">{lang==="FR" ? "Traveaux" : "Works"}</a>
            <a href="#contact">{lang==="FR" ? "Contacte" : "Contact"}</a>
        </div>
        <input type="button" className="navbar__language" onClick={switchLanguage} value={lang === "FR" ? "EN" : "FR"}/>
    </div>
}




function Hero({setLanguage}) {
    const aboutRef = useRef();
    const [lang, setLang] = useState(language.getLanguage());
    function modifyLanguage(data){
        setLang(data);
        setLanguage(data);
    }
    return (
        <section className="hero">
            <NavBar setLanguage={modifyLanguage}></NavBar>
            <div className="hero__body">
                <img className="hero__body__image" src={heroImage}></img>
                <div className="hero__body__text">
                    <h1 className="hero__body__text__hi">{lang==="EN" ? "Hi, I'm Saber" : "Salut, Je suis Saber"}</h1>
                    <h2 className="hero__body__text__im">{lang==="EN" ? "I'm web & mobile applications developer" : "Je suis développeur  d'applications web & mobile"}</h2>
                    <a href="#about" ref={aboutRef} style={{display: "none"}}></a>
                    <label className="hero__body__text__about" onClick={()=>{aboutRef.current.click()}}>{lang==="EN" ? "ABOUT ME" : "A PROPOS"}</label>
                </div>
            </div>
            <img className="hero__lines" src={linesImage}></img>
        </section>
    )
}

export default Hero;