Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'. Adding an element to the stack should store it until it is removed.

```js
const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // returns 2
s.pop(); // returns 1
```

## Longest Valid Parentheses

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

```
Input   : "(()"
Output  : 2
Explanation: The longest valid parentheses substring is "()"
```

Example 2:

```
Input   : ")()())"
Output  : 4
Explanation: The longest valid parentheses substring is "()()"
```
