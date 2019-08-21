function divide(a, b) {
  if (b == 0) {
    throw new Error('Cannot divide by 0');
  }

  return a / b;
}

function sort(list) {
  for(let i = 2; i < list.length; i++){
    let j = i;
    while(j > 0 && list[j - 1] > list[j]){
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;
      j--;
    }
  }
  return list;
}

function sum(arr) {
  return new Promise((resolve, reject) => {
    const ans = arr.reduce((acc, curr) => {
      const num = parseFloat(curr);
      return acc + (Number.isNaN(num) ? 0 : num);
    }, 0);
    resolve(ans);
  });
}

function isEven(n) {
  return n % 2 == 0;
}


module.exports = {divide, sort, sum, isEven};