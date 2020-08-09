const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
};

function bruteForce(s) {
  let maxPalindrome = '';
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subStr = s.substring(i, j);
      if (isPalindrome(subStr)) {
        if (subStr.length > maxPalindrome.length) {
          maxPalindrome = subStr;
        }
      }
    }
  }

  return maxPalindrome;
}
const expandAroundTheCenter = (s) => {
  if (!s || s.length <= 1) {
    return s;
  }

  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

const expand = (s, begin, end) => {
  while (begin >= 0 && end < s.length - 1 && s[begin] === s[end]) {
    begin--;
    end++;
  }
  return s.substring(begin++, end--);
};

function longestPalindrome(s) {
  //   let maxPalindrome = bruteForce(s);
  let maxPalindrome = expandAroundTheCenter(s);
  return maxPalindrome;
}

const input = 'cccaba';
console.log(longestPalindrome(input));
