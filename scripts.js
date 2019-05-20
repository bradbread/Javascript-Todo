var button = document.getElementById("ourButton");
var deleteButton = document.getElementById("deleteButton")
var input = document.getElementById('userInput');
var contentP = document.getElementById("contentHere");
var todoListText = [];
var todoListComp = [];
button.onclick = ourButtonClick;
deleteButton.onclick = deleteButtonClick;


function ourButtonClick() {
    var userI = input.value;
    todoListText.push(userI);
    todoListComp.push(false);
    input.value = "";
    draw();
}

function deleteButtonClick() {
    //maybe i could just re-declare the array like var todoListComp = []
    var tLength = todoListText.length;
    for (i = 0; i < tLength; i++) {
        todoListComp.pop();
        todoListText.pop();
    }
    draw();
}

function draw() {
    contentP.innerHTML = "";
    var tLength = todoListText.length;
    for (i = 0; i < tLength; i++) {

       var p = document.createElement("p");
       var b = document.createElement("button");
       var d = document.createElement("button");

       if (todoListComp[i]) {
            b.className = "true";
            b.innerHTML = "✓";
       } else {
           b.className = "false";
           b.innerHTML = "X";
       }
       b.value = i;
       b.addEventListener("click", function() {
           todoListComp[this.value] = !todoListComp[this.value];
           draw();
       })
       d.innerHTML = "delete";
       d.value = i;
       d.className = "deleteButton";
       d.addEventListener("click", function() {
        todoListComp.splice(this.value, 1);
        todoListText.splice(this.value, 1);
        draw();
    })
       p.innerHTML = todoListText[i] + "\n";
       contentP.appendChild(p);
       p.appendChild(b);
       p.appendChild(d);
    }
}