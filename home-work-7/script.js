//task1
const buttonRemove = document.getElementById("text");
buttonRemove.addEventListener("click", ()=>buttonRemove.remove());

//task2
// button.addEventListener("click", () => alert("1")); adds event listener
// button.removeEventListener("click", () => alert("1")); then this line of code deletes previously added event listener 
// button.onclick = () => alert(2); only this option for handling events exists for this button, and thus, after pressing this button
//this code will be executed

//task3
array = [
    {
        author:"Айсулу Толеубекова",
        text:"Казахстанские степи хранят историю кочевых народов, чьи традиции живут в сердцах их потомков."
    },
    {
        author:"Ерлан Жумагалиев",
        text:"Алматинские яблони символизируют плодородие, богатство природы и культурное наследие южной столицы."
    },
    {
        author:"Данияр Сарсенбаев",
        text:"Энергия ветра в Казахстане превращается в возобновляемый источник, который движет страну к экологическому будущему."
    }
]
const container = document.getElementById("container");
let count = 0;
array.forEach((item)=>{
    container.innerHTML += `
            <div style = "height: 200px; width: 200px;   border-style: solid; border-color: green;">
                <div style = "width:15px; height10px; border-style:solid; vorder-color:black;" class ="exitButtons" ">X</div>
                <h3>${item.author}</h3>
                <p>>${item.text}</p>
            </div>
    `;
});


const exitButtons = document.getElementsByClassName("exitButtons");
for(let button of exitButtons){
    button.addEventListener("click", ()=>{
        button.parentElement.remove()
    })
        
}