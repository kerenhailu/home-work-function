// -------- ans 1 ------------!
// number = [1,2,3,4,5] 
// function marach(number){
//   number.reverse();
//   console.log(number)
//   return(number)
// }
// marach(number)
// -------- ans 1 ------------
// var number1 = [1, 2, 3, 4, 5]
// function mar(number1) {
//     var Array = []
//     for (var i = number1.length - 1; i >=0; i--) {
//         Array.push(number1[i])

//     }return (Array)
// }
// var A = mar(number1)
// console.log(A)

// -------- ans 2 ------------
// var keren = [0,5,4,3,4,0,1,4,0,4]
// function ten(num) {
//     for (var i = 0; i < num.length; i++) {
//        if (num.length == 10){
//           num.splice(i+3,0 ,"-")
//           num.splice(i+7,0 ,"-") 
//        }
//        else if (num.length==9){
//         num.splice(i+2,0 ,"-")
//         num.splice(i+6,0 ,"-")
//        }
//     }return(num)
// }
// // var fun = ten(keren)
// console.log(ten(keren));

// -------- ans 3 ------------?
// מספר שמופיע הכי הרבה פעמים
function news(array) {
    var counter = 0;
    var char
    var max = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] = array[j]) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter;
            char = array[i]
        }

    } return char
}
var count = [2, 4, 2, 4, 2, 9, 6, 8, 4]
var counters = news(count)
console.log(counters)

// -------- ans 4 ------------!
// var result = 1;
// function azeret(cefel) {
//     for (var i = 1; i <= cefel; i++) {
//         result = result * i;
//     } 
//     return result;
// }

// console.log(azeret(5));

// -------- ans 5 ------------!
// function numbers (x , y){
//     a = x+y
//     return(a)
// }
// var fun = numbers(8 , 7)
// console.log(fun);
// -------- ans 5.2 ------------!
// function minosh(x , y){
//     b = x-y
//     return(b)
// }
// var funt = minosh(8 , 7)
// console.log(funt)
// -------- ans 5.3 ------------!
// function cefell(x , y){
//     c = x*y
//     return(c)
// }
// var func = cefell(8 , 7)
// console.log(func)
// -------- ans 5.4 ------------!
// function hilok(x , y){
//     d = x/y
//     return(d)
// }
// var funct = hilok(10 , 5)
// console.log(funct)











