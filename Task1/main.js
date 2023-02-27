//Ədəddəki ən böyük rəqəmi çap edin
var num=76519;
var large=0;
var rem=0;
while(num>0){
    rem=num%10;
    if(large<rem){
    large=rem;
}
num=num/10
}
console.log(large)