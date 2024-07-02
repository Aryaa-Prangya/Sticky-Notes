function getRandomColor() {
    const colors = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const div2 = document.querySelector('.sticky-notes');
const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', function() {
    createNote();
});

function createNote() {
    var noteText = document.getElementById("new-note").value;
    if (noteText.trim() === "") {
        alert("Note text cannot be empty!");
        return;
    }

    var node0 = document.createElement('div');
    var node1 = document.createElement("p");

    node1.innerText = noteText;

    node0.classList.add('sticky-note');
    node0.style.backgroundColor = getRandomColor();
    node0.appendChild(node1);

    var noteCardRemove = document.createElement('button');
    noteCardRemove.classList.add('delete-button');
    noteCardRemove.textContent = "X";
    noteCardRemove.addEventListener('click', function() {
        div2.removeChild(node0);
    });

    node0.appendChild(noteCardRemove);

    div2.appendChild(node0);
    document.getElementById("new-note").value = ""; // Clear input
}
