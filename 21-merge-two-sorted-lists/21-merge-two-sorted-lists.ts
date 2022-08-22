/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if(!list1 && !list2) { return null }
    
    let head;
    let tail;
    
    const insertValue = (value : number) => {
        
        if(!head) {
            head = new ListNode(value)
            tail = head;
        } else {
           tail.next = new ListNode(value);
            tail = tail.next;
        }
    }
    
    while(list1 || list2) {
          let min;
            
        if(!list1) {
            min = list2.val
            list2 = list2.next;
            insertValue(min);
            continue;
        }
        
        if(!list2) {
            min = list1.val
            list1 = list1.next
            insertValue(min);
            continue;
        }
        
          if(list1.val > list2.val) {
            min = list2.val
            list2 = list2.next
            } else {
              min = list1.val;
              list1 = list1.next;
            }
        
        insertValue(min);
        }

    
    
    return head;
};