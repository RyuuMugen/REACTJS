function removeFromArray(array, deleteItem) {
  let count = 0;
  for (let i = 0; i < array.length; i ++){
      if (array[i] === deleteItem)  {
          count ++;
          break
      }
  }
  if(count>0){
    let a = array.indexOf(deleteItem)
    const rm = array.splice(a, 1);
    return array
  }
  else{
    return deleteItem + " not in array"
  } 
}
console.log(removeFromArray([1,2,3,4],3))
console.log(removeFromArray([1,2,3,4],5))