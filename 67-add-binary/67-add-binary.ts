function addBinary(a: string, b: string): string {
    const diff = a.length - b.length;
    
    if(diff) {
        if(diff > 0) {
            b = "0".repeat(diff) + b; 
        } else {
            a = "0".repeat(-diff) + a;
        }
    }
    
    let numArrayA = a.split('').map(el => Number(el));
    
    for(let i = numArrayA.length - 1; i >= 0; i--) {
        numArrayA[i] += Number(b[i]);
        
        if(numArrayA[i] > 1) {
            numArrayA[i] -= 2;
            if(i === 0) {
              numArrayA.unshift(1)
            } else {
              numArrayA[i-1] += 1;   
            }
        }
    }
    
    return numArrayA.join('')
    
};