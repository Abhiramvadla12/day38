var numbers = [1, 2, 3, 4, 5];//initializing an array numbers
var reverse = [];//declaring a array reverse
//printing array into reverse
var reverse_number = [];
var i = numbers.length-1;
do{
    reverse = reverse + numbers[i];
    i--;
}
while(i >= 0);
console.log("array before reversing :",numbers);
console.log("reversed elements in string:",reverse.split(''));
for(i=0;i<reverse.length;i++){
    reverse_number[i] = Number(reverse[i]);
}
console.log("reversed elements in Numbers",reverse_number);
