var pathSum = function(root, sum) {
    const result = [];
    
    findPath(root, sum, []);
    function findPath(node, sum, path){
       
        if(node === null){
            return;
        }
        path = [...path, node.val];
        sum -= node.val;
        if(node.left === null && node.right === null && sum === 0){
            result.push(path);
            return;
        }
        
        findPath(node.left, sum, path);
        findPath(node.right, sum, path);
    }
    
    return result;
};