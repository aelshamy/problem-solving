const Stack = require('./stack');

const longestValidParentheses = (s) => {
  let longest = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else longest = Math.max(i - stack[stack.length - 1], longest);
    }
    console.log(stack);
  }

  return longest;
};

// const result = longestValidParentheses(')()())');
const result = longestValidParentheses('()(()))())()');
console.log(result);
