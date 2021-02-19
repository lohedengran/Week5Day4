cond9();
function cond1() {
  /*
	    Skapa en variabel shoeMaria och sätt till 36
	    Skapa en variabel shoeAli och sätt till 42
	    Skriv en if-sats som kollar om de har samma skostorlek (skriv ut olika texter)
	    Experimentera med att ändra värden på "shoeMaria" och "shoeAli"
    */
  let shoeMaria = 36;
  let shoeAli = 42;
  if (shoeMaria == shoeAli) {
    console.log("Same size");
  } else {
    console.log("Not same size");
  }
}

function cond2() {
  /*
      	Skapa en variabel shoeMaria 
	    Skapa en variabel shoeAli 

        Beroende på vilken skostorlek som är störst skriv ut

        "Ali har större fötter än Maria"    
        "Maria har större fötter än Ali"
    */
  let shoeMaria = 36;
  let shoeAli = 42;
  if (shoeMaria > shoeAli) {
    console.log("Maria har större fötter än Ali");
  } else {
    console.log("Ali har större fötter än Maria");
  }
}

function cond3() {
  /*
	    Samma som sist, men kolla även om de har samma skostorlek

        "Ali har större fötter än Maria"
        "Maria har större fötter än Ali"
        "De har samma skostorlek"

    */

  let shoeMaria = 42;
  let shoeAli = 42;
  if (shoeMaria > shoeAli) {
    console.log("Maria har större fötter än Ali");
  } else if (shoeMaria < shoeAli) {
    console.log("Ali har större fötter än Maria");
  } else {
    console.log("De har samma skostorlek");
  }
}

function cond4() {
  /*
        Skapa tre variabler: shoeMaria, shoeAli, bigFoot 
	    Skriv en if-sats som kolla om bigFoot har större skostorlek än både Ali och Maria
    */
  let shoeMaria = 36;
  let shoeAli = 42;
  let bigFoot = 52;

  if (bigFoot > shoeMaria && bigFoot > shoeAli) {
    console.log("BigFoot is bigger");
  } else {
    console.log("BigFoot is smaller");
  }
}

function cond5() {
  /*
	    Skriv en ifsats som kollar om någon av Ali, Maria eller BigFoot har en skostorlek som är större än 50

        Extra: 
        1) lös denna uppgift genom att skapa en egen metod "someHigh" som tar flera parametrar. Använd sedan den såhär:

            if (someHigh(50, bigFoot, shoeAli, shoeMaria))
                console.log("Någon av de tre har riktigt stora fötter");

        2) lös denna uppgift med ".some"
        
    */
  let shoeMaria = 36;
  let shoeAli = 42;
  let bigFoot = 52;

if(shoeMaria > 50 || shoeAli > 50 || bigFoot > 50){
    console.log("Someone has big feet");
} else {
    console.log("All are small");
}

}

function cond6() {
  /*
	    Skapa en variabel "favoriteVegetable" och sätt den till "kålrot"
	    Använd en switch-sats för att kolla värdet på "favoriteVegetable" och svara på olika sätt
	    Om t.ex värdet av "favoriteVegetable" är "majrova" skriv "Passar till falafel"
    */
   let favoriteVegetable = "kålrot";
   switch (favoriteVegetable) {
       case "kålrot":
           console.log("gott");
           break;
        case "sparris":
            console.log("gott till lax");
            break;
        case "morot":
            console.log("gott till dipp");
            break;
        default:
            console.log("du gillar inte grönsaker")
           break;
   }
}

function cond7() {
  /*
	    Samma som sist men skapa först en variabel "answer"
	    Istället för att använda "console.log" inuti switch-satsen så sätt variabel "answer"
	    Använd tillslut "console.log" för att skriva ut värdet av "answer"
    */
    let answer;
   let favoriteVegetable = "kålrot";
   switch (favoriteVegetable) {
       case "kålrot":
           console.log("gott");
           break;
        case "sparris":
            console.log("gott till lax");
            break;
        case "morot":
            console.log("gott till dipp");
            break;
        default:
            console.log("du gillar inte grönsaker")
           break;
   }
}

function cond8() {
  /*
	    Jämför == och === i en ifsats
	    Testa med en ifsats om 3=="3" är sant
	    Testa med en ifsats om 3==="3" är sant
    */
   if (3=="3") {
       console.log("tre");
   }else {
       console.log("inte tre");
   }

   if (3==="3") {
    console.log("tre");
}else {
    console.log("inte tre");
}
}

function cond9() {
  /*
	    Övning i "ternary operator"
	    Skapa en variabel a och sätt den till 13*13
	    Skapa en variabel b och sätt den till 169
	    Använd "ternary operator" för att kolla om de är lika. Lägg svaret (strängen "lika" eller "olika") i en variabel "result"
	    Skriv ut result
    */
   let a = 13 * 13;
   let b = 169;
   let result = (a == b) ? "lika" : "olika";
   console.log(result);
}
