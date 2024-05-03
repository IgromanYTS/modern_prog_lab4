import gc from "js-gc";

test('test gc', () => {
    let obj: any = {data: "2"};
    const memmory = process.memoryUsage().heapUsed;
    obj = null;
    gc();
    const memmory_after = process.memoryUsage().heapUsed;
    const diff = memmory_after - memmory;
    expect(diff).toBeLessThan(0);
});