
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

function check(a,b){
    if(findMinNumber(a)>findMinNumber(b) && findMaxNumber(a)<findMaxNumber(b)){
        console.log("canNest(",a,"," ,b,")")
        return true
    }else{
        console.log("canNest(",a,"," ,b,")")
        return false
    }
}
console.log(check([1,2,3,4],[0,10]))
console.log(check([1,2,3,4,13],[0,10]))