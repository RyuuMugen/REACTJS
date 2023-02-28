var arr1 = [1,2,3,4]
var arr2 = [0,10]
function findMaxNumber(array) {
    if (!array || !array.length) return "Lỗi";
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
    max = array[index];
    }
    }
    return max;
}
function findMinNumber(array) {
    if (!array || !array.length) return "Lỗi";
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
    if (min > array[index]) {
    min = array[index];
    }
    } 
    return min;
}
var a = findMinNumber(arr1)
var b = findMinNumber(arr2)
var c = findMaxNumber(arr1)
var d = findMaxNumber(arr2)
console.log("canNest(",arr1,"," ,arr2,")")

function check(){
    if(a>b && c<d){
        return true
    }else{
        return false
    }
}
console.log(check())