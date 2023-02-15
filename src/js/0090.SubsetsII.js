var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a,b)=>{
        return a-b;
    });
    
    function backtrack(start, curr){
        result.push([...curr]);
        for(let i=start;i<nums.length;i++){
            if(i>start && nums[i] === nums[i-1]){
                continue;
            }
            curr.push(nums[i])
            backtrack(i+1,curr);
            curr.pop();
        }
    }
    
    backtrack(0,[]);
    return result;
};