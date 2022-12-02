//Given a binary tree find the Lowest Common Ancestor (LCA)

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function initTree(list) {
    const q = [];
    const v = list.shift();

    let root = new Node(v);
    q.unshift(root);

    while (list.lenght > 0) {
        let item = q.pop();

        let lv = list.shift();
        let rv = list.shift();

        let l = lv === null ? null : new Node(lv);
        let r = rv === null ? null : new Node(rv);

        item.left = l;
        item.right = r;

        q.unshift(l);
        q.unshift(r);
    }
    return root;
}

let root = initTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

function getNode(node, n) {
    if (node == null) {
        return null;
    }
    if (node.data == n) {
        return node;
    }
    return getNode(node.left, n) || getNode(node.right, n);
}

let p = getNode(root, 5);
let q = getNode(root, 4);

function lowestCommonAncestor(root, p, q) {
    let res = null;
    inOrder(root, p, q);

    function inOrder(node, p, q) {
        if (node == null) {
            return 0;
        }
        let head = (node == p || node == q) ? 1 : 0;
        let l = inOrder(node.left, p, q);
        let r = inOrder(node.right, p, q);

        if (head + l + r == 2) {
            res = node;
        }
        if (head + l + r > 0) return 1;

        return 0;
    }
    return res;
}

let res = lowestCommonAncestor(root, p, q)
console.log(res.data);