var invertTree = function(root) {
    if(root === null){
        return root;
    }
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
};