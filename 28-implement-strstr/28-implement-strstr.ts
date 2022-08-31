function strStr(haystack: string, needle: string): number {
    const needleLength = needle.length;
    const hayLength = haystack.length;

    for(let i = 0; i < hayLength - needleLength + 1; i++) {
        
        
        if(haystack.substring(i, i + needleLength) === needle) {
            return i
        }
    }
    
    return -1
};

