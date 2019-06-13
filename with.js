/*var obj = { first: 'John' };
with (obj) {
console.log('Hello '+first); // Hello John
}*/

//function foo() { 'use strict'; with ({}); }
var foo;
foo.bar.baz.bla = 123;
foo.bar.baz.yadda = 'abc';
(function () {
    var b = foo.bar.baz;
    console.log('Hello '+b.first+' '+b.last);
    }());