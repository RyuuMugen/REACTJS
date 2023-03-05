function reverseString(string) {
  let arr = string.split('')
  let arr2 = arr.reverse().join("")
  return arr2
}


console.log(reverseString('Hello world'));

