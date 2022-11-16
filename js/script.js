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

let info_p_score = document.createElement("p");

info_p_score.setAttribute("id","main__info__p__score");
info_p.appendChild(info_p_score);

let info_p_best = document.createElement("p");

info_p_best.setAttribute("id","main__info__p__best");
info_p.appendChild(info_p_best);

const info_restart = document.createElement("a");

info_restart.setAttribute("id","main__info__restart");
info_restart.setAttribute("href","#");
info_restart.innerHTML = "Redémarrer";
info.appendChild(info_restart);

const game = document.createElement("div");

game.setAttribute("id","main__game");
main.appendChild(game);

const game_intermediate_base_circle = document.createElement("div");

game_intermediate_base_circle.setAttribute("id", "main__game__intermediate_base_circle");
game_intermediate_base_circle.style.animation = "rotate 7.2s linear infinite";
game.appendChild(game_intermediate_base_circle);

let score = 0
function updateRecord(score) {
    
}

AllCookies = document.cookie;
AllCookies = "record=" + score;

function getCookieValue() {
    let list = AllCookies.split("=");
    return list[1];
}

let record = getCookieValue();

info_p_score.innerHTML = "Score : " + score;
info_p_best.innerHTML = "Meilleur score : " + record;

for (let i = 0; i <= 5; i++) {
    const circle_base = document.createElement("div");

    circle_base.setAttribute("id","main__game__circle_base_" + i);
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
    game_intermediate_base_circle.appendChild(circle_base);

    const game_intermediate_base_circle_intermediate_inset_circle = document.createElement("div");

    game_intermediate_base_circle_intermediate_inset_circle.setAttribute("id", "main__game__intermediate_base_circle__intermediate_inset_circle");
    game_intermediate_base_circle_intermediate_inset_circle.style.animation = "rotate 14.4s linear reverse infinite";
    circle_base.appendChild(game_intermediate_base_circle_intermediate_inset_circle);

    for (let i = 0; i <= 5; i++) {
        const circle_inset = document.createElement("div");
        circle_inset.setAttribute("id","main__game__circle_base_" + i + "__circle_inset");
        circle_inset.style.height = 2/3 + "em";
        circle_inset.style.width = 2/3 + "em";
        circle_inset.style.backgroundColor = "white";
        circle_inset.style.position = "absolute";
        circle_inset.style.transform = "rotateZ(" + (i+1) * (360/6) +"deg) translateX(-1.2em)";
        circle_inset.style.borderRadius = "50%";
        game_intermediate_base_circle_intermediate_inset_circle.appendChild(circle_inset);
    }

}
