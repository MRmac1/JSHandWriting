// flat,

const arraySource = [2, [1, 3], [5, 3, 3, 5, [9, 0, 20, 3]]];

const arrayFlatToString = function(arr) {
  return arr.toString().split(',')
}

console.log('arraySource', arrayFlatToString(arraySource));


const arrayFlatRecu = function(arr) {
  const flatArr = [];

  const _flat = function(arr) {
    if (Array.isArray(arr)) {
      for (const item of arr) {
        _flat(item);
      }
    } else {
      flatArr.push(arr);
    }
  };

  _flat(arr)

  return flatArr;
}

console.log('arraySource arrayFlatRecu', arrayFlatRecu(arraySource));

function flattenForever (array, result = []) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenForever(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

console.log('arraySource flattenForever', flattenForever(arraySource));


function arrayReduce(arr, reducer, initValue) {
  var base = typeof initValue === 'undefined' ? arr[0] : initValue;
  var startPoint = typeof initValue === 'undefined' ? 1 : 0;
  arr.slice(startPoint).forEach((val, index) => {
    base = reducer(base, val)
  })
  return base;
}

const reduceValue = arrayReduce([1, 2, 3, 4, 5], (a, b) => {
  return a + b;
})

console.log('reduceValue', reduceValue);


// const fibRecu = function(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return fibRecu(n - 1) + fibRecu(n - 2);
//   }
// }

// console.log('fibRecu', fibRecu(30));
