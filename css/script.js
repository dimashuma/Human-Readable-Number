let sotni = ["", "сто", "двести", "триста", "четыреста", "пятсот", "шестсот", "семсот", "восемсот", "девятсот"];
let desatki = ["", "надцать", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
let edinici = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

function go() {
    let s = d = e = "";
    let n = document.getElementById("n").value;

    if(n >= 100) s = sotni[n[n.length-3]] + " ";
    else s = "";

    if(n >= 10) d = desatki[n[n.length-2]] + " ";
    else d = "";

    

    e = edinici[n[n.length-1]];


    if(n >= 11 && n <= 19)
    document.getElementById("tekst").innerHTML = s + e + d;
    else document.getElementById("tekst").innerHTML = s + d + e;
}