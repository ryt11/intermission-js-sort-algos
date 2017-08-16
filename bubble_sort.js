class BubbleSort {
  constructor() {}

  swap (index, items) {
    var swap_item = items[index];
    var adjacent = items[index + 1];
    items[index] = adjacent
    items[index + 1] = swap_item
    return items;
  };

  isGreater (current, adjacent) {
    return current > adjacent;
  };

  sort (items) {
    for (i = 0; i < items.length; i++) {
      items.forEach(function(item, index){
        if (isGreater(item, item[index + 1])) {
          items = swap(index, items)
        };
      });
    }


  };
};




module.exports = BubbleSort;
