const is_prime = (value) => {
    let is_prime_number = true;
    for (let i = 1; value - 1 > i; i++) {
      if (value % (i + 1) === 0) is_prime_number = false;
    }
    return is_prime_number;
};

module.exports = { is_prime }