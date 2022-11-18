const { is_prime } = require("./questions/is_prime.js");
const { sum_all_numbers } = require("./questions/sum_all_numbers.js");
const { fibonacci } = require("./questions/fibonacci.js");
const { mdc } = require("./questions/mdc.js");
const { integer_numbers_counter } = require("./questions/integer_numbers_counter.js");


const is_prime_values = [10,97,7,3];
const is_prime_results = [false,true,true,true]
const sum_all_numbers_values = [[1,2,3,4],[97,20,30],[7,3,2,0],[50,40,30]];
const sum_all_numbers_results = [10,147,12,120]
const fibonacci_values = [1,-2,3,2];
const fibonacci_results = [[0],[],[0,1,1],[0,1]]
const mdc_values = [[10,20],[30,60],[2,4],[3,9]];
const mdc_results = [10,30,2,3]
const integer_numbers_counter_values = [[[10,20],0],[[30,3.5,3,60],10],[[2,4],25],[[3,9],2]];
const integer_numbers_counter_results = [0,1,2,0]

test('is_prime deve retornar apenas boleanos', ()=>{
    expect(is_prime_results.length).toBe(is_prime_values.length)
    for(let i = 0; i < is_prime_values.length;i++) {
        expect(typeof is_prime(is_prime_values[i]) === 'boolean').toBe(true);
    }
}) 
test('is_prime deve retornar as respostas corretas', () => {
    expect(is_prime_results.length).toBe(is_prime_values.length)
    for(let i = 0; i < is_prime_values.length;i++) {
        expect(is_prime(is_prime_values[i])).toBe(is_prime_results[i])
    }
})
test('sum_all_numbers deve retornar apenas numeros', ()=>{
    expect(sum_all_numbers_results.length).toBe(sum_all_numbers_values.length)
    for(let i = 0; i < sum_all_numbers_values.length;i++) {
        expect(typeof sum_all_numbers(sum_all_numbers_values[i]) === 'number').toBe(true);
    }
}) 
test('sum_all_numbers deve retornar as respostas corretas', () => {
    expect(sum_all_numbers_results.length).toBe(sum_all_numbers_values.length)
    for(let i = 0; i < sum_all_numbers_values.length;i++) {
        expect(sum_all_numbers(sum_all_numbers_values[i])).toBe(sum_all_numbers_results[i])
    }
})
test('fibonacci deve retornar apenas arrays', ()=>{
    expect(fibonacci_results.length).toBe(fibonacci_values.length)
    for(let i = 0; i < fibonacci_values.length;i++) {
        expect(Array.isArray(fibonacci(fibonacci_values[i]))).toBe(true);
    }
}) 
test('fibonacci deve retornar as respostas corretas', () => {
    expect(fibonacci_results.length).toBe(fibonacci_values.length)
    for(let i = 0; i < fibonacci_values.length;i++) {
        expect(fibonacci(fibonacci_values[i])).toStrictEqual(fibonacci_results[i])
    }
})
test('mdc deve retornar apenas numeros', ()=>{
    expect(mdc_results.length).toBe(mdc_values.length)
    for(let i = 0; i < mdc_values.length;i++) {
        expect(typeof mdc(mdc_values[i]) === 'number').toBe(true);
    }
}) 
test('mdc deve retornar as respostas corretas', () => {
    expect(mdc_results.length).toBe(mdc_values.length)
    for(let i = 0; i < mdc_values.length;i++) {
        expect(mdc(mdc_values[i])).toBe(mdc_results[i])
    }
})
test('integer_numbers_counter deve retornar apenas numeros', ()=>{
    expect(integer_numbers_counter_results.length).toBe(integer_numbers_counter_values.length)
    for(let i = 0; i < integer_numbers_counter_values.length;i++) {
        expect(typeof integer_numbers_counter(mdc_values[i]) === 'number').toBe(true);
    }
}) 
test('integer_numbers_counter deve retornar as respostas corretas', () => {
    expect(integer_numbers_counter_results.length).toBe(integer_numbers_counter_values.length)
    for(let i = 0; i < integer_numbers_counter_values.length;i++) {
        expect(integer_numbers_counter(integer_numbers_counter_values[i])).toBe(integer_numbers_counter_results[i])
    }
})