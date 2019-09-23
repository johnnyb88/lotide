
const middle = function(arr) {
  let midArr = [];
  if (arr.length <= 2) {
    midArr.push();
  } else if (arr.length % 2 === 0) {
    midArr.push(arr[Math.floor((arr.length - 1) / 2)]);
    midArr.push(arr[Math.floor((arr.length) / 2)]);
  } else {
    midArr.push(arr[Math.floor(arr.length / 2)]);
  }
  console.log(midArr);
  return midArr;
};



module.exports = middle;