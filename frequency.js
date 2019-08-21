function getFreq(string){
  const s = string.toLowerCase().split('')
    .reduce((acc, curr) => {
      if(acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  const unique = Object.keys(s).length;
  const average = string.length/unique;
  s.unique = unique;
  s.average = average;

  let highest = '';
  let highVal = 0;
  Object.keys(s).forEach(k => {
    if (s[k] > highVal){
      highVal = s[k];
      highest = k;
    }
  })
  s.highest = highest;
  s.highVal = highVal;
  console.log(s);
  return s;

}


module.exports = getFreq;