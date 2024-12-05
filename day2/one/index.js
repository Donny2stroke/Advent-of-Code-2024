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
    let arrayDati = [];
    let safeCount = 0;

    arrayInput.forEach(el => {
        let arrayTemp = el.split(" ").map(function(element){
            return parseInt(element);
        });
        arrayDati.push(arrayTemp);
    });

    arrayDati.forEach(el=>{
        let crescente = 0;
        let decrescente = 0;
        for(let i=0; i<el.length-1; i++){
            if(el[i]>el[i+1] && el[i]<(el[i+1]+4)){
                decrescente = 1;
            }else if(el[i]<el[i+1] && el[i]>(el[i+1]-4)){
                crescente = 1;
            }else{
                decrescente = 0;
                crescente = 0;
                break;
            }
        }
        if(crescente!=decrescente && (crescente > 0 || decrescente > 0)){
            safeCount++;
        }
    });
    
    
    console.log(safeCount);
    

} else {
    console.log('Impossibile leggere il file.');
}
