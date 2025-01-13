const input_box = document.getElementById('input-box')
const list_container = document.getElementById('list-container')

function addTask(){
    if(input_box.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        let span = document.createElement('span');

        li.innerText = input_box.value;
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        list_container.appendChild(li);
        input_box.value = '';

        saveData();
    }
}

list_container.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false)

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function renderList(){
    list_container.innerHTML = localStorage.getItem("data");
}

renderList();
