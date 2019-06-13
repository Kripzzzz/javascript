
function findEvenNumber(arr) {
    loop: { // label
            for (var i=0; i<arr.length; i++) {
            var elem = arr[i];
            if ((elem % 2) === 0) {
            console.log('Found: ' + elem);
            break loop;
            }
        }   
            console.log('No even number found.');
        }

        console.log('DONE');
}
var arr=[1,3,5,7,9];
var arr1=[2,3,4,5,6];
findEvenNumber(arr);
findEvenNumber(arr1);