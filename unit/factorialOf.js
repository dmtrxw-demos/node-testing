function factorialOf(n) {
  if (typeof n !== 'number') {
    throw new Error('Invalid parameter');
  }

  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

module.exports = factorialOf;
