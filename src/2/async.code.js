const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    })

}, 1000);

console.log('1');
console.log('2');
