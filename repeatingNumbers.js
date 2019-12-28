let repeatNumbers = function(data) {
  let outputText = '';
  let inc = 0
  for (let each = 0; each < data.length; each++){
    for (let i = 0; i < data[each][1]; i++) {
        outputText += data[each][0]  
    }
    inc++
    if (data.length > 1 && inc < data.length) {
      outputText += ', '
    }

  }
  return outputText
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));