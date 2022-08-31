function removeElement(nums: number[], val: number): number {

    let length = nums.length;
    
    if(length === 0) return 0;
    
    let i = 0;
    let j = length - 1;
    
    while(i < j) {
        if(nums[i] === val) {
            if(nums[j] !== val) {
                nums[i] = nums[j];
            }
             j--;  
        } else {
            i++;
        }
    }
    
    if(nums[i] === val) {
        return i
    } else {
        return i+1
    }
};

//     i
// 2 2 2 3
//     j

//       i
// 0 1 4 2 3 0 4 2
//             j