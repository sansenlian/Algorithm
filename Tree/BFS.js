// 广度优先遍历的递归写法
function wideTraversal(node){
    let nodes=[],i=0;
    if(node!=null){
        nodes.push(node);
        wideTraversal(node.nextElementSibling);
        node=nodes[i++];
        wideTraversal(node.firstElementChild);
    }
    return nodes;
}

// 广度优先遍历的非递归写法
function wideTraversal(node){
    let nodes=[],i=0;
    while(node!=null){
        nodes.push(node);
        node=nodes[i++];
        let childrens=node.children;
        for(let i=0;i<childrens.length;i++){
            nodes.push(childrens[i]);
        }
    }
    return nodes;
}