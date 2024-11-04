let user = {
    name:prompt("имя?"),
    year:prompt("возраст?"),
    isMale:confirm("мужчина?")
};
console.log(`the user's name is ${user.name}`);
console.log(`the user's age is ${user.year}`);
if(user.isMale == true){
    console.log("the user' gender is male");
}else{
    console.log("the user'gender is female");
}



let num = prompt("enter any number");
if(num > 100){
    alert(`The entered number is higher than 100 --> ${num}`);
}else{
    alert(`the entered number is lower than 100 -->${num}`);
}


let a = +prompt('a?', '');
console.log(a);
a = +a;
console.log(a);

switch(a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        alert("not 0, 1, 2, 3");
}

let sumEven =0;

for(let i = 1; i <= 100; i++){
    if(i%2 == 0){
        sumEven+=i;
    }
}
console.log(sumEven);
let i =0
while(i<3){
    alert( `number ${i}!` );
    i++;
}
