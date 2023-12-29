import { drawTriangle } from './task01.js';
// drawTriangle(5);

import { arraysAreEqual } from './task02.js';
// console.log(arraysAreEqual([1, 2], [1, 2]) ? 'True' : 'False');

import { countGs } from './task03.js';
// console.log(countGs("GG gros"));

import { fizzBuzz } from './task04.js';
// fizzBuzz(20); 

import { range } from './task05.js';
// console.log(range(1, 10, 2));
// console.log(range(19, 22));
// console.log(range(5, 2, -1));

import { objectsDeeplyEqual } from './task06.js';
const obj = {here: {is: "an"}, object: null, size: {m: 2, f: 5}, k: {h: {j: null, p: "ok"}}};
console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2, size: {m: 2, f: 5}, k: {h: {j: null, p: "ok"}}}));

import { arrayFiltering } from './task07.js';
// const toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const res = arrayFiltering(toFilter, function (value) {
// return value % 3 === 0;
// });
// console.log(res);