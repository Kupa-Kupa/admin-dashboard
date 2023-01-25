let menuItems = document.querySelector(".side-bar-menus");

let home = document.querySelector(".home");

let profile = document.querySelector(".profile");

let messages = document.querySelector(".messages");

let history = document.querySelector(".history");

let tasks = document.querySelector(".tasks");

let communities = document.querySelector(".communities");

let settings = document.querySelector(".settings");

let support = document.querySelector(".support");

let privacy = document.querySelector(".privacy");


/*  change link colour on hashchange
    link: https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript
*/

window.addEventListener("hashchange", changeClickedColor);

function changeClickedColor(event) {
    if (window.location.href.indexOf("#home") !== -1) {
        home.classList.add("side-bar-clicked");
    } else {
        home.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#profile") !== -1) {
        profile.classList.add("side-bar-clicked");
    } else {
        profile.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#messages") !== -1) {
        messages.classList.add("side-bar-clicked");
    } else {
        messages.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#history") !== -1) {
        history.classList.add("side-bar-clicked");
    } else {
        history.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#tasks") !== -1) {
        tasks.classList.add("side-bar-clicked");
    } else {
        tasks.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#communities") !== -1) {
        communities.classList.add("side-bar-clicked");
    } else {
        communities.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#settings") !== -1) {
        settings.classList.add("side-bar-clicked");
    } else {
        settings.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#support") !== -1) {
        support.classList.add("side-bar-clicked");
    } else {
        support.classList.remove("side-bar-clicked");
    }

    if (window.location.href.indexOf("#privacy") !== -1) {
        privacy.classList.add("side-bar-clicked");
    } else {
        privacy.classList.remove("side-bar-clicked");
    }

}