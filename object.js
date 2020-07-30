/**
 * file: 和对象本身相关的操作
 *
 * Object.create -> create
 * Object.assign -> shallowClone & assgin
 * instanceof -> instanceOf
 * 对象的深层克隆 deepClone
 * */

 const create = function(o) {
  const F = function() {}
  F.prototype = o;
  return new F;
}

// 浅克隆 shallowClone
const shallowClone = function(source) {
  const target = {};
  for (const key in source) {
    target[key] = source[key]
  }
  return target;
}

// 浅克隆
const assgin = function(target, ...source) {
  for (let index = 0; index < source.length; index++) {
    const element = source[index];
    for (const key in element) {
      if (element.hasOwnProperty(key)) {
        target[key] = object[key];
      }
    }
  }
}

// deepClone 深复制
const deepClone = function(parent) {
  // 维护两个储存循环引用的数组 - 处理循环引用的问题
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
}

const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    default:
      flag = false;
  }
  return flag;
};

const getRegExp = re => {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};

// instanceof 实现
const instanceOf = function(L, R) {
  let O = R.prototype;
  L = L.__proto__;
  while(true) {
    if (L === null) return false;
    if (L === O) {
      return true
    }
    L = L.__proto__;
  }
}

module.exports = {
  assgin,
  shallowClone,
  create,
  deepClone,
  instanceOf
}
