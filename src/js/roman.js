export const handleDigit = function(digit, letterArray) {
  if (digit === 0) {
    return '';
  } else if (digit === 9) {
    return letterArray[2] + letterArray[0];
  } else if (digit >= 5) {
    return letterArray[1] + letterArray[2].repeat(digit - 5);
  } else if (digit === 4) {
    return letterArray[2] + letterArray[1];
  } else if (digit > 0){
    return letterArray[2].repeat(digit);
  }
};

export const buildMakeResults = (array) => {
  const numeralObject = {
    3: ["X","V","I"], // ones
    2: ['C','L','X'], // tens
    1: ['M', 'D', 'C'], // hundreds
    0: ['', '', 'M'] // thousands
  };
  const makeResult = (string = '', i = 0) => {
    if (i === array.length) return string;
    const newString = string + handleDigit(array[i], numeralObject[i]);
    return makeResult(newString, i+1);
  };
  return makeResult;
};

export const checkIsInvalid = (stringInput) => {
  const numInput = parseInt(stringInput);
  if (isNaN(numInput)) return 'Not a number!!!';
  if (numInput >= 4000) return "TOO BIG!!!";
  return false;
};

export const prepAndRun = function(stringInput) {
  const isInvalid = checkIsInvalid(stringInput);
  if (isInvalid) return isInvalid;
  const array = stringInput.split('');
  const numArray = array.map(n => parseInt(n));
  while (numArray.length < 4) { numArray.unshift(0); }
  const makeResult = buildMakeResults(numArray);
  return makeResult();
};
