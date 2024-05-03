test('heap test', () => {
        const heap = process.memoryUsage().heapUsed;
        let heap_obj = [1, 2, 3, 4, 5];
        const diff_mem = process.memoryUsage().heapUsed - heap;
    expect(diff_mem).toBeGreaterThan(0);
    console.log(heap_obj);
    })

