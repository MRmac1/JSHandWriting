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


// unique 按照 name 数组去重
/**
 *
 */

var users=[{
    id:1,name:"a"
  },{
    id:2,name:"a"
  },{
    id:3,name:"b"
  },{
    id:4,name:"v"
}];

Array.prototype.unique = function() {
  this.map(item => {
    this[item.id - 1] = item.name
  });
  var res=new Set(this);
  console.log("new Set对象",res)
  res = Array.from(new Set(this));
  return res//es6 数组去重
}

console.log('unique', users.unique());

// 实现虚拟dom

//样例数据
let demoNode = Element({
  tagName: 'ul',
  props: {'class': 'list'},
  children: [
    Element({tagName: 'li', children: ['douyin']}),
    Element({tagName: 'li', children: ['toutiao']})
  ]
});

function Element({tagName, props, children}){
  if(!(this instanceof Element)){
      return new Element({tagName, props, children})
  }
  this.tagName = tagName;
  this.props = props || {};
  this.children = children || [];
}

Element.prototype.render = function(){
  var el = document.createElement(this.tagName),
      props = this.props,
      propName,
      propValue;
  for(propName in props){
      propValue = props[propName];
      el.setAttribute(propName, propValue);
  }
  this.children.forEach(function(child){
      var childEl = null;
      if(child instanceof Element){
          childEl = child.render();
      }else{
          childEl = document.createTextNode(child);
      }
      el.appendChild(childEl);
  });
  return el;
};
