//task1
let table = document.getElementById("age-table");
//or
table = document.querySelector("#age-table");
//task2
let labels = document.querySelectorAll("#age-table #age-list label");
//or
labels = table.getElementsByTagName("label");
//task3
let firstTd = table.getElementsByTagName("td")[0];
//task4
const formSearch = document.getElementsByName("search")[0];
//task5
const formInputFirst = formSearch.getElementsByTagName("input")[0];
//task6
let formInputLast = formSearch.getElementsByTagName("input");
formInputLast = formInputLast[formInputLast.length-1];


//task7

let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert( body.firstChild.data ); // ответ BODY: body.tagName == "BODY" и следовательно на html страницу выводится комментарии с контентом BODY, но также из за того, что тут стоит data тут выводится только само значение 