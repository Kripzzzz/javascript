/*function throwsError() {
throw new Error('Sorry...');
}
function cleansUp() {
try {
throwsError();
} 
finally {
console.log('Performing clean-up');
}
}
cleansUp();*/
function idLog(x) {
    try {
    console.log(x);
    return 'result';
    
    }
     
    finally {
        
    console.log("FINALLY");
    }
    console.log('anything else');
    }
idLog('arg');



var count = 0;
function countUp() {
try {
return count;
} finally {
count++; // (1)
}
}
countUp();