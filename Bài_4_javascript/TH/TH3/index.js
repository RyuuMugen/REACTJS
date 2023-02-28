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
    arr1 = [1, 7, 3, 4, 5]
    arr2 = []
    console.log("mang day du", arr1)
    console.log("so lon nhat trong mang ", findMaxNumber(arr1));
    console.log("mang rong", arr2)
    console.log("so lon nhat trong mang ", findMaxNumber(arr2));