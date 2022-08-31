function strStr(haystack: string, needle: string): number {
    
    if(needle.length === 0) return 0;
    
    const lengthLimit = haystack.length - needle.length + 1

    for(let i = 0; i < lengthLimit; i++) {

        if(haystack[i] === needle[0]) {
            if(haystack.slice(i, i + needle.length) === needle) {
                return i
            }
        }
    }
    
    return -1
};

