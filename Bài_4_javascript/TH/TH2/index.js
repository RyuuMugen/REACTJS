function findMaxNumber(x, y){
    if(x > y){
      return x
    } else {
      return y
    }
  }
  var a = 25
  var b = 5
  let checkMax = findMaxNumber(a, b);
  console.log('2 so nhap vao la:' ,a,b)
  console.log('Max Number:',checkMax);