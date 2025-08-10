// Question 1
function triangle(){
    for (let i = 1; i <=5; i++) {
        let pattern="";
        for (let j = 1; j <= i; j++) {
            pattern+="*"+' ';
        }
        console.log(pattern);
    }
}
triangle();
// Question 2
function fizzbuzz(){
    for (let i = 1; i <=45; i++) {
        if (i%3==0&&i%5==0) {
            console.log(i + ' FizzBuzz');
        } else if(i%3==0){
            console.log(i+' Fizz');
        }else if(i%5==0){
            console.log(i+' Buzz');
        }
    }
}
fizzbuzz();
// Question 3
function Sum() {
    var numbersarray=[1,13,22,123,49];
    let sum=0;
    for (let i of numbersarray) {
        sum+=i;
    }
    console.log(sum);
}
Sum();
// Question 4
function SumArray(){
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
    let sum1 =0;
    let sum2 = 0;
    for (let i of arr_1) {
        sum1+=i;
    }
    for (let i of arr_2) {
        sum2+=i;
    }
    let sum=sum1+sum2;
    console.log(sum);
}
SumArray();
// Question 5
function reverse(arr) {
    let newarr=[];
    for (let i=arr.length-1;i>=0;i--) {
    newarr.push(arr[i]);
}
console.log(newarr);
}
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
reverse(arr);