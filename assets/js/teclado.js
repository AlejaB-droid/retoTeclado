// Variables h
let casilla = document.getElementById("casilla");

//Variables teclas
let tecEsc = document.getElementById("esc");
let tecUno = document.getElementById("uno");
let tecDos= document.getElementById("dos");
let tecTres = document.getElementById("tres");
let tecCuatro = document.getElementById("cuatro");
let tecCinco = document.getElementById("cinco");
let tecSeis = document.getElementById("seis");
let tecSiete = document.getElementById("siete");
let tecOcho = document.getElementById("ocho");
let tecNueve= document.getElementById("nueve");
let tecCero = document.getElementById("cero");
let tecDel = document.getElementById("del");
let tecTab = document.getElementById("tab");
let tecQ = document.getElementById("Q");
let tecW = document.getElementById("W");
let tecE = document.getElementById("E");
let tecR = document.getElementById("R");
let tecT = document.getElementById("T");
let tecY = document.getElementById("Y");
let tecU = document.getElementById("U");
let tecI = document.getElementById("I");
let tecO = document.getElementById("O");
let tecP = document.getElementById("P");
let tecAsk1 = document.getElementById("ask1");
let tecAsk2 = document.getElementById("ask2");
let tecEnter = document.getElementById("enter");
let tecBloqMay = document.getElementById("bloqMay");
let tecA = document.getElementById("A");
let tecS = document.getElementById("S");
let tecD = document.getElementById("D");
let tecF = document.getElementById("F");
let tecG = document.getElementById("G");
let tecH = document.getElementById("H");
let tecJ = document.getElementById("J");
let tecK = document.getElementById("K");
let tecL = document.getElementById("L");
let tecÑ = document.getElementById("Ñ");
let tecComilla = document.getElementById("comilla");
let tecSuma = document.getElementById("suma");
let tecMay = document.getElementById("may");
let tecZ = document.getElementById("Z");
let tecX = document.getElementById("X");
let tecC = document.getElementById("C");
let tecV = document.getElementById("V");
let tecB = document.getElementById("B");
let tecN = document.getElementById("N");
let tecM = document.getElementById("M");
let tecComa = document.getElementById("coma");
let tecPunto = document.getElementById("punto");
let tecGuion = document.getElementById("guion");
let tecCorchete1 = document.getElementById("corchete1");
let tecCorchete2 = document.getElementById("corchete2");
let tecEspacio = document.getElementById("espacio");


// Variables temp
let texto = "";


//Funciones letras
const tecAf = () =>{
    texto += "a";
    casilla.innerHTML = texto;
};

const tecBf = () =>{
    texto += "b";
    casilla.innerHTML = texto;
};

const tecCf = () =>{
    texto += "c";
    casilla.innerHTML = texto;
};

const tecDf = () =>{
    texto += "d";
    casilla.innerHTML = texto;
};

const tecEf = () =>{
    texto += "e";
    casilla.innerHTML = texto;
};

const tecFf = () =>{
    texto += "f";
    casilla.innerHTML = texto;
};

const tecGf = () =>{
    texto += "g";
    casilla.innerHTML = texto;
};

const tecHf = () => {
    texto += "h";
    casilla.innerHTML = texto;
};

const tecIf = () =>{
    texto += "i";
    casilla.innerHTML = texto;
};

const tecJf = () =>{
    texto += "j";
    casilla.innerHTML = texto;
};

const tecKf = () =>{
    texto += "k";
    casilla.innerHTML = texto;
};

const tecLf = () =>{
    texto += "l";
    casilla.innerHTML = texto;
};

const tecMf = () => {
    texto += "m";
    casilla.innerHTML = texto;
};

const tecNf = () => {
    texto += "n";
    casilla.innerHTML = texto;
};

const tecÑf = () =>{
    texto += "ñ";
    casilla.innerHTML = texto;
};

const tecOf =() =>{
    texto += "o";
    casilla.innerHTML = texto;
};

const tecPf = () =>{
    texto += "p";
    casilla.innerHTML = texto;
};

const tecQf =() =>{
    texto += "q";
    casilla.innerHTML = texto;
};

const tecRf = () =>{
    texto += "r";
    casilla.innerHTML = texto;
};

const tecSf = () =>{
    texto += "s";
    casilla.innerHTML = texto;
};

const tecTf = () => {
    texto += "t";
    casilla.innerHTML = texto;
};

const tecUf = () => {
    texto += "u";
    casilla.innerHTML = texto;
};

const tecVf = () =>{
    texto += "v";
    casilla.innerHTML = texto;
};

const tecWf = () =>{
    texto += "w";
    casilla.innerHTML = texto;
};

const tecXf = () =>{
    texto += "x";
    casilla.innerHTML = texto;
};

const tecYf = () =>{
    texto += "y";
    casilla.innerHTML = texto;
};

const tecZf = () =>{
    texto += "z";
    casilla.innerHTML = texto;
};


//Funciones números
const tecCerof = () =>{
    texto += "0";
    casilla.innerHTML = texto;
};

const tecUnof = () =>{
    texto += "1";
    casilla.innerHTML = texto;
};
const tecDosf = () =>{
    texto += "2";
    casilla.innerHTML = texto;
};

