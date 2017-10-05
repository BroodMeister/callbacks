function findWaldo(arr, found) {
  arr.forEach(function(item, i) {
    if (item === "Waldo") {
      found(i);
    }
  });

}

function actionWhenFound(index) {
  console.log( "Found Waldo at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);