let math = {
  multiply: multiply
};

function multiply(number1, number2) {
  return new Promise((resolve, reject) => {
    return resolve(number1 * number2);
  });
};

module.exports = math;
