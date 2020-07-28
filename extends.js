// JS 里继承的集中形式
const F = function(name) {
  this.name = name;
  this.sayName = function() {
    console.log('my name is', this.name)
  }
}

F.prototype.age = 13;
F.prototype.sayAge = function() {
  console.log('my age is', this.age)
}

// 原型链继承
const S = function(name) {
  this.name = name;
};

S.prototype = new F();

const s = new S('lu');

// 构造函数继承 - 继承构造函数内所有值，但是无法继承prototype上定义的值/函数, 还是需要使用原型链 S1.prototype.__proto__
const S1 = function(name) {
  F.call(this, name)
}

S1.prototype.__proto__ = F.prototype

const s1 = new S1('lu')

// 组合继承 - 结合上面两种，和修正后的类似，只是比指定 S1.prototype.__proto__ 多执行了一遍构造函数内的内容
const S2 = function() {
  F.call(this, name)
}

S2.prototype = new F();

const s2 = new S2('lu')

// 寄生式继承 cloneObj equals Object.create -> 返回的直接为对象，而非上面的数组
const cloneObj = function(o) {
  const C = function() {};
  C.prototype = o;
  return new C;
}

const extendsObject = function(o) {
  const clone = cloneObj(o);
  clone.sayMethod = function() {
    console.log('in sayMethod')
  }
  return clone;
}

const s3 = extendsObject(new F('lu'))

// 寄生组合式继承
const extendsObjects = function(subType, superType) {
  const prototype = cloneObj(superType);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

const S4 = function(name) {
  F.call(this, name);
}

extendsObjects(S4, F);

const s4 = new S4('lu');



