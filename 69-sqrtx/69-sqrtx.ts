function mySqrt(x: number): number {
    let root = 0;
    
    while(root ** 2 < x) {
        root++;
    }
    
    return root ** 2 > x ? root - 1 : root;
};