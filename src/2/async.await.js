const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 2000);
    });
    return promise;
};

(async () => {
        const a = await fetchData();
        const b = await fetchData();
        const e = await fetchData();
        const f = await fetchData();
        const g = await fetchData();
        console.log('1 ' + a)
        console.log('2 ' + b)
        console.log('2-2 ' + e)
        console.log('2-3 ' + f)
        console.log('2-4 ' + g)
    }
)();

(async () => {
        const c = fetchData();
        const d = fetchData();
        const h = fetchData();
        const i = fetchData();
        const j = fetchData();
        const [cvalue, dvalue, hvalue, ivalue, jvalue] = await Promise.all([c, d, h, i, j])
        console.log('3 ' + await c)
        console.log('4 ' + await d)
        console.log('4-2 ' + await h)
        console.log('4-3 ' + await i)
        console.log('4-4 ' + await j)
        console.log('5 ' + cvalue)
        console.log('6 ' + dvalue)
        console.log('6-2 ' + hvalue)
        console.log('6-3 ' + ivalue)
        console.log('6-4 ' + jvalue)
    }
)();

