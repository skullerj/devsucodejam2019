
function sumzero(array){
  let workingArray = [...array];
  let result = [];
  let sum = 0;
  for(let i = 0; i < workingArray.length ; i++) {
    sum += workingArray[i];
    if(sum === 0 || sum === result[result.length - 1]){
      workingArray = workingArray.slice(i + 1);
      result.push(workingArray[0]);
      sum = 0;
      i = 0;
    }
  }
  return result;
}

console.log(sumzero([3, 4, -7, 5, -6, 2, 5, -1, 8]))