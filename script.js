function addTodoItem() {
    var todoText = prompt("Enter a new to-do item:");
    if (todoText) {
        var ul = document.getElementById("todoItems");
        var li = document.createElement("li");
        li.innerHTML = todoText + ' <span class="delete-btn" onclick="deleteItem(this)">×</span>';
        ul.appendChild(li);
    }
}

function deleteItem(element) {
    var li = element.parentElement;
    li.parentElement.removeChild(li);
}

function loadImage(event) {
    var image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function() {
        URL.revokeObjectURL(image.src) 
    }
}