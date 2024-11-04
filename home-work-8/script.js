//task 1
function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(), time);
    })
}

const time = (+prompt("напишитите любое количество секунд для работы promis-a"))*1000;
delay(time).then(() => alert(`выполнилось через ${time/1000} секунды`));
//task 2
//After the execution of resolve, the function stops its work, and any code written below it will not be executed.
// let promise = new Promise(function(resolve, reject) {
//     resolve(1);                                                 
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);    alert is equal to 1 

//task3
//короче для обоработки resolve and reject они эквиваленты, но есть нюанс по обработке ошибок, которые сработали внутрий then, то есть 
// если ошибка случилось в f1 в конструкции promise.then(f1,f2), то f2 не отработает ее, но в слаучае этой констркуции 
//promise.then(f1).catch(f2) ошибка будет отработана.