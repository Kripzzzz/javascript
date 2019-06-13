console.log(foo());
function foo() {
    var name = 'kripa \ kalai'
return name;
}
//handling mising and extra parameters
console.log(logArgs('Hello','34','people'))
function logArgs() {
    for (var i=0; i<arguments.length; i++) {
    console.log(i+'. '+arguments[i]);
    }
    }    
function sloppyFunc(param) {
        param = 'changed';
        return arguments[0];
        }
console.log(sloppyFunc('value'));
function strictFunc(param) {
    'use strict';
    param = 'changed';
    return arguments[0];
    }
    console.log(strictFunc('value'));

    
    function f() {
    g();
    }
    function g() {
    }