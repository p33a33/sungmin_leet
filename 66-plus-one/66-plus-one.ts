function plusOne(digits: number[]): number[] {
    let lastIndex = digits.length - 1;
    digits[lastIndex] += 1;
    for(let i = lastIndex; i >= 0; i--) {
        if(digits[i] >= 10) {
            digits[i] -= 10;
            
            if(i === 0) {
                digits.unshift(1)
            } else {
                digits[i-1] += 1 
            }
        }
    }
    
    console.log(digits)
    
    return digits;
};