function repeatString(string, num) {
  if(!string || !num) return;
  let result = "";
  for(let i=0; i<num; i++){
        result += string;
  }
  return result
}
console.log(repeatString('hey',3))