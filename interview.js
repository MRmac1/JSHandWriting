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


// 找出数组中三个乘积最大的数
const maximumMutiply = function(arr) {
  let sum;
  let i = arr.length;
  if(i === 3){
      sum=arr[0] * arr[1] * arr[2];
  } else {
      arr = arr.sort((a,b) => a-b);
      let arr1 = arr[i-3] * arr[i-2] * arr[i-1];
      let arr2 = arr[0] * arr[1] * arr[i-1];
      sum=Math.max(arr1,arr2)
  }
  return sum;
};

const maximumMutiply2 = function(arr) {
  let sum = 0;

  let length = arr.length;

  if (length < 3) return arr;

  for (let index = 0; index < length - 2; index++) {
    let tmp = arr[index] * arr[index + 1] * arr[index + 2];
    if (tmp > sum) {
      sum = tmp;
    }
  }

  return sum;
}

// 数组中找出连续下标 n 的乘积最大的值
const maximumMutiply3 = function(arr) {
  let sum = 0;

  let length = arr.length;

  if (length < 2) return arr;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      let tmp = arr.slice(i, j).reduce((a, b) => a * b)
      if (tmp > sum) {
        sum = tmp;
      }
    }
  }
  
  return sum;
}
