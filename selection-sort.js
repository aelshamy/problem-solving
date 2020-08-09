function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

const sorted = selectionSort([-124, 500, 7, -40, 21, 100, 0]);

console.log(sorted);
