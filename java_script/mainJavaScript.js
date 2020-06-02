/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var btn = document.querySelector('.boutton');
var desc = document.querySelector('.textCacher');

btn.onclick = function () {
    desc.classList.toggle('textCacher_open');
}