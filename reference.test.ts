function incrementArray(array: number[]) {
    for (let i = 0; i < array.length; i++) { 
        array[i]++;
    }
}


test('Reference type test', () => {
    let value = [1, 2, 3];
    incrementArray(value);
    expect(value).toEqual([2, 3, 4]);
});

