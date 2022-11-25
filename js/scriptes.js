var bezoeker = {
 voornaam : prompt("Wat is je voornaam?"),
 achternaam : prompt("Wat is je achternaam?"),
 email : prompt("Wat is je email?"),
 leeftijd : prompt("Wat is je leeftijd?"),
 woonplaats : prompt("Wat is je woonplaats?"),
};

document.querySelector("#voornaam").innerHTML = bezoeker.voornaam;
document.querySelector("#achternaam").innerHTML = bezoeker.achternaam;
document.querySelector("#email").innerHTML = bezoeker.email;
document.querySelector("#leeftijd").innerHTML = bezoeker.leeftijd;
document.querySelector("#woonplaats").innerHTML = bezoeker.woonplaats;

    
document.querySelector("#kopjenaam").innerHTML = "Welkom" + " " + bezoeker.voornaam + " " + bezoeker.achternaam;

if(leeftijd == "16") {
    document.querySelector(".midden").style.backgroundColor = 'orange';
}
if(leeftijd == "17") {
    document.querySelector(".midden").style.backgroundColor = 'blue';
}
if(leeftijd == "18") {
    document.querySelector(".midden").style.backgroundColor = 'gold';
}
if(leeftijd == "19") {
    document.querySelector(".midden").style.backgroundColor = 'green';
}
if(leeftijd == "") {
    document.querySelector(".midden").style.backgroundColor = 'red';
}
console.log();