// 防抖函数

// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
const debounce = function(fn, time) {
  let workId = null;
  return () => {
    clearTimeout(workId);
    workId = setTimeout(fn, time);
  }
}

debounce(() => {
  console.log('debounce trigger');
}, 1000)()


// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
const throttle = function(fn, time) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true
    }, time);
  }
}

throttle(() => {
  console.log('throttle trigger');
}, 1000)()
