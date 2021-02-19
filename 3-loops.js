loop7();

function loop1() {

    /*
        Använd en for-loop för att skriva ut alla siffror mellan 5 och 18
    */
   let i;
   for(i = 5; i <= 18; i++) {
       console.log(i);
   }
}

function loop2() {

    /*
        Använd en for-loop för att skriva ut alla siffror mellan 0 och 9
    */
   let i;
   for(i = 0; i <= 9; i++) {
       console.log(i);
   }
}

function loop3() {

    /*
        Använd en forloop för att skriva ut:
            "Siffran 4 är tjusig". 
            "Siffran 5 är tjusig"
            "Siffran 6 är tjusig"
            "Siffran 7 är tjusig"
            "Siffran 8 är tjusig"
    */
    /* Extra: använd en forloop för att skriva ut:
        "1:a"
        "2:a"
        "3:e"
        "4:e"
        "5:e"
        ...
        "99:e"
    */
   let i;
   for(i = 4; i <=8; i++) {
       console.log(`Siffran ${i} är tjusig`);
   }

   let j;
   for(j=1; j <=99; j++) {
       console.log(`${j}:a`)
   }
}

function loop4() {

    /*
        Lös föregående uppgift men använd en while-loop
    */
   let i = 4;
   while(i <= 8)
   {
    console.log(`Siffran ${i} är tjusig`);
    i++;
   }
   
   let j = 1;
   while(j <=99) {
    console.log(`${j}:a`);
    j++;
   }
}

function loop5() {

    /*
	    Skapa en array "importantYears" med årtalen 1492, 1789, 1859, 1929
        Använd "for of" för att skriva ut alla årtal
    */

    let importantYears = [1492, 1789, 1859, 1929];
    for(let x of importantYears) {
        console.log(`Året är ${x}..`);
    }

    /*
    Extra: 

        Skriv ut "Året är 1492", "Året är 1789" ...

        Skapa en array med färger "blå", "röd", "grön", "gul", "lila". 
        Använd "for of" för att skriva ut alla färger 

    */
   let colours = ["blå", "röd", "grön", "gul", "lila"];
   for(let x of colours) {
       console.log(x);
   }
}

function loop6() {

    /*
	    Skapa en array "importantYears" med årtalen 1492, 1789, 1859, 1929
	    Använd "for of" för att skriva ut alla årtal med en siffra till vänster:
	    1) 1492
	    2) 1789
	    3) 1859
	    4) 1929
    */
        

        let importantYears = [1492, 1789, 1859, 1929];
        let i = 1;
        for(let x of importantYears) {
                console.log(`${i}) ${x}`);
                i++;
        }

    /*
     Extra: lös uppgiften med ".forEach"

     Lösning:

        const importantYears = [1492, 1789, 1859, 1929];
        importantYears.forEach((x, index) => console.log(`${index + 1}) ${x}`))

     */
}

function loop7() {

    /*
	    Samma som sist men avbryt loopen om årtalet är högre än 1800. Ska alltså ge:
	    1) 1492
	    2) 1789
        */

       let importantYears = [1492, 1789, 1859, 1929];
        let i = 1;
        while(importantYears < 1800) {
        for(let x of importantYears) {
                console.log(`${i}) ${x}`);
                i++;
        }
    }
    }
