var r = [1,2,3,4,4,5,5];
/*for(i=0;i<r.length;i++){
    console.log(r[i]);
}*/
// var i=0;
// while(i < r.length){
//     console.log(r[i]);
//     i++;
// }
// var i=0;
// do{
//     console.log(r[i]);
//     i++
// }
// while(i < r.length);
x = "";
for(data in r){// "in" results in indexes
    x += r[data]+" ";

}
console.log(x);
x = "";
for(data of r){// "of" results in data values
    x += data+" ";

}
console.log(x);