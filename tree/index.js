class TreeNode {
  data;
  children;

  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new TreeNode(data));
  }
  remove(data) {
    this.children = this.children.filter((item) => item.data !== data);
  }
}

class Tree {
  root;

  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
  getLevelWidth() {
    const separator = '|';
    const arr = [this.root, separator];
    const widths = [0];
    while (arr.length > 1) {
      const node = arr.shift();
      if (node === separator) {
        widths.push(0);
        arr.push(separator);
      } else {
        arr.push(...node.children);
        widths[widths.length - 1]++;
      }
    }

    return widths;
  }
}

module.exports = { TreeNode, Tree };
