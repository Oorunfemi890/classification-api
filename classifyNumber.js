const axios = require("axios");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};
const getNumberProperties = async (number) => {
  if (isNaN(number)) {
    return { error: true, number };
  }

  number = parseInt(number);
  const properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math?json`);
    return {
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties,
      digit_sum: number.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0),
      fun_fact: response.data.text 
    };
  } catch (error) {
    return { number, error: true };
  }
};

module.exports = getNumberProperties;
