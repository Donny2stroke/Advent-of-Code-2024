const fs = require('fs');
// Funzione leggifile
function leggifile(nomefile) {
    try {
        // Legge il file in modo sincrono e restituisce il contenuto come stringa
        const dati = fs.readFileSync(nomefile, 'utf-8');
        return dati;
    } catch (err) {
        console.error(`Errore nella lettura del file: ${err.message}`);
        return null; // Restituisce null in caso di errore
    }
}



const input = leggifile(__dirname+'\\input.txt');

if (input) {
    arrayInput = input.split("\r\n");
    let arrayUno = [];
    let arrayDue = [];
    let somma = 0;


    arrayInput.forEach(el => {
        let temp = el.split("   ");
        let valoreSinistra = parseInt(temp[0]);
        let valoreDestra = parseInt(temp[1]);
        if(arrayUno.length==0 || arrayUno[arrayUno.length-1]<valoreSinistra){
            arrayUno.push(valoreSinistra);
        }else{
            for(let i = 0; i<arrayUno.length; i++){
                if(arrayUno[i]>valoreSinistra){
                    arrayUno.splice(i, 0, valoreSinistra);
                    break;
                }
            }
        }
        if(arrayDue.length==0 || arrayDue[arrayDue.length-1]<valoreDestra){
            arrayDue.push(valoreDestra);
        }else{
            for(let i = 0; i<arrayDue.length; i++){
                if(arrayDue[i]>valoreDestra){
                    arrayDue.splice(i, 0, valoreDestra);
                    break;
                }
            }
        }
    });

    for(let i=0; i<arrayUno.length; i++){
        let punteggio=0;
        let occorrenze = 0;

        for(let j=0; j<arrayDue.length; j++){
            if(arrayUno[i]==arrayDue[j]){
                occorrenze ++;
            }
        }
        punteggio = arrayUno[i]*occorrenze;


        somma+=punteggio;
    }

    console.log(somma);
    

} else {
    console.log('Impossibile leggere il file.');
}
