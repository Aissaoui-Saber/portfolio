import { useState } from "react";

export default function NavBar({ changeLangTo }) {
    const [lang, setLang] = useState(document.cookie.length == 0 ? "EN" : document.cookie.substring(9));

    function switchLanguage() {
        if (document.cookie.substring(9) === "FR") {
            document.cookie = "language=EN; path=/";
            setLang("EN");
            changeLangTo("EN");
        } else {
            document.cookie = "language=FR; path=/";
            setLang("FR");
            changeLangTo("FR");
        }
    }
    return <div className="navbar projectsNavBar">
        <div className="navbar__logo projectsNavBar__logo">
            <h1 className="navbar__logo__firstName">SABER</h1>
            <h1 className="navbar__logo__lastName">AISSAOUI</h1>
        </div>
        <div className="navbar__sections">
        </div>
        <input type="button" className="navbar__language" onClick={switchLanguage} value={lang === "FR" ? "EN" : "FR"}/>
    </div>
}