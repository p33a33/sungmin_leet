function isValid(s: string): boolean {    
    const stack = [];    
    const parenthesePair = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let i = 0; i < s.length; i++) {
        if(parenthesePair[s[i]]) {
            stack.push(s[i])
        } else {
            const lastEl = stack.pop()
            if(s[i] !== parenthesePair[lastEl]) {
                return false
            }
        }
    }
    
    
    if(stack.length === 0) return true;
    return false;
};