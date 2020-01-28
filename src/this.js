let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
    console.log( this.name );
}

user.func = sayHi;
admin.f = sayHi;

user.func();
admin.f();

admin['f']();
