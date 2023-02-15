var hasPathSum = function(root, sum) {
    if(root === null){
        return false;
    }else if(root.left === null && root.right === null && sum - root.val === 0){
        return true;
    }else{
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
    }
};