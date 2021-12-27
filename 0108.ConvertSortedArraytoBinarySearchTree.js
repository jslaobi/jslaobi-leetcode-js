var sortedArrayToBST = function(nums) {
    if(nums.length === 0){
        return null;
    }
    
    function convertToBST(left, right){
        if(left > right){
            return null;
        }
        
        const mid = Math.floor(left + (right - left) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = convertToBST(left, mid-1);
        root.right = convertToBST(mid+1, right);
        return root;
    }
    
    return convertToBST(0, nums.length-1); 
};