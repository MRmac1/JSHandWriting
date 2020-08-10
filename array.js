/**
 * file: 和数组本身相关的操作
 *
 * new 的实现 -> newObject
 * Array.prototype.flat -> arrayFlatToString, arrayFlatRecu1, arrayFlatRecu2,
 * Array.prototype.reduce -> arrayReduce
 * */

const arrayFlatToString = function(arr) {
  return arr.toString().split(',').map(Number)
}

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

const arrayFlatRecu2 = function(array, result = []) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      arrayFlatRecu2(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}


function arrayReduce(arr, reducer, initValue) {
  var base = typeof initValue === 'undefined' ? arr[0] : initValue;
  var startPoint = typeof initValue === 'undefined' ? 1 : 0;
  arr.slice(startPoint).forEach((val) => {
    base = reducer(base, val)
  })
  return base;
}

module.exports = {
  arrayFlatToString,
  arrayFlatRecu,
  arrayFlatRecu2,
  arrayReduce
}
