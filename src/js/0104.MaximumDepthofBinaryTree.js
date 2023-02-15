var maxDepth = function(root) {
    let maxDepth = 0;
    
    function findDepth(node, currentDepth){
        if(node === null){
            maxDepth = Math.max(currentDepth-1, maxDepth);
            return;
        }else{
            findDepth(node.left, currentDepth+1);
            findDepth(node.right, currentDepth+1);
        }
    }
    findDepth(root, 1);
    return maxDepth;
};