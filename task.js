// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');


/**
 * script start
 * script end
 * promise1
 * promise2
 * setTimeout
*/

console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
console.log('script end')

/**
 * script start
 * async2 end
 * Promise
 * script end
 * promise1
 * promise2
 * async1 end
 * setTimeout
*/


// console.log('script start');

// queueMicrotask(() => {
//   console.log('in queueMicrotask');
// })

// Promise.resolve().then(() => {
//   console.log('in promise 3');
// }).then(() => {
//   console.log('in promise 4');
// })

// new Promise((resolve) => {
//   console.log('in promise 1');
//   resolve()
// }).then(() => {
//   console.log('in promise 2');
// })

// process.nextTick(() => {
//   console.log('in nextTick');
// });

// console.log('script end');

/**
 * script start
 * in promise 1
 * script end
 * in nextTick
 * in promise 3
 * in promise 2
 * in promise 4
*/
