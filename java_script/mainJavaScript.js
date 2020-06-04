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
    var hauteur=el.querySelector(".nomEtImage").offsetHeight;
    switch (el.id) {
        case("massage1"):
            if (!estAfficherMassage1){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage1 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage1 = 0;
            }
            break;
        case("massage2"):
            if (!estAfficherMassage2){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage2 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage2 = 0;
            }
            break;
        case("massage3"):
            if (!estAfficherMassage3){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage3 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage3 = 0;
            }
            break;
        case("massage4"):
            if (!estAfficherMassage4){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage4 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage4 = 0;
            }
            break;
        case("massage5"):
            if (!estAfficherMassage5){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage5 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage5 = 0;
            }
            break;
        case("massage6"):
            if (!estAfficherMassage6){
                el.querySelector(".textCacher").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + hauteur+"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher_open";
                    el.querySelector(".textCacher_open").style.height=hauteur+"px";
                    el.querySelector(".textCacher_open").style.marginTop="-"+20+"px";
                }, 50);// on met un timer sinon le changement de css se fait plus vite que la transition

                estAfficherMassage6 = 1;
            }
            else{
                el.querySelector(".textCacher_open").className = "textCacher_before_open";
                el.querySelector(".textCacher_before_open").style.height=hauteur+"px";
                el.querySelector(".textCacher_before_open").style.marginTop="-" + (hauteur+20) +"px";
                setTimeout(function(){
                    el.querySelector(".textCacher_before_open").className = "textCacher";
                }, 200);
                estAfficherMassage6 = 0;
            }
            break;

    }
}
