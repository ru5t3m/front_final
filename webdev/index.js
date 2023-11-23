let tasks = [];

function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() !== "") {
        tasks.push({ text: taskText, completed: false });
        updateTaskList();
        document.getElementById("new-task").value = "";
    }
}

function updateTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="deleteTask(${index})">Удалить</button>`;
        listItem.className = task.completed ? "completed" : "";
        taskList.appendChild(listItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function deleteCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    updateTaskList();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function playSound() {
    const audio = new Audio('path_to_your_sound_file.mp3'); // Provide the path to your sound file
    audio.play();
}

document.getElementById("play-sound-button").addEventListener("click", function () {
    const audio = document.getElementById("my-audio");
    audio.play();
});

const popoverButton = new bootstrap.Popover(document.getElementById('popoverButton'), {
    content: "You must be registered",
    placement: "bottom"
});


function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const firstNameError = document.getElementById("firstName-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    firstNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (firstName.value.trim() === "") {
        firstNameError.textContent = "Поле 'First name' обязательно для заполнения";
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Поле 'E-mail' обязательно для заполнения";
    } else if (!validateEmail(email.value)) {
        emailError.textContent = "Введите корректный email";
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Поле 'Password' обязательно для заполнения";
    }

    if (firstName.value.trim() !== "" && email.value.trim() !== "" && password.value.trim() !== "" && validateEmail(email.value)){
        alert(firstName.value.trim()+" your answer recieved! Thanks a lot, we will contact you back!");

    }
    else{
        alert("Try again");
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("my-form").addEventListener("submit", validateForm);

function startTimer() {
    let timerInterval;
    let totalTime;
    const minutes = parseInt(document.getElementById("minutes").textContent) || 0;
    const seconds = parseInt(document.getElementById("seconds").textContent) || 0;

    if (minutes === 0 && seconds === 0) {
        return;
    }

    totalTime = minutes * 60 + seconds;
    const timer = document.querySelector(".timer");
    timer.style.display = "flex";

    let remainingTime = totalTime;

    document.getElementById("start-button").style.display = "none";

    timerInterval = setInterval(function() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerInterval);
            timer.style.display = "none";
            document.getElementById("start-button").style.display = "block";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            timer.textContent = "Время вышло!";
        }
    }, 1000);
}

document.getElementById("start-button").addEventListener("click", startTimer);


const content = document.getElementById("content");
const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", function() {
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});

const readyButton = document.getElementById("ready-button");
const notReadyButton = document.getElementById("not-ready-button");

readyButton.addEventListener("submit", function() {
    alert("Good Luck");
});

notReadyButton.addEventListener("submit", function() {
    alert("We will wait for you");
});







// JavaScript code for the drag and drop quiz
const quizItems = document.querySelectorAll('.quiz-item');
const categories = document.querySelectorAll('.category');

let draggedItem = null;

// Add drag event listeners to quiz items
quizItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Add dragover event listeners to categories
categories.forEach(category => {
    category.addEventListener('dragover', dragOver);
    category.addEventListener('dragenter', dragEnter);
    category.addEventListener('dragleave', dragLeave);
    category.addEventListener('drop', dragDrop);
});

function dragStart() {
    draggedItem = this;
    setTimeout(() => (this.style.display = 'none'), 0);
}

function dragEnd() {
    setTimeout(() => (this.style.display = 'block'), 0);
    draggedItem = null;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
}

function dragLeave() {
    this.style.backgroundColor = 'transparent';
}

function dragDrop() {
    this.appendChild(draggedItem);
    this.style.backgroundColor = 'transparent';

    // Check if the dragged item is a vowel or consonant
    if (isVowel(draggedItem.textContent)) {
        if (this.id === 'vowels') {
            draggedItem.style.backgroundColor = 'green';
            setTimeout(() => (draggedItem.style.display = 'none'), 1000);
        } else {
            draggedItem.style.backgroundColor = 'red';
        }
    } else {
        if (this.id === 'consonants') {
            draggedItem.style.backgroundColor = 'green';
            setTimeout(() => (draggedItem.style.display = 'none'), 1000);
        } else {
            draggedItem.style.backgroundColor = 'red';
        }
    }
}

// Utility function to check if a character is a vowel
function isVowel(char) {
    return 'AEIOU'.includes(char.toUpperCase());
}


