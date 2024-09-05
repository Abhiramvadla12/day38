var numbers = [3, 6, 9, 12, 15, 18];// initializing an array
var even = 0;//initializating a varible for storing even sum
var i = 0;
do{
    if(numbers[i]%2==0){
        even = even + numbers[i];
    }
    i++;
}
while(i < numbers.length);
console.log("sum of even numbersin an array is :",even);