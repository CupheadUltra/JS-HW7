
let array1 = [1, 2, 3];
array1[1] = 10;
console.log(array1); 

let array2 = ['Hello', 'World', 'JavaScript'];
array2.push('array');
console.log(array2); 

let array3 = [5, 10, 15];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}
console.log(sum); 

let array4 = [10, 20, 30, 40, 50];
for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
}

let array5 = ['apple', 'banana', 'pear', 'grape', 'pineapple'];
for (let i = 0; i < array5.length; i++) {
    if (array5[i].length > 5) {
        console.log(array5[i]);
    }
}

let array6 = [3, 45, 12, 67, 23, 89, 34, 90, 5, 1];
let max = array6[0];
for (let i = 1; i < array6.length; i++) {
    if (array6[i] > max) {
        max = array6[i];
    }
}
console.log(max); 

let array7 = [3, 8, 12, 7, 22, 45, 30, 11, 18, 5];
for (let i = 0; i < array7.length; i++) {
    if (array7[i] % 2 === 0) {
        console.log(array7[i]);
    }
}
