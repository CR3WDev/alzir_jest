const fibonacci = (length) => {
    let numbers_fibonacci = [0, 1];
    let numbers_to_add = length - 2;

    switch (length) {
        case 1 : return [0];
        default: {
            if(length <= 0) return [];
            for (let i = 0; i < numbers_to_add; i++) {
                let next_number = numbers_fibonacci[i] + numbers_fibonacci[i + 1];
                numbers_fibonacci.push(next_number);
            }
        }
    }

    return numbers_fibonacci;
};

module.exports = { fibonacci };