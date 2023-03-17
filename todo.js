const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

if(localStorage.getItem("todos")){
    list.innerHTML = localStorage.getItem("todos");
  }

function addItem() {
    const value = input.value.trim();
    if(value !== ""){
        const li = document.createElement("li");
        li.innerHTML = `${value} <button class="deleteBtn">Delete</button> <button class="editBtn">Edit</button>`;
        list.prepend(li);

        localStorage.setItem("todos", list.innerHTML);

        input.value = "";
    }
};

addBtn.addEventListener("click", addItem);

  function deleteAndEditItem(event) {
    const target = event.target;

    if(target.classList.contains("deleteBtn")){
      const li = target.parentElement;
      li.remove();
      localStorage.setItem("todos", list.innerHTML);
    }
    if(target.classList.contains("editBtn")){
      const li = target.parentElement;
      const text = li.firstChild.textContent.trim();
      const newText = prompt("Edit item", text);
    
      if(newText !=='')
      li.firstChild.textContent = newText

      localStorage.setItem("todos", list.innerHTML);
    }
  };
  list.addEventListener("click",deleteAndEditItem);