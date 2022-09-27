function mathInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("mathinfo");
    info.style.display = "block";
}

function englishInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("englishinfo");
    info.style.display = "block";
}

function scienceInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("scienceinfo");
    info.style.display = "block";
}

function historyInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("historyinfo");
    info.style.display = "block";
}

function computerScienceInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("computerscienceinfo");
    info.style.display = "block";
}

function worldLanguageInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    info = document.getElementById("worldlanguageinfo");
    info.style.display = "block";
}

function resetInfo() {
    allInfo = document.getElementsByClassName("info");
    for (var i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }
}

window.onload = function() {
    document.location.hash = "";
}

function reload(){
    window.location.reload();
} 
