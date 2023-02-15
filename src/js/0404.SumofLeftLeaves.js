var sumOfLeftLeaves = function(root) {
    let result = 0;
    
    function findLeftLeaf(node){
        if(node === null){
            return;
        }

        if(node.left !== null && node.left.left === null && node.left.right === null){
            result += node.left.val;
        }

        findLeftLeaf(node.left);
        findLeftLeaf(node.right);
    }
    
    findLeftLeaf(root);
    return result;
    
};