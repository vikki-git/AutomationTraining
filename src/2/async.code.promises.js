const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('1');
console.log('2');

fetchData().then(result => {
    console.log('fetched1 ' + result)
    fetchData().then(result => {
        console.log('fetched2 ' + result)
    })
}).catch(err => console.error(err))

fetchData().then(result => {
    console.log('fetched3 ' + result)
    return fetchData();
}).then(result => {
    console.log('fetched4 ' + result)
}).catch(err => console.error(err))

fetchData().then(result => console.log('fetched5 ' + result)).catch(err => console.log(err))

