module.exports = function getZerosCount(number, base) {
  const realNumbers = getRealNumbers(base);
  const factorization = getFactorization(base, realNumbers);
  // your implementation
  const resultArray = [];

  for (let index = 0; index < factorization.length; index++) {
    const count = factorization[index];
    let zerosCount = 0;
    let nPow = 1;

    if (count == undefined ){
      continue;
    }
    
    do {
      countTemt = Math.floor(number / Math.pow(index, nPow));
      zerosCount += countTemt;
      nPow++;
    } while (countTemt >= 1);

    resultArray.push(Math.floor(zerosCount / count));
  }

  resultArray.sort(function (a,b) {
    return a-b;
  });

  return resultArray[0];
}

function getRealNumbers(base) {
  const realNumbers = [];
  for (let n = 2; n <= base; n++) {
    let nIsReal = true;
    for (let a = 2; a < n; a++) {
      if (n % a == 0) {
        nIsReal = false;
        break;
      }
    }
    if (nIsReal === true) {
      realNumbers.push(n);
    }
  }
  return realNumbers;
}

function getFactorization(base, realNumbers) {
  const factorization = [];
  let tempResult = base;
  for (let index = 0; index < realNumbers.length; index++) {
    const realNumber = realNumbers[index];

    while (tempResult % realNumber == 0) {
      factorization[realNumber] = (factorization[realNumber] || 0) + 1;
      tempResult = tempResult / realNumber;
    }
  }

  return factorization;
}