const tecTresf = () =>{
    texto += "3";
    casilla.innerHTML = texto;
}; 

const tecCuatrof = () =>{
    texto += "4";
    casilla.innerHTML = texto;
};

const tecCincof = () =>{
    texto += "5";
    casilla.innerHTML = texto;
};

const tecSeisf = () =>{
    texto += "6";
    casilla.innerHTML = texto;
};

const tecSietef = () =>{
    texto += "7";
    casilla.innerHTML = texto;
};

const tecOchof = () =>{
    texto += "8";
    casilla.innerHTML = texto;
};

const tecNuevef = () =>{
    texto += "9";
    casilla.innerHTML = texto;
};


//Funciones otros caracteres
const tecDelf = () =>{
    texto = texto.substring(0, texto.length -1);
    casilla.innerHTML = texto;
};

const tecEnterf = () =>{
    texto += "\n";
    casilla.innerHTML = texto;
    console.log(texto);
};

const tecEspaciof = () =>{
    texto += " ";
    casilla.innerHTML = texto;
};

const tecAsk1f = () =>{
    texto += "?";
    casilla.innerHTML = texto;
};

const tecAsk2f = () =>{
    texto += "¿";
    casilla.innerHTML = texto;
};

const tecComaf = () =>{
    texto += ",";
    casilla.innerHTML = texto;
};

const tecComillaf = () =>{
    texto += "'";
    casilla.innerHTML = texto;
};

const tecCorchete1f = () =>{
    texto += "{";
    casilla.innerHTML = texto;
};

const tecCorchete2f = () =>{
    texto += "}";
    casilla.innerHTML = texto;
};

const tecGuionf = () =>{
    texto += "-";
    casilla.innerHTML = texto;
};

const tecSumaf = () =>{
    texto += "+";
    casilla.innerHTML = texto;
};

const tecPuntof = () =>{
    texto += ".";
    casilla.innerHTML = texto;
}

//Funciones otras teclas
// tecBlockMayf
// tecEscf
// tecMayf
// tecTabf


//Onclick
tecA.onclick = () =>{
    tecAf();
};

tecAsk1.onclick = () =>{
    tecAsk1f();
};

tecAsk2.onclick = () =>{
    tecAsk2f();
};

tecB.onclick = () =>{
    tecBf();
};

tecBloqMay.onclick = () =>{
    tecBlockMayf();
};

tecC.onclick = () =>{
    tecCf();
};

tecCero.onclick = () =>{
    tecCerof();
};

tecCinco.onclick = () =>{
    tecCincof();
};

tecComa.onclick = () =>{
    tecComaf();
};

tecComilla.onclick = () =>{
    tecComillaf();
};

tecCorchete1.onclick = () =>{
    tecCorchete1f();
};

tecCorchete2.onclick = () =>{
    tecCorchete2f();
};

tecCuatro.onclick = () =>{
    tecCuatrof();
};

tecD.onclick = () =>{
    tecDf();
};

tecDel.onclick = () =>{
    tecDelf();
};

tecDos.onclick = () =>{
    tecDosf();
};

tecE.onclick = () =>{
    tecEf();
};

tecEnter.onclick = () =>{
    tecEnterf();
};

tecEsc.onclick = () =>{
    tecEscf();
};

tecEspacio.onclick = () =>{
    tecEspaciof();
};

tecF.onclick = () =>{
    tecFf();
};

tecG.onclick = () =>{
    tecGf();
};

tecGuion.onclick = () =>{
    tecGuionf();
};

tecH.onclick = () =>{
    tecHf();
};

tecI.onclick = () =>{
    tecIf();
};

tecJ.onclick = () =>{
    tecJf();
};

tecK.onclick = () =>{
    tecKf();
};

tecL.onclick = () =>{
    tecLf();
};

tecM.onclick = () =>{
    tecMf();
};

tecMay.onclick = () =>{
    tecMayf();
};

tecN.onclick = () =>{
    tecNf();
};

tecNueve.onclick = () =>{
    tecNuevef();
};

tecO.onclick = () =>{
    tecOf();
};

tecOcho.onclick = () =>{
    tecOchof();
};

tecP.onclick = () =>{
    tecPf();
};

tecPunto.onclick = () =>{
    tecPuntof();
};

tecQ.onclick = () =>{
    tecQf();
};

tecR.onclick = () =>{
    tecRf();
};

tecS.onclick = () =>{
    tecSf();
};

tecSeis.onclick = () =>{
    tecSeisf();
};

tecSiete.onclick = () =>{
    tecSietef();
};

tecSuma.onclick = () =>{
    tecSumaf();
};

tecT.onclick = () =>{
    tecTf();
};

tecTab.onclick = () =>{
    tecTabf();
};

tecTres.onclick = () =>{
    tecTresf();
};

tecU.onclick = () =>{
    tecUf();
};

tecUno.onclick = () =>{
    tecUnof();
};

tecV.onclick = () =>{
    tecVf();
};

tecW.onclick = () =>{
    tecWf();
};

tecX.onclick = () =>{
    tecXf();
};

tecY.onclick = () =>{
    tecYf();
};

tecZ.onclick = () =>{
    tecZf();
};

tecÑ.onclick = () =>{
    tecÑf();
};
