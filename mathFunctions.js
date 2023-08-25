
function findMode(arr) {
    if (arr.length === 0) {
        return null;
      }
    
    const frequencyCounter = arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  
    let highestFrequency = 0;
    let mode = null;
  
    for (const number in frequencyCounter) {
      if (frequencyCounter[number] > highestFrequency) {
        highestFrequency = frequencyCounter[number];
        mode = parseInt(number);
      }
    }
  
    return mode;
  }

function findMean(arr){
    if (arr.length === 0) {
        return null;
      }
    
      const sum = arr.reduce((acc, val) => acc + val, 0);
      const mean = sum / arr.length;
      
      return mean;
    }

function findMedian(arr){
    if (arr.length === 0){
        return null;
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const median = (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    return median;
  } else {
    return sortedArr[middleIndex];
  }
}

 
module.exports = {
    findMode,
    findMean,
    findMedian
};