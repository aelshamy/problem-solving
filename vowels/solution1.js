function vowels(str) {
  return Array.from(str).reduce(
    (count, char) => ('aeiou'.includes(char) ? ++count : count),
    0
  );
}

console.log(vowels('Hi There!'));
