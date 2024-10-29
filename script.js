const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list container");

function AddTask(){
    if (InputBox.value === ''){
        alert("Feild cannot be empty")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData();
}

ListContainer.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("Compleated");
        SaveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function ShowTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

ShowTask();