type TreeNode<T> = {
    val: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null
}

function invertTree<T>(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) {
        return null
    }

    return {
        val: node.val,
        left: invertTree(node.right),
        right: invertTree(node.left)
    }
}
