/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  let expected = [...heights].sort((a, b) => a - b);
  let counter = 0;
  heights.forEach((element, index)=> {
    if(element != expected[index]){
      counter++;
    }
  });
  return counter;
};
const output = heightChecker([5,1,2,3,4])
console.log(output);