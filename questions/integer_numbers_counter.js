const is_integer = (n) => {
    return n % 1 == 0;
  };
  const integer_numbers_counter = ([numbers,last_number]) => {
    let counter = 0;
    for (const key in numbers) {
      if (!is_integer(numbers[key])) continue;
      if (numbers[key] < 1 || numbers[key] > last_number) continue;
      counter++;
    }
    return counter;
};
module.exports = { integer_numbers_counter }