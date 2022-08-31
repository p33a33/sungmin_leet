function strStr(haystack: string, needle: string): number {
    const needleLength = needle.length;
    const hayLength = haystack.length;
    let window = haystack.substring(0, needleLength)

    for(let i = 0; i < hayLength - needleLength + 1; i++) {
        if(window === needle) {
            return i
        }
        window = window.substring(1) + haystack[i + needleLength]
    }
    
    return -1
};

