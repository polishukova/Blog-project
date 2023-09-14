const MAIN = "https://test.vmarmysh.com/swagger/user.html"
const TREE = "/api.user.tree.get"
const CREATE = "/api.user.tree.node.create"
const DELETE = "/api.user.tree.node.delete"
const RENAME = "/api.user.tree.node.rename"

type Root = {
    id: number,
    name: string,
    children: {}[],
}

export const getTree = async (treeName: string, data?: Root) => {
    const treeUrl = new URL(MAIN + TREE);
    if (treeName) treeUrl.searchParams.set("treeName", String(treeName));
    const response = await fetch(treeUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });
    const tree: Root = await response.json();
    console.log(tree)
    return tree;
}

// console.log(getTree('GUID'))