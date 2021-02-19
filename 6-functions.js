extraFun2();
function fun1() {

    /*
        Gör en metod "sayHi". Anropa den två gånger
    
        sayHi()
        sayHi()

    Detta ska skrivas ut:

    --------
    -------- VÄLKOMMEN 
    --------

    --------
    -------- VÄLKOMMEN 
    --------

    */
    sayHi();
    sayHi();
    function sayHi() {
        console.log(`
        ------ 
        ------ VÄLKOMMEN
        ------`);
    }

}

function fun2() {

    /*
    Liknande som sist men gör en metod sayHiTo() som tar ett namn som inparameter.

    Ex sayHiTo("DITT_NAMN") ska skriva ut:

    --------
    -------- VÄLKOMMEN DITT_NAMN
    --------

    */
    sayHi("Lo");
    function sayHi(name) {
        console.log(`
        ------ 
        ------ VÄLKOMMEN ${name}
        ------`);
        
    }

}

function fun3() {

    /*
    Gör en metod "myndig" med två parameterar "name" och "age". Anropa den tre gånger
    
        myndig("Peter", 16);
        myndig("Lisa", 26);
        myndig("Ragnar", 15);

    Detta ska skrivas ut:

        Obs! Peter är inte myndig!
        Lisa är myndig
        Obs! Ragnar är inte myndig!
    */
        ärMyndig("Peter", 16);
        ärMyndig("Lisa", 26);
        ärMyndig("Ragnar", 15);
   function ärMyndig(name, age) {
       if(age >= 18){
           console.log(`${name} är myndig`);
       } else {
           console.log(`Obs! ${name} är inte myndig!`);
       }

   }

}

function fun4() {

    /*
    Gör en metoden "skrivUtMoms" som tar "price" som inparameter.
    Om du t.ex anropas metoden såhär:

        skrivUtMoms(1000)

    ...så ska detta skrivas ut:

        Momsen för varan är 250kr

    */
   skrivUtMoms(1000);
   skrivUtMoms(500);
   function skrivUtMoms(pris) {
       let moms = pris * 0.25;
       console.log(`Momsen för varan är ${moms}`);
   }

}

// -------- EXTRA UPPGIFTER -----------------------------------------


function extraFun1() {

    /*

    Gör en metod "recept" med en parameter "recipeName" och "ingredients". Anropa den:
    
        recept("Äpplekaka", ["Äpple", "Mjöl", "Kanel"]);
        recept("Rotmos", ["Potatis", "Kålrot"]);

    Detta ska skrivas ut:

        FÖR ATT GÖRA ÄPPLEKAKA BEHÖVS:
        * ÄPPLE
        * MJÖL
        * KANEL

        FÖR ATT GÖRA ROTMOS BEHÖVS:
        * POTATIS
        * KÅLROT
    */
   skrivUtRecept("Äpplekaka", ["Äpple", "Mjöl", "Kanel"]);
   skrivUtRecept("Rotmos", ["Potatis", "Kålrot"]);
   function skrivUtRecept(recept, ingredienser) {
       console.log(`FÖR ATT GÖRA ${recept.toUpperCase()} BEHÖVS:`);
       for (const item of ingredienser) {
           console.log(`* ${item.toUpperCase()}`);
       }
   }

}

function extraFun2() {

    /*

    I sverige finns tre momssatser: 25%, 12% och 6%. Se här:
    https://www.verksamt.se/starta/skatter-och-avgifter/moms/olika-momssatser

    Skriv en metod "skrivUtMoms" som beräknar moms på en vara utifrån vilken typ av vara det är

    Dessa anrop:

        skrivUtMoms("tidning", 1000);           6%
        skrivUtMoms("restaurangbesök", 1000);   12%
        skrivUtMoms("flyg", 1000);              6%
        skrivUtMoms("falafel", 1000);           25%
        skrivUtMoms("hipsteröl", 1000);         25%

    Ska ge svaren:

        Momsen för en/ett tidning som kostar 1000kr är 60kr
        Momsen för en/ett restaurangbesök som kostar 1000kr är 120kr
        Momsen för en/ett flyg som kostar 1000kr är 60kr
        Momsen för en/ett falafel som kostar 1000kr är 250kr
        Momsen för en/ett hipsteröl som kostar 1000kr är 250kr

    */
    function skrivUtMoms(vara, pris) {
        let momsSats;
        let moms =  pris * momsSats;
        if(vara == "tidning"){
            momsSats = 0.06;
        } else if (vara =="restaurangbesök") {
            momsSats = 0.12;
        } else if (vara =="restaurangbesök") {
            momsSats = 0.12;
        }

        console.log(`Momsen för en/ett ${vara} som kostar ${pris}kr är ${moms}kr`)
    }

}

function extraFun3() {

    /*

        Modifiera "skrivUtMoms" så funktionen tar hänsyn till om ordet innan ska vara "en" eller "ett":

            Momsen för en tidning som kostar 1000kr är 60kr
            Momsen för ett restaurangbesök som kostar 1000kr är 120kr
            Momsen för ett flyg som kostar 1000kr är 60kr
            Momsen för en falafel som kostar 1000kr är 250kr
            Momsen för en hipsteröl som kostar 1000kr är 250kr

        Tips: skriv en ny metod:

            function enEtt(word) {
            }

        ...som utifrån ord returnerar "en" eller "ett" (eller "en/ett" om ordet inte finns i ordlistan) 

    */

}
