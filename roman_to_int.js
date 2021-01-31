function isArgGiven() {
  return process.argv.length > 2;
}

function getRomanNumeral() {
  return process.argv[2];
}

function romanCharToIntVal(char) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  return map[char] || 0;
}

function convert(roman) {
  let total = 0;
  let subtotal = 0;
  let lastChar = null;

  for (let i = 0; i <= roman.length; i++) { //this intentionally runs n+1 times
    let curChar = roman[i] || '';
    let valueOfCurChar = romanCharToIntVal(curChar);
    let valueOfLastChar = romanCharToIntVal(lastChar);

    if (!lastChar || curChar === lastChar) {
      subtotal += valueOfCurChar;
    } else {
      if (valueOfCurChar > valueOfLastChar) {
        total += valueOfCurChar - subtotal;
        subtotal = 0;
      } else {
        total += subtotal;
        subtotal = valueOfCurChar;
      }
    }

    lastChar = curChar;
  }

  return total;
}

if (isArgGiven()) {
  let roman = getRomanNumeral();
  let result = convert(roman);

  if (result !== null) {
    console.log(roman + ' => ' + result);
  } else {
    console.log('"' + roman + '" is an invalid roman numeral');
  }
} else {
  console.log('Please pass a roman numeral in the first argument of the command');
}
