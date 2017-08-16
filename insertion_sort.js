

class InsertionSort {
  constructor () {}

  sort(array) {
    for(var i = 0; i < array.length; i++) {
      var value = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > value) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = value;
    }
    return array;
  }
};

module.exports = InsertionSort;
