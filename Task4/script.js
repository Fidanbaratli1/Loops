//Verilmiş ədədin sadə və ya mürəkkəb olduğunu tapın.Əgər sadə ədəddirsə "prime", mürəkkəb ədəddirsə "composite" çap olunsun ekrana
var num=128;
if(num==0 || num==1){
    console.log(num + "is not prime and composite number")
}
else{
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        console.log(num + "is composite number");
        return;
    }
}
}
console.log(num + "is prime number")
    