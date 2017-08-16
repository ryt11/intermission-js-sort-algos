var assert = require('chai').assert;
var insertionSort = require('../insertion_sort');



describe("insertion sort unit tests", function(){
  it("can add first element to new array", function(){
    var iS = new insertionSort;
    var testArray = [4,2,7,1,3]
    assert.equal(iS.sort(testArray), [4])
  });
});
