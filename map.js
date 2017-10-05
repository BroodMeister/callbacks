var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, transformer) {
  var transformed = [];
  arr.forEach (function(item){
    transformed.push(transformer(item));
  });
  return  transformed
}

console.log(map(words, function(word) {
  return word.length;
}))

console.log(map(words, function(word) {
  return word.toUpperCase();
}))

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}))