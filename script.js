const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function displayBox() {
  let displayBlackBox = document.getElementById("black-box");
  let hideButton = document.getElementById("click-here");
  displayBlackBox.style.display = 'block';
  hideButton.style.display = 'none';
}

function addTask(){
  if(inputBox.value.trim() === ''){
    alert("scary virus pop up");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let button = document.createElement("button");
    button.innerHTML = "\u00d7";
    button.addEventListener("click", function() {
      removeTask(li);
    })
    li.appendChild(button);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

inputBox.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    document.getElementById("add-button").click();
  }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();