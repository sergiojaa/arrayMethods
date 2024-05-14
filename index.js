// concat() method
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2))

// every() method 
// let arr = [
//     {
//         name:'anri',
//         age:24
//     },
//     {
//         name:'beqa',
//         age:33
//     },
//     {
//         name:'cotne',
//         age: 16
//     },
//     {
//         name:'ioseb',
//         age: 18
//     },
// ]
// yvela srulwlovania tu ara  shevamowmot
// console.log(arr.every((item)=> item.age > 18 ))

//filter
// let arr = [
//          {
//              name:'anri',
//              age:24
//          },
//          {
//              name:'beqa',
//              age:33
//          },
//         {
//             name:'cotne',
//              age: 16
//          },
//          {
//              name:'ioseb',
//              age: 18
//          },
//     ]
    // srulwlovani adamianebi gavfiltrot
    // let above18 = arr.filter((item) =>  item.age>18)
    // console.log(above18)
// find() method
// let arr = [
//     {
//         name:'anri',
//         age:24
//     },
//     {
//         name:'beqa',
//         age:33
//     },
//    {
//        name:'cotne',
//         age: 16
//     },
//     {
//         name:'ioseb',
//         age: 18
//     },
// ]
// let findElement = arr.find((person)=> person.name[0]==='i')
// console.log(findElement)

// findIndex()
// let arr = [
//     {
//         name:'anri',
//         age:24
//     },
//     {
//         name:'beqa',
//         age:33
//     },
//    {
//        name:'cotne',
//         age: 16
//     },
//     {
//         name:'ioseb',
//         age: 18
//     },
// ]
// let findIndex = arr.findIndex((person)=>person.age > 18
// )
// console.log(findIndex)  //????? array igive rcheba
//findLast()
// let arr = [
//     {
//         name:'anri',
//         age:24
//     },
//     {
//         name:'beqa',
//         age:33
//     },
//    {
//        name:'cotne',
//         age: 16
//     },
//     {
//         name:'ioseb',
//         age: 18
//     },
// ]
// let findLast = arr.findLast((person)=>person.age > 18
// )
// console.log(findLast) 
// indexOf()
// let arr = [
//     {
//         name:'anri',
//         age:24
//     },
//     {
//         name:'beqa',
//         age:33
//     },
//    {
//        name:'cotne',
//         age: 16
//     },
//     {
//         name:'ioseb',
//         age: 18
//     },
// ]
// let numArr = [10,23,89,]

// console.log(numArr.indexOf(10,2))
//join()
// let words = ['hello', 'world'] //gardavqmnat stringad
//array gardaiqmneba stringad
// let str = words.join(' ')
// console.log(str)

//lastIndexOf() იგივეა,

//reverse()
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // Expected output: "reversed:" Array ["three", "two", "one"]

//slice()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"] მეოთხეზე მდგარს აღარ ჭრის

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"] ბოლოდან მოყოლებული იწებს თვლას.
// //2 რასაც იზავდა იმის შებრუნებული ვერისაა,ბოლო 2ს ჭრის ეს.

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
//splice()
// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.splice(0,2));
// console.log(months)
//reduce()
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10
//some() ავხსენი word-ში
//sort()
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]
//map()
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]
//ლუწირიცხვების გამრავლება 
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x % 2 ==0 ? x  * 2 :x );
// // tu iyofa 2ze unaashtod, gaamravle 2ze,tuarada datove xado
// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]
//for each()
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.forEach((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]
//ჯამის დათვლა for eachით
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// let sum = 0
// const map1 = array1.forEach((x) => sum = sum + x);

// console.log(sum);
// // Expected output: Array [2, 8, 18, 32]
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let sumArr = [...arr1,...arr2]
// console.log(sumArr)//shevaerte arrayebi.es sxva temaa