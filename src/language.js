function detectUserLanguage() {
    let lang = navigator.languages && navigator.languages[0] || // Chrome / Firefox
        navigator.language ||   // All browsers
        navigator.userLanguage; // IE <= 10
    lang = lang?.substring(0, 2).toUpperCase();
    if (lang === "EN" || lang === "FR") {
        return lang;
    } else {
        return "EN";
    }
}

function defineLanguage() {
    if (document.cookie.length === 0) {
        document.cookie = "language=" + detectUserLanguage() + "; path=/";
    }
}

function getLanguage(){
    return document.cookie.length == 0 ? "EN" : document.cookie.substring(9);
}

export default {defineLanguage, getLanguage};