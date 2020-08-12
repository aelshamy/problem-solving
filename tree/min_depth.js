const BTNode = require('./bainry_seach_tree');

/*
@param {TreeNode} root
@return {number}
*/
const minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

const root = new BTNode(3);
const left = new BTNode(9);
left.left = new BTNode(8);
root.left = left;
const right = new BTNode(20);
right.left = new BTNode(15);
right.right = new BTNode(7);
root.right = right;

const result = minDepth(root);
console.log(result);

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};
