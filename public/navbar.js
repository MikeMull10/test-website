let nav = false;

function switchNav() {
    if (nav) openNav();
    else closeNav();
    nav = !nav;
}

function openNav() {
    document.getElementById("move").style.marginLeft = "260px";
    document.getElementById("nav").style.width = "240px";
    document.getElementById("n").className="fa-solid fa-arrow-left fa-2xl";
    // document.getElementById("n").style.transform="translateX(210px)";
    document.getElementById("n").style.left="210px";
}

function closeNav() {
    document.getElementById("move").style.marginLeft = "10px";
    document.getElementById("nav").style.width = "0";
    document.getElementById("n").className="fa-solid fa-arrow-right fa-2xl";
    // document.getElementById("n").style.transform="";
    document.getElementById("n").style.left="0px";
}