function sum(a, b, c,d,e) {
    return a + b + c +d;
  }
  const numbers = [1, 2, 3,4];
  const result = sum(...numbers); // result is 6
  console.log(result);


  const obj1 = { a: 1, b: 4 ,c: 6};
const obj2 = { b: 5, };
const mergedObject = { ...obj2 ,...obj1 };
// mergedObject is { a: 1, b: 3, c: 4 }
console.log(mergedObject);

var x; // Declaration is hoisted
console.log(x); // undefined
x = 5; // Assignment still happens where you expect it


let b = 30;

// Adding 'z' as a property of 'window'
window.a = b;

console.log(window.a); // 30