strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str){ //string omzetten naar positief(cijfers)
    outputArray = [];
    for (let i = 0; i < str.length; i++){ 
        for (let j = 0; j < strAlfabet.length; j++) { //
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){
   var outputString = "";   // lege array van een string, waar uitkomst in word returned
        //TODO: opdracht 1
    //hier ga ik posities terug zetten naar letters en ik zet dit in de variable outputstring
    for (let i = 0; i < arr.length; i++) { // i word als waarde 0 gegeven; loop gaat door tot (arr.length), lengte van ingevulde input woord wanneer i kleiner is dan arr.lengt(input woord van gebruiker); i++= ophoging.
        //arr 10, 18, 11
        //i = 0
        // arr[i] = 10
        let item = arr[i]; // i moet niet op 0 beginnen maar op ingevulde woord in dit geval plek 10, daarom arr[i], want arr is ingevulde woord en [i] is het begin.
        outputString += strAlfabet[item]; // wanneer outputstring gelijk is aan strAlfabet[item] gaat hij de nummer van de positie in het alfabet terug geven.
        
    }
        return outputString; 
}
//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    //TODO: opdracht 2
for (var i = 0; i < intDiv; i++) { // i waarde 0; loopt hoe vaak inputwoord in de codewoort past en geeft de codewoord zovaak weer terug.
    outputString += strCodeword; // 
}
for (var i = 0; i < intMod; i++) { // intmod loopt hoeveel letters er overgebleven zijn, van hoe vaak intdiv in een woord past en kijkt hoeveel letters overblijft.
    outputString += strCodeword[i];
}
    console.log("Codeword full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 25){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-25);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        
    }


     console.log("versleuteld bericht: " + positiesNaarString(outputArray));
     document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}

function ontsleutel(){
    //hier vul ik alle variable met de juiste waardes, strCodeword is het woord 
    //wat in het variable codeword staat en dan is outputstring, de variable die in de html in de output staat

    strCodeword = document.querySelector("#codeword").value; //variablen die nodig hebt zodat de codeword gezien kan worden
    outputString = document.querySelector("#output").value;
    strCodewordFull = vermenigvuldigCodeword(outputString, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arroutputPosities = stringNaarPosities(outputString);
    //console.log(strCodeword + strCodewordFull + arrCodewordPosities + arroutputPosities);

    outputArray = [];
    for (let i = 0; i < arroutputPosities.length; i++) { //
        if(arroutputPosities[i] - arrCodewordPosities[i] < 0){// output word met codeword afgetrokken wanneer de waarde boven de 0 is, zo niet word er 25 bij opgeteld
            outputArray.push((arroutputPosities[i] - arrCodewordPosities[i])+25);// als de output - codewword lager is dan 0 word er + 25 gedaan zodat de waarde nooit onder 0 kan komen.
        }
        else{ 
            outputArray.push(arroutputPosities[i] - arrCodewordPosities[i]);//output word gepushed naar de variable outputArray
        }
        
    }
    document.querySelector("#output").value = positiesNaarString(outputArray); //#output is gelijk aan functie  positiesNaarString(outputArray) en de array output er van
}