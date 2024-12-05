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
        let crescente = [[], 0];
        let decrescente = [[], 0];
        let uguali = [[], 0];
        for(let i=0; i<el.length-1; i++){
            if(el[i]>el[i+1] && el[i]<(el[i+1]+4)){
                decrescente[0].push(i);
                decrescente[1]++;
            }else if(el[i]<el[i+1] && el[i]>(el[i+1]-4)){
                crescente[0].push(i);
                crescente[1]++;
            }else{
                uguali[0].push(i);
                uguali[1]++;
            }
        }

        if(crescente[1]==el.length-1 || decrescente[1]==el.length-1){
            safeCount++;
        }else{
            if(crescente[1]==el.length-2){
                if(decrescente[1]>0){
                    if(decrescente[0][0]>0 && decrescente[0][0]<el.length-1){
                        if(el[decrescente[0][0]-1]<el[decrescente[0][0]+1] && el[decrescente[0][0]-1]>(el[decrescente[0][0]+1]-4)){
                            safeCount++;
                        }
                    }else{
                        safeCount++;
                    }
                }
                if(uguali[1]>0){
                    if(uguali[0][0]>0 && uguali[0][0]<el.length-1){
                        if(el[uguali[0][0]-1]<el[uguali[0][0]+1] && el[uguali[0][0]-1]>(el[uguali[0][0]+1]-4)){
                            safeCount++;
                        }
                    }else{
                        safeCount++;
                    }
                }
            }else if(decrescente[1]==el.length-2){
                if(crescente[1]>0){
                    if(crescente[0][0]>0 && crescente[0][0]<el.length-1){
                        if(el[crescente[0][0]-1]>el[crescente[0][0]+1] && el[crescente[0][0]-1]<(el[crescente[0][0]+1]+4)){
                            safeCount++;
                        }
                    }else{
                        safeCount++;
                    }
                }
                if(uguali[1]>0){
                    if(uguali[0][0]>0 && uguali[0][0]<el.length-1){
                        if(el[uguali[0][0]-1]>el[uguali[0][0]+1] && el[uguali[0][0]-1]<(el[uguali[0][0]+1]+4)){
                            safeCount++;
                        }
                    }else{
                        safeCount++;
                    }
                }
            }
        }
    });
    
    
    console.log(safeCount);
    

} else {
    console.log('Impossibile leggere il file.');
}
