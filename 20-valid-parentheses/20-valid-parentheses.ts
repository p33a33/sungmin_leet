function isValid(s: string): boolean {    
    const stringArr = s.split('');
    const stack = [];    
    const startParentheses = ['(', '[', '{'];
    const parenthesePair = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let char of stringArr) {
        if(startParentheses.includes(char)) {
            stack.push(char)
        } else {
            const lastEl = stack.pop()
            if(char !== parenthesePair[lastEl]) {
                return false
            }
        }
    }
    
    
    if(stack.length === 0) return true;
    return false;
};