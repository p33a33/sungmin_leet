/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const newList = new ListNode();
    
    let listOne = l1;
    let listTwo = l2;
    let sumList = newList;
    let countUp = false;
    
    while(listOne || listTwo) {
        let sum = sumList.val + (listOne ? listOne.val : 0) + (listTwo ? listTwo.val : 0);
        
        if(sum > 9) {
            sumList.val = sum - 10; 
        } else {
            sumList.val = sum;
        }
        
        listOne = listOne?.next ?? null;
        listTwo = listTwo?.next ?? null;
        
        if(listOne || listTwo) {
         sumList.next = new ListNode(sum > 9 ? 1 : 0);
         sumList = sumList.next;   
        } else {
            if(sum > 9) {
            sumList.next = new ListNode(1);
            }
        }
        
    }
    
    return newList;
};