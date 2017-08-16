

class BubbleSort {
  constructor() {}

  swap(index, items) {
    var swap_item = items[index];
    var adjacent = items[index + 1];
    items[index] = adjacent
    items[index + 1] = swap_item
    return items;
  }

  isGreater(current, adjacent) {
    return current > adjacent;
  }

  swapController(items) {
    for (var i = 0; i < items.length; i++) {
      if (i !== items.length && this.isGreater(items[i], items[i + 1])) {
        this.swap(i, items);
      };
    }
    return items;
  }

  sort(items) {
    for (var  i = 0; i < items.length; i++) {
      this.swapController(items);
    };
    return items;
  }
}



module.exports = BubbleSort;
