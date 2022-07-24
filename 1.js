    // every
    // filter
    // forEach
// from 
// join

/* Important */
// length
// concat
//fill
    // find
    // findIndex
// includes
// indexOf
// isArray
// push
// slice
// sort
// splice
// toString
//constructor

// let arr1 = new Array("hello"); //[0, 1]
// let arr2 = [1,2];
// console.log(arr1, "\n", arr2);

//******** */ array.length;
// let sabiya = arr1.length;
// console.log(sabiya); // 0,1 //1,2
//index will be starting from 0

//****** */ concat --concatenation //"h"+"e"="he"
// let arr1 = new Array(1,5,3); 
// let arr2 = new Array(4,2,6); 
// let arr3 = new Array(7,0,9); 
// console.log(arr1, "\n",arr2);
// let res = arr1.concat(arr2); //arr1 k andar arr2 daldo 
// let res = arr1.concat(arr2,arr3); //arr2 k andar arr1 daldo
// console.log(res);

/*fill */
// let arr1 = new Array(1,5,3,6,7,8); 
// let arr1 = [1,5,3,6,7,8]; 
// Array.fill(value, start index, end index )
//1st scenerio .fill('blue')---> pure blue
//2nd scenerio .fill('blue',2) ---> index 2 aur us k baad pure blue
//3rd scenerio .fill('blue',2,5)---> index 2,3,4 ku blue
// let res = arr1.fill('blue',5);
// console.log(res);

// /*find */ first element as per the condition
// let arr1 = new Array(1,5,3,6,7,8); 
// let res = arr1.find(e =>e>5);
// console.log(res);

//*includes*/ returns true / false if the given element is present or not 
// let arr1 = new Array(1,5,4,6,4,0,4,0); 
//.includes(value, start index)
// let res = arr1.includes(1,1);
// let res = arr1.includes(4,7);
// console.log(res);

// /**indexOf */ always finds first index
// let arr1 = new Array(1,5,5,5,4,0,4,0); 
// let res = arr1.indexOf(5);
// console.log(res);

//**isArray */ isArray? return true/false if the given args is array
// let arr1 = new Array(1,5,5,5,4,0,4,0); 
// let res = Array.isArray([1,2,3]);
// console.log(res);

//* push*/ 
// let arr1 = new Array(1,2,3); 
// arr1.push(4); //less computation
// arr1.unshift(4); //more computation
// console.log(arr1);

//*pop*/
// let arr1 = new Array(1,2,3); 
// arr1.pop();
// console.log(arr1);

// ***slice
// let arr1 = new Array(1,2,3,4,5,6); 
//.slice(start index, end index excluding)
// let res = arr1.slice(4,1);
// console.log(res);

// ***sort
// let arr1 = new Array('d','c','a',1,2,3,"A"); 
// let res = arr1.sort();
// console.log(res);

// ***splice
//  1   2   3   4   5   6
//  0   1   2   3   4   5
// let arr1 = new Array(1,2,3,4,6); 
//.splice(index, count?, item1 , item2....)
// arr1.splice(2,2,"kiwi");
// console.log(arr1);

// ***toString
// let arr1 = new Array('h','e'); 
// let res = arr1.toString()
// console.log(res );

//***constructor
// let arr1 = 1
// let arr1 = new Boolean(true); 
// let res = arr1.toString();
// let res = arr1.constructor;
// console.log(res);
// console.log(arr1, typeof arr1);

//**join */
// let a = ['hello'];
// let b = ['world'];
// let res = a.concat(b);
// let result = res.join(" ");
// console.log(result);

//**from */ converts only string to array
// let a  = Array.from("inam");
// let a  = Array.from("123");
// console.log(a);
