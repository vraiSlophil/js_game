// =============================================================================== //
//   _                  _          __ __   _             ___   _   _         _     //
//  | |  ___   _ _    _| |  _ _   |  V  | (_)  ___  ___ |  _| | | (_)  ___  | |__  //
// _| | / ._) | | |  / . | | | |  | |V| | | | <_-< <_-< | |_  | | | | / / ° |   /  //
// \__/ \___> \___/  \___| \___/  |_| |_| |_| /__/ /__/ |___| |_| |_| \_\_. |_\_\  //
//                                                                                 //
// =============================================================================== //
// 
// Projet créée par Nathan Ouder, Nathan Lefebvre et Martin Baroukel.
//

// Création de la page.

const body = document.getElementsByTagName("body");

const header = document.createElement("header");

header.setAttribute("id","header");
body[0].appendChild(header);

const header_content = document.createElement("div");

header_content.setAttribute("id","header__content");
header.appendChild(header_content);

const header_content_icon = document.createElement("img");

header_content_icon.setAttribute("id","header__content__icon");
header_content_icon.setAttribute("src","img/icon.png");
header_content_icon.setAttribute("alt","logo");
header_content.appendChild(header_content_icon);

const header_content_title = document.createElement("div");

header_content_title.setAttribute("id","header__content__title");
header_content_title.innerHTML = "Jeu du MissClick";
header_content.appendChild(header_content_title);

const main = document.createElement("main");

main.setAttribute("id","main");
body[0].appendChild(main);

const info = document.createElement("div");

info.setAttribute("id","main__info");
main.appendChild(info);

const info_p = document.createElement("div");

info_p.setAttribute("id","main__info__p");
info.appendChild(info_p);

const info_description = document.createElement("p");

info_description.setAttribute("id","main__info__description");
info_description.innerHTML = "Le but du jeu est simple :<br>Cliquez sur le plus de cercles blancs et rouges possibles sans cilquer à coté des cercles rouges sinon c'est perdu ! Les cercles sur lesquels vous cliquez disparaitrons et vous gagnerez un point de score. Quand il n'y a plus de cercle, vous passez au niveau suivant !";
info.appendChild(info_description);

let info_p_level = document.createElement("p");

info_p_level.setAttribute("id","main__info__p__level");
info_p.appendChild(info_p_level);

let info_p_score = document.createElement("p");

info_p_score.setAttribute("id","main__info__p__score");
info_p.appendChild(info_p_score);

let info_p_best = document.createElement("p");

info_p_best.setAttribute("id","main__info__p__best");
info_p.appendChild(info_p_best);

const info_restart = document.createElement("div");

info_restart.setAttribute("id","main__info__restart");
info_restart.setAttribute("onclick","restartGame()");
info_restart.innerHTML = "Redémarrer";
info.appendChild(info_restart);

const game = document.createElement("div");

game.setAttribute("id","main__game");
game.setAttribute("onclick","restartGame()");
main.appendChild(game);

const game_intermediate_base_circle = document.createElement("div");

game_intermediate_base_circle.setAttribute("id", "main__game__intermediate_base_circle");
game.appendChild(game_intermediate_base_circle);

// Création des variables et fonctions qui vont faire fonctionner le site.

let score = 0;
let record = 0;
let level = 1;

function printScore(score) {
    info_p_score.innerHTML = "Score : " + score;
}

function printBestScore(bestScore) {
    info_p_best.innerHTML = "Meilleur score : " + bestScore;
}

function printLevel(level) {
    info_p_level.innerHTML = "Difficulté : " + level;
}

function updateRecord(score) {
    if(score > record) {
        record = score;
        printBestScore(record);
    }
}

printScore(score);
printBestScore(record);
printLevel(level);

// Création des cercles.

function setupCircles(d) {
    for (let i = 0; i <= 5; i++) {
        const circle_base = document.createElement("div");

        game_intermediate_base_circle.style.animation = "rotate " + 28.8/d + "s linear infinite";

        circle_base.setAttribute("id","main__game__circle_base_" + i);
        circle_base.onclick=addScore;
        circle_base.style.height = "4em";
        circle_base.style.width = "4em";
        circle_base.style.backgroundColor = "red";
        circle_base.style.position = "absolute";
        circle_base.style.transform = "rotateZ(" + (i+1) * (360/6) +"deg) translateX(-12em)";
        circle_base.style.display = "flex";
        circle_base.style.justifyContent = "center";
        circle_base.style.alignItems = "center";
        circle_base.style.overflow = "hidden";
        circle_base.style.borderRadius = "50%";
        circle_base.style.zIndex = 8;
        circle_base.style.pointerEvents = "auto";
        circle_base.style.cursor = "pointer";
        game_intermediate_base_circle.appendChild(circle_base);

        const game_intermediate_base_circle_intermediate_inset_circle = document.createElement("div");

        game_intermediate_base_circle_intermediate_inset_circle.setAttribute("id", "main__game__intermediate_base_circle__intermediate_inset_circle");
        game_intermediate_base_circle_intermediate_inset_circle.style.animation = "rotate " + 14.4/d + "s linear reverse infinite";
        circle_base.appendChild(game_intermediate_base_circle_intermediate_inset_circle);

        for (let i = 0; i < 3; i++) {
            const circle_inset = document.createElement("div");
            circle_inset.setAttribute("id","main__game__circle_base_" + i + "__circle_inset");
            circle_inset.onclick=addScore;
            circle_inset.style.height = 4/3 + "em";
            circle_inset.style.width = 4/3 + "em";
            circle_inset.style.backgroundColor = "white";
            circle_inset.style.position = "absolute";
            circle_inset.style.transform = "rotateZ(" + (i+1) * (360/3) +"deg) translateX(-1.2em)";
            circle_inset.style.borderRadius = "50%";
            circle_inset.style.zIndex = 10;
            circle_inset.style.pointerEvents = "auto";
            circle_inset.style.cursor = "pointer";
            game_intermediate_base_circle_intermediate_inset_circle.appendChild(circle_inset);
        }

    }
}

setupCircles(1);

function newCircle(dif){
    if (game_intermediate_base_circle.children.length==0 && dif!==0){
        dif++;
        d=dif;
        setupCircles(d);
        level = dif;
        printLevel(level);
    }  
    if (dif == 0 ) {
        dif = 1;
        setupCircles(dif);
        level = dif;
        printLevel(level);
    }
}

function addScore(e) {
    x = e.target;
    e.stopPropagation();
    x.remove();
    score++;
    updateRecord(score);
    newCircle(level);
    printScore(score);
}

function restartGame(){
    var child = game_intermediate_base_circle.lastElementChild; 
    while (child) {
        game_intermediate_base_circle.removeChild(child);
        child = game_intermediate_base_circle.lastElementChild;
    }
    score = 0;
    level = 0;
    printScore(score);
    printBestScore(record);
    printLevel(level);
    newCircle(level);
}