var arr = [ 'a', 'b', 'c' ];
function printall(arr){

for (var i=0; i<arr.length; i++) {
console.log(arr[i]);
}
console.log(i)
}
printall(arr);

//for-in over indices
var arr = [ 'a', 'b', 'c' ];
arr.foo = true;
 for (var key in arr) { console.log(key); }

 //for-each
 const arr1 = ['cat', 'dog', 'fish'];
arr1.forEach(element => {
  console.log(element);
});
