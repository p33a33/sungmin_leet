function searchInsert(nums: number[], target: number): number {
    let result = 0;
    
    while(nums.length > 0) {
    const mid = Math.floor((nums.length - 1) / 2);
        
    if(nums.length === 1 && target !== nums[mid]) {
        return nums[mid] > target ? result : result + 1
    }
        
    if(target === nums[mid]) {
        return result + mid
    }    
            
    if(target > nums[mid]) { 
        result += mid+1
        nums = nums.slice(mid + 1)
    }
        
    if(target < nums[mid]) {
        nums = nums.slice(0, mid + 1)
    }
    }

    
    
    return result
};

//mid
// 1      3             5      6
//   HEAD                 TAIL