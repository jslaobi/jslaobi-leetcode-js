var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col] === 1){
                let count = dfs(row,col);
                max = Math.max(max, count);
            }
        }
    }
    
    
    function dfs(row,col){
        if(row<0 || row>=grid.length || col<0 || col>=grid[0].length || grid[row][col] === 0){
            return 0;
        }
        
        grid[row][col] = 0;
        let count = 1;
        count += dfs(row-1,col,count);
        count += dfs(row+1,col,count);
        count += dfs(row,col-1,count);
        count += dfs(row,col+1,count);
        return count;
    }
    
    return max;
};