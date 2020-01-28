function Calc(val) {
    let value = val;

    this.add = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value += val;
        }
    }

    this.subs = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value -= val;
        }
    }

    this.getValue = function () {
        return value;
    }

    this.setValue = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value = val;
        }
    }
}

function MathCalc(val) {
    Calc.call(this, val);

    this.cos = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            this.setValue(Math.cos(val));
        }
    }

    this.sqrt = function () {
        this.setValue(Math.sqrt(this.getValue(this.value)));
    }
}

var c = new Calc(0);
var m = new MathCalc(0);

c.add(5);
console.log(c.getValue());
c.subs(5);
console.log(c.getValue());
c.setValue(5);
console.log(c.getValue());

m.add(5);
console.log(m.getValue());
m.subs(5);
console.log(m.getValue());
m.setValue(5);
console.log(m.getValue());
m.cos(5);
console.log(m.getValue());
m.sqrt();
console.log(m.getValue());
