var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}



getal1 = showRandomNumber1();



function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();


function geefAntwoord(antwoord){
    // ik moet checken of het getal hoger moet zijn of lager (knoppen geklikt)
        
    if(antwoord=="hoger"){
        if (getal1 > getal2){
            
            document.querySelector("body").style.backgroundColor = "Green";
            score++;
        }
        else{
            document.querySelector("body").style.backgroundColor = "Red";
            score--;
        }
        
    }
    if(antwoord=="lager"){
        if (getal2 > getal1){
            
            document.querySelector("body").style.backgroundColor = "Green";
            score++;
        }
        else{
            document.querySelector("body").style.backgroundColor = "Red";
            score--;
        }
    }
    document.getElementById("score").innerHTML=score;
    getal1 = showRandomNumber1();
    getal2 = showRandomNumber2();
}
