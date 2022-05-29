let input=document.getElementById("myInputId");
let button=document.getElementById("myButtonId");
let toDo=document.getElementById("toDoContainer");
let myCleanButton=document.getElementById("myClean");

button.addEventListener("click",addFunction)

function addFunction(){
    var task=document.createElement("li");
    task.innerText =input.value;
    toDo.appendChild(task);
    input.value="" ;
    task.addEventListener("click", lineFunction);
    function lineFunction(){
        task.style.textDecoration="line-through";    
    }
    task.addEventListener("dblclick",cleanFunction);
    function cleanFunction(){
        toDo.removeChild(task)
    }

myCleanButton.addEventListener("click",cleanFunction)

function cleanFunction(){
    let allClean=document.querySelector("li")
    toDo.removeChild(allClean)
}

}