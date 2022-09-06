/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var pruneTree = function(root) {
        if(root.left !== null) {
         root.left = pruneTree(root.left);    
        }
        
        if(root.right !== null) {
        root.right = pruneTree(root.right);    
        }
         
        if(root.val === 0 && root.left === null && root.right === null) { 
        root = null;
    }
    
    return root;
};