import { sum } from "../sums"

test('Sum function will calculate sum of two numbers', () => { 
    const result = sum(3,4);

    //Assertion 
    expect(result).toBe(7);
 })