// import { formatDistanceToNow } from 'date-fns';

// console.log(formatDistanceToNow("2023-12-16T20:17:57.688Z", Date.now(), {addSuffix: true}));

// let a = [1, 2, 3, 1, 1, 2, 1]

// let b = new Set(a)

// let ay = [...b].map(v => {
//     console.log(v)
//     return false
// })
// var binaryData = Buffer.from('abcd', 'utf-8');
// var binaryData2 = Buffer.from('abc', 'utf-8');
// console.log(binaryData.equals(binaryData2));  
// <Buffer 61 62 63>


let obj = {
    one: 10,
    two: 20,
}

function exchange (a){
    a.one = 50000;
}

exchange(obj)

console.log(obj)