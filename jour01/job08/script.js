function ifPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sommenombrespremiers(a, b) {
  if (ifPrime(a) && ifPrime(b)) {
    console.log(a + b);
  } else {
    console.log(false);
  }
}

sommenombrespremiers(2, 3);