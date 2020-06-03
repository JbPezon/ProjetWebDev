/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var estAfficherMassage1 = 0;
var estAfficherMassage2 = 0;
var estAfficherMassage3 = 0;
var estAfficherMassage4 = 0;
var estAfficherMassage5 = 0;
var estAfficherMassage6 = 0;

function afficheDescription(el) {
    switch (el.id) {
        case("massage1"):
            if (!estAfficherMassage1){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage1 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage1 = 0;
            }
            break;
        case("massage2"):
            if (!estAfficherMassage2){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage2 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage2 = 0;
            }
            break;
        case("massage3"):
            if (!estAfficherMassage3){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage3 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage3 = 0;
            }
            break;
        case("massage4"):
            if (!estAfficherMassage4){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage4 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage4 = 0;
            }
            break;
        case("massage5"):
            if (!estAfficherMassage5){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage5 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage5 = 0;
            }
            break;
        case("massage6"):
            if (!estAfficherMassage6){
                el.querySelector(".textCacher").className = "textCacher_open";
                estAfficherMassage6 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher";
                estAfficherMassage6 = 0;
            }
            break;

    }
}
