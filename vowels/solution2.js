function vowels(str) {
  const matches = str.match(/[aeoiu]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels('Hi There!'));
