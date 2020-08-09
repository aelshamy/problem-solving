//O(n^2)

const bruteForce = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

//O(n)
const dictionary = (arr, target) => {
  const dictionary = {};

  for (let i = 0; i < arr.length; i++) {
    const remaining = target - arr[i];
    if (dictionary[remaining] >= 0) {
      return [dictionary[remaining], i];
    } else {
      dictionary[arr[i]] = i;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 18;

console.log(bruteForce(numbers, target));
console.log(dictionary(numbers, target));
