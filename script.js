var emberek = [];
var beoltva = [];

function Ember(nev,kor,beteg,dolg,idosotthon,voltmar){
    this.nev = nev;
    this.kor = kor;
    this.beteg = beteg;
    this.dolg = dolg;
    this.idosotthon = idosotthon;
    this.voltmar = voltmar;
}

function felvesz(){
    var nev = document.getElementById("nev").value;
    var ev = parseInt(document.getElementById("ev").value);
    var beteg  = document.getElementById("vkb").checked;
    var dolg = document.getElementById("eid").checked;
    var idosotthon =document.getElementById("il").checked;
    var voltmar = document.getElementById("kemav").checked;
    var jo = true;
    function kor(){
        return 2021-ev
    }
    if(nev==""){
        alert("Üres a név mező..")
        jo = false;
    }
    if(ev<1900 || ev>2021){
        alert("Add meg a valódi életkorod..")
        jo = false;
    }

    if (jo){
        var ember = new Ember(nev,kor(),beteg,dolg,idosotthon,voltmar);
        emberek.push(ember);
        kiir();
    }
}

function kat(ember){
    if(ember.voltmar){
        return 5;
    }
    if(ember.kor >= 65 && ember.beteg || ember.dolg){
        return 1;
    }
    if(ember.idosotthon && ember.beteg){
        return 2;
    }
    if(ember.idosotthon || ember.dolg){
        return 3;
    }
    if(ember.ev<65 && ember.beteg){
        return 4;
    }
    return 5;
}

function kiir(){
    var ki=document.getElementById("ki");
    ki.innerHTML="";
    var tablazat = document.createElement("table")

    for (let i=0;i<emberek.length;i++){
        var embi = emberek[i];
         var sor = document.createElement("tr")
         var cella = document.createElement("td")
         cella.innerHTML= embi.nev;
         sor.appendChild(cella);
         var cella = document.createElement("td")
         cella.innerHTML= "kor: "+embi.kor;
         sor.appendChild(cella);
         var cella = document.createElement("td")
         cella.innerHTML ="kategória: "+kat(embi);
         sor.appendChild(cella);
         sor.onclick=function(){atrak(i)};
         tablazat.appendChild(sor)
    }
    ki.appendChild(tablazat);
}
function atrak(id){
    beoltott = emberek[id];
    beoltva.push(beoltott);
    emberek.splice(id,1);
    kiir();
    elkiir()
}
function elkiir(){
    var ki2=document.getElementById("ki2");
    ki2.innerHTML="";
    var tablazat = document.createElement("table")

    for (let i=0;i<beoltva.length;i++){
        var embi = beoltva[i];
         var sor = document.createElement("tr")
         var cella = document.createElement("td")
         cella.innerHTML= embi.nev;
         sor.appendChild(cella);
         var cella = document.createElement("td")
         cella.innerHTML= "kor: "+embi.kor;
         sor.appendChild(cella);
         var cella = document.createElement("td")
         cella.innerHTML ="kat: "+kat(embi);
         sor.appendChild(cella);
         tablazat.appendChild(sor)
    }
    ki2.appendChild(tablazat);
}