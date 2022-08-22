function isValid(s: string): boolean {    
    const stack = [];    
    const parenthesePair = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(parenthesePair[char]) {
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