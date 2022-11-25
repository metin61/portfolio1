var bezoeker = {
    voornaam: prompt("Wat is je voornaam?"),
    leeftijd: prompt("Wat is je leeftijd?"),

};

document.querySelector("#voornaam").innerHTML = bezoeker.voornaam;
document.querySelector("#leeftijd").innerHTML = bezoeker.leeftijd;



document.querySelector("#kopjenaam").innerHTML = "Welkom" + " " + bezoeker.voornaam;


if(leeftijd = "18") {
    document.querySelector(".midden").style.backgroundColor = 'green'
}

if(leeftijd != "18") {
    document.querySelector(".midden").style.backgroundColor = 'red'
}
console.log();