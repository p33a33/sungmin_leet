function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1
    
    while(start <= end) {
        const mid = Math.floor((start + end)/2);
        
        if(target === nums[mid]) {
            return mid
        }    

        if(start === end) {
           return target > nums[start] ? start+1 : start
        }

        if(target > nums[mid]) { 
            start = mid+1
        }

        if(target < nums[mid]) {
            end = mid-1
        }
    }

    return start;
};
// str                 
// end
// mid
//  1      3             4      6
//    HEAD                 TAIL