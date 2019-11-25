import { checkIsInvalid, handleDigit, buildMakeResults } from './../src/js/roman.js';

describe('checkIsInvalid', () => {

  test('should return "Not a number!!!" with a non numerical value', () => {
    expect(checkIsInvalid('dsfg')).toEqual('Not a number!!!');
  });

  test('should return "TOO BIG!!!" with a number over 4000 is entered', () => {
    expect(checkIsInvalid('4001')).toEqual("TOO BIG!!!");
  });

  test('should return false if the user inputs a valid input', () => {
    expect(checkIsInvalid(1234)).toEqual(false);
  });

});

describe('Handle Digits', () => {

  test('should return "" is digit is equal to 0', () => {
    expect(handleDigit(0)).toEqual("");
  });

  test('should return "III" for 3 "VI" for 6 and "IX" for 9', () => {
    expect(handleDigit(3,["X","V","I"])).toEqual("III");
    expect(handleDigit(4,["X","V","I"])).toEqual("IV");
    expect(handleDigit(6,["X","V","I"])).toEqual("VI");
    expect(handleDigit(9,["X","V","I"])).toEqual("IX");
  });

});

describe('Build Make Results', () => {

  test('should return string roman numerals when given a valid array of integers', () => {
    const makeResult = buildMakeResults([1,4,5,3]);
    expect(makeResult()).toEqual('MCDLIII');
  });

});
