var assert = require('chai').assert;
var bubbleSort = require('../bubble_sort');


describe("Bubble sort tests", function() {
  it("can swap elements in an array", function(){
    var sort = new bubbleSort;
    var items = [7,1,2,9,3];
    sort.swap(0, items);
    assert.equal(items[0], 1);
  });

  it("will return true if number is greater than adjacent", function(){
    var sort = new bubbleSort;
    var sortable = [8, 6, 3, 1, 2];
    assert.isOk(sort.isGreater(8, 6));
  });

  it ("can sort an array of numbers", function(){
    var sort = new bubbleSort;
    var sortable = [8, 6, 3, 1, 2]
    assert.equal(sort.sort(sortable), [1, 2, 3, 6, 8])
  });
});


//iterate over each element and call swap if current element > next element
