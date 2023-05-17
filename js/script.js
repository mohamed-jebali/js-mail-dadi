
// DADI  
let = numberRandomComputer = parseInt((Math.random() * 6 + 1));
console.log(numberRandomComputer);

let = numberRandomUser = parseInt((Math.random() * 6 + 1));
console.log(numberRandomUser);


    if(numberRandomComputer > numberRandomUser){
        console.log("Ha vinto il Computer")
    }
    else if(numberRandomComputer < numberRandomUser){
        console.log("Ha vinto il Giocatore")
    }
    else{
        console.log("Pareggio")
    }


// EMAIL


// creo una lista di email
// chiedere all'utente un email con un prompt
// scrivi l'email che vuoi selezionare
// scrivi in console accesso consentito e negato in base alla scelta dell'utente

let listEmail = ["Milano01@gmail.it","Roma02@gmail.it","Firenze03@gmail.it","Venezia04@gmail.it"];
console.log(listEmail);

let inputUser = prompt("Inserisci un Email");
let emailStatus;

for(let i = 0; i < listEmail.length; i++){

    if(emailStatus === false){
        console.log("Email non trovata");
    }

    if(inputUser === listEmail[i]){
    console.log("Accesso consentito");
   }
   else if(inputUser !== listEmail[i]){
   console.log("Accesso Negato");
   }
}


