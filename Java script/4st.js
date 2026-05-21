//ternary  operators[condition? trueoutput:flaseoutput]
/*let age=25;

age>= 18? console.log("adult"):console.log("not adult");
*/
//practice question 1
let num=prompt("enter a number");
if (num%5===0){
    console.log(num,"is multiple of 5");
}else {
     console.log(num,"not multiple of 5");
}


//practice question 2
let score=prompt("enter your score(0-100)");
let grade;

if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
   grade="B"; 
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=0 && score<=49){
    grade="F";};
    console.log("score",grade);