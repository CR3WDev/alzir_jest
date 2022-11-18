const sum_all_numbers = (numbers) => {
    let sum_numbers = 0;
    numbers.map((number) => {
      sum_numbers = number + sum_numbers;
    });
    return sum_numbers;
};
module.exports = { sum_all_numbers }