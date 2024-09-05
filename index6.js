aplhabets = ['a', 'b', 'c', 'd', 'e'];
var reverse = [];
var reverse_number = [];
var i = aplhabets.length-1;
while(i >= 0){
    reverse = reverse + aplhabets[i];
    i--;
}
console.log("array before reversing :",aplhabets);
console.log("array after reversing :",reverse.split(''));

