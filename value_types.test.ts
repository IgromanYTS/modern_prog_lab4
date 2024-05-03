function increment(value: number) {
    value++;
}


test('incrementing value has no effect because argument was passed by value (copied)', () => {
    let value = 2;
    increment(value);
    expect(value).toBe(2);
});

test('DELETE ME: just a multiplication test', () => {
    let res = multiply(2, 3);
    expect(res).toBe(6);
});

function multiply(a: number, b: number) {
    return a * b;
}