/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var estAfficherMassage1 = 0;
var estAfficherMassage2 = 0;

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

    }
}
