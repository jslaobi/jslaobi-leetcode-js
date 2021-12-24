var subsets = function(nums) {
    const result = [];
    function backtrack(start, curr){
        result.push([...curr]);
        for(let i=start;i<nums.length;i++){
            curr.push(nums[i]);
            backtrack(i+1,curr);
            curr.pop();
        }
    }
    backtrack(0,[]);
    return result;
};