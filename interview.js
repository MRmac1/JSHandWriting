// add(1)(10, 100)(1000) 1111
const add = function(x) {
  let sum = x;

  const tmp = function() {
    for (let index = 0; index < arguments.length; index++) {
      const arg = arguments[index];
      sum += arg;
    }
    return tmp;
  }

  tmp.toString = function() {
    return sum;
  }

  return tmp;
}

console.log('add', add(1)(2, 5)(3)(4) + '')

// add2(1)(10, 100)(1000)()

const add2 = function(x) {
  return function() {
    if (arguments.length !== 0) {
      for (let index = 0; index < arguments.length; index++) {
        const arg = arguments[index];
        x += arg;
      }
      return arguments.callee;
    } else {
      return x;
    }
  }
}

console.log('add2', add(1)(2, 5)(3)(4)())

// 找出字符串中第一个连续三个递增的数字并返回