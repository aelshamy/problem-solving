const validate = (node, min = null, max = null) => {
  if (min !== null && node.data < min) return false;
  if (max !== null && node.data > max) return false;

  if (node.left !== null && !validate(node.left, min, node.data)) return false;
  if (node.right !== null && !validate(node.right, node.data, max))
    return false;

  return true;
};

module.export = validate;
