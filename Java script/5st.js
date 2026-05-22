//practice question 1 on looping
/*for (let num=0;num<=100;num++){
    if(num%2==0){
        console.log("even numbers",num);
    }
*/

//practice question 2
let gamenum=40;
let usernum=prompt("Guess  the game num");

while(usernum !=gamenum){
    usernum=prompt("you guess the wrong number,try again");

}

console.log("congratulations,you guess the correct gamenum");