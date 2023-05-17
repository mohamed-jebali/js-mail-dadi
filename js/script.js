

let = numberRandomComputer = parseInt(Math.random());
console.log(numberRandomComputer);

let = numberRandomUser = parseInt(Math.random());
console.log(numberRandomUser);

let random = 0; 


for(random = 0;random < 6; random++){

    if(numberRandomComputer > numberRandomUser){
        console.log("Ha vinto il Computer")
    }
    else if(numberRandomComputer < numberRandomUser){
        console.log("Ha vinto il Giocatore")
    }
    else{
        console.log("Inserisci un valore numerico")
    }
}