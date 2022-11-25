topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];

    //splice eerste getal postitie waar die het gaat uitvoeren van de array
    //tweede getal is hoeveel er weggehaald word
    // waarders daarna is wat je toevoegd in die posities.

function moveup(up){

    if(up==1){
        alert ("Het kan niet omhoog");
    }
    if(up==2){
        topFilms.splice(0, 2, topFilms[1], topFilms[0]);
    }
    if(up==3){
        topFilms.splice(1, 2, topFilms[2], topFilms[1]);
      
    }
    if(up==4){
        topFilms.splice(2, 2, topFilms[3], topFilms[2]);
      
    }
    if(up==5){
        topFilms.splice(3, 2, topFilms[4], topFilms[3]);
    }
    
document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
}

function movedown(down){//pr gelk aan lkaar

    if(down==1){
        topFilms.splice(0, 2, topFilms[1], topFilms[0]);
    }
    if(down==2){
        topFilms.splice(1, 2, topFilms[2], topFilms[1]);
    }
    if(down==3){
        topFilms.splice(2, 2, topFilms[3], topFilms[2]);
    }
    if(down==4){
        topFilms.splice(3, 2, topFilms[4], topFilms[3]);
    }
    if(down==5){
        alert("Kan niet meer naar beneden");
    }
    
document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
}

function resetList(){
document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML =     "The Godfather";
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML =     "The Shawshank Redemption";
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = "Schindler's List";
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = "Raging Bull";
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = "Casablanca";
}


