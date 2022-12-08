// Creation des variables //
let buttonStart = document.querySelector("#start");
let buttonStop = document.querySelector("#stop");
let buttonReset = document.querySelector("#reset");
let sp = document.getElementsByTagName("span");
let outputms = document.querySelector("#ms");
let outputs = document.querySelector("#s");
let outputm = document.querySelector("#m");
let outputh = document.querySelector("#h");
let interval;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;

/**
 * Appelle la fonction "update_chrono" chaque 100ms.
 */
function start() {
    interval = setInterval(update_chrono, 100);
    buttonStart.setAttribute("disabled", "true");
}

/**
 * Incremente les valeurs ms, s, m, et h et les affiche
 * Désactive le bouton start
 */
function update_chrono() {
    ms = ms + 1;
    if (ms == 10) {
        ms = 0;
        s = s + 1;
    }

    if (s == 60) {
        s = 0;
        m = m + 1;
    }

    if (m == 60) {
        m = 0;
        h = h + 1;
    }

    outputh.innerHTML=h+" h";
    outputm.innerHTML=m+" min";
    outputs.innerHTML=s+" s";
    outputms.innerHTML=ms+" ms";
}

/**
 * Arrête le traîtement de setInterval
 * Réactive le bouton start
 */
function stop() {
    clearInterval(interval);
    buttonStart.removeAttribute("disabled");
}

/**
 * Remet les valeurs de ms, s, m et h à 0
 */

function reset() {
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    // buttonStart.removeAttribute("disabled");
    outputh.innerHTML=h+" h";
    outputm.innerHTML=m+" min";
    outputs.innerHTML=s+" s";
    outputms.innerHTML=ms+" ms";
}