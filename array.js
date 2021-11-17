let etc = [1,2,3]

console.log(typeof [1, 2, 3]) // "object" 数组属于一种特殊的对象。
console.log(Object.keys(etc)) // 数组成员的键名是固定的（默认总是0、1、2...），因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。
console.log(etc['2']) // 键是字符

//or
let arrayName = Array("value1","value2",...etc);

console.log(arrayName)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNum = numbers.filter(ele => ele % 2 == 0)
                        .map(ele => ele ** 2)
console.log("even: ", evenNum);

let [firstName, lastName] = ['Foo', 'Bar']
console.log(firstName,lastName)

var a = [undefined, 'ddd', undefined];
// var b = a
var b = [...a]

b.forEach(function (x, i) {
  console.log(i + '. ' + x);
  if (i === 1){
      delete b[i]
  }
});
console.log(a)


