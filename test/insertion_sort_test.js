var assert = require('chai').assert;
var insertionSort = require('../insertion_sort');



describe("insertion sort unit tests", function(){
  it("can sort an array", function(){
    var iS = new insertionSort;
    var testArray = [4,2,7,1,3]
    assert.equal(JSON.stringify(iS.sort(testArray)), JSON.stringify([1, 2, 3, 4, 7]))
  });
});
