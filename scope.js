var x = "global";
x='kripa'
function f() {
var x = "local";
console.log(x); // local
}
f();
console.log(x); // global
function main() {
    { // block starts
    var foo = 4;
    } // block ends
    console.log(foo); // 4
    }
console.log(main());
