let a = {
    value: 2,
    toString: function () {
        return ++this.value
    }
}

let b = 2;

if (a == 3 && a == 4) {
    console.log(typeof a)
    console.log('обожаю javascript!')
}
