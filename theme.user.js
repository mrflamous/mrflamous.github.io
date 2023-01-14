// ==UserScript==
// @name         Top4 Theme
// @match        https://forum.training-server.com/*
// @grant        none
// ==/UserScript==

(function() {
    const customTheme = document.createElement("link");
    customTheme.rel = "stylesheet";
    customTheme.type = "text/css";
    customTheme.href = "https://mrflamous.github.io/forum.css"
    customTheme.media = "all";
    document.getElementsByTagName("head")[0].appendChild(customTheme);
})();
