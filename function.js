// 实现 bind，call，apply，new
/**
 * file: 和函数本身相关的操作
 *
 * new 的实现 -> newObject
 * Function.prototype.bind -> bind
 * Function.prototype.call -> call
 * Function.prototype.apply -> apply
 * */


// new 实现  newObject(Person, 'cxk', 18)
// const Person = function(name, age) {
//   this.name = name;
//   this.age = age
// }

function newObject() {
  const obj = {};
  const Constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}

const call = function() {
  const [context, ...args] = arguments;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组
const apply = function() {
  const [context, arr] = arguments;
  context.fn = this;
  const result = context.fn(...arr);
  delete context.fn;
  return result;
}

//
const bind = function(context) {
  var self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}

module.exports = {
  newObject,
  bind,
  call,
  apply
}
