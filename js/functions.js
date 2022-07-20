let p = document.getElementById("pTag");
console.log(p.innerText);
p.innerText = "Labas vakaras :)";

let hElement = document.getElementById("hElement");
hElement.innerHTML = "<h1>Labai gera paskaita!</h1>";

let nums = document.getElementsByClassName("num");
console.log(nums);
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i].innerText);
}

for (let i = 0; i < nums.length; i++) {
    nums[i].innerText = Math.random();
}

let select = document.getElementById("days");

let HTML = "";

for (let i = 1; i <= 31; i++) {
    HTML += '<option value="' + i + '">' + i + '</option>';
    const cat = "miau";
}

select.innerHTML = HTML ;
document.getElementsByTagName("body")[0].innerHTML += "<script>console.log('laba dena')</script>";

function firstFun() {//nepriima kintamųjų
    console.log("labas rytas.");
    console.log("laba diena.");
    console.log("labas vakaras.");
}
firstFun();
firstFun();

function secondFun(text) {// priima kintamajį
    console.log("labas rytas" + text);
    console.log("laba diena" + text);
    console.log("labas vakaras" + text);
}

secondFun(", Jonai.");
secondFun(", Kestai.");

let name1 = ", Viliau";

secondFun(name1);
secondFun();

function superMath(x,y) { //priima kintamuosius
    console.log(x + y);
}

superMath(20, 1);

function theOneThatReturns(num) { // funkcija kuri gražina reikšmę
    let result = num * num;
    return result;
}

let sq = theOneThatReturns(20);
console.log(sq);

function rndIntFromTo(from, to) {
   return Math.round(Math.random() * (to - from)) + from;
}

console.log(rndIntFromTo(10,14));

for (let i = 0; i < 10; i++) {
    console.log(rndIntFromTo(i,14));
}

