//task 1
let checkAge = (age) => (age > 18) ? true: confirm("Родители разрешили?");

//task 2
function pow(number, power){
    let sum = 1;
    for(let i = 0; i < power; i++){
        sum *= number;
    }
    return sum;
}

//task 3
let ask = (question, yes, no) => (confirm(question)) ? yes(): no();
  
//task 4
let arr = [5, 2, 1, -10, 8];
let a,b;
arr.sort((a,b) => b-a);



//task 5
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [ vasya1, petya1, masha1 ];
let names = users1.map(user => user.name);


let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map((item) => {
    return { fullName: [item.name, item.surname].join(' '), id: item.id };
});



let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr2 = [ vasya3, petya3, masha3 ];
function getAverageAge(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr2[i].age;
    }
    return sum/arr.length;
}



checkAge(prompt("write down your age"));// task1
alert(pow(Number(prompt("write down the number")), Number(prompt("write down the power of number"))));// task2
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );// task3
console.log(arr);// task4
alert( names ); // task5

alert( usersMapped[0].id ); //task6
alert( usersMapped[0].fullName );
alert( getAverageAge(arr2) ); 