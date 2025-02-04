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
  const digits = Math.abs(num).toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

const getNumberProperties = async (number) => {
  // Check if input is a valid integer
  if (!/^-?\d+$/.test(number)) {
    return { number: "alphabet", error: true };
  }

  number = parseInt(number);
  const properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  // Ensure `digit_sum` is always positive (ignores the negative sign)
  const digitSum = Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return {
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties,
      digit_sum: digitSum,
      fun_fact: response.data,
    };
  } catch (error) {
    return { number, error: true };
  }
};

module.exports = getNumberProperties;
