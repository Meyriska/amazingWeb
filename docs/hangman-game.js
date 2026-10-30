const words = ["стич", "лило", "симба", "шрек", "жасмин", "алладин", "бамби", "пикачу", "беззубик", "грю", "миньон", "немо", "олаф", "эльза", "микки", "джерри", "мэйбл", "маккуин", "тимон", "пумба", "гринч", "малефисента"];

const gallowsStages = [
    "hg_media/hg1.png", // 0 ошибок
    "hg_media/hg2.png", // 1 ошибка
    "hg_media/hg3.png", // 2 ошибки
    "hg_media/hg4.png", // 3 ошибки
    "hg_media/hg5.png", // 4 ошибки
    "hg_media/hg6.png", // 5 ошибок
    "hg_media/hg7.png"  // 6 ошибок (финал)
];

let chosenWord = "";
let guessedLetters = [];
let wrongGuesses = 0;
const maxWrong = 6;
const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

function initGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;

    document.getElementById("message").innerText = "";
    document.getElementById("message").style.color = "#333";
    document.getElementById("btnRestart").style.display = "none";

    const keyboardDiv = document.getElementById("keyboard");
    keyboardDiv.innerHTML = "";
    
    alphabet.split("").forEach(letter => {
        const button = document.createElement("button");
        button.innerText = letter;
        button.classList.add("key");
        button.addEventListener("click", () => handleGuess(letter, button));
        keyboardDiv.appendChild(button);
    });

    updateDisplay();
}

function updateDisplay() {
    // ВАЖНО: Элемент с id="gallows" в HTML должен быть тегом <img>, а не <div>
    const gallowsEl = document.getElementById("gallows");
    if (gallowsEl) {
        gallowsEl.src = gallowsStages[wrongGuesses];
    }

    let displayWord = "";
    for (let letter of chosenWord) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter;
        } else {
            displayWord += "□";
        }
    }
    document.getElementById("wordDisplay").innerText = displayWord;

    // ИСПРАВЛЕНО: проверяем отсутствие квадратика □ для фиксации победы
    if (!displayWord.includes("□")) {
        document.getElementById("message").innerText = "🎉 Вы победили! Отличная работа!";
        document.getElementById("message").style.color = "#28a745";
        disableKeyboard();
    }

    if (wrongGuesses >= maxWrong) {
        document.getElementById("message").innerText = `💥 Вы проиграли! Было загадано слово: ${chosenWord.toUpperCase()}`;
        document.getElementById("message").style.color = "#dc3545";
        disableKeyboard();
    }
}

function handleGuess(letter, button) {
    button.disabled = true;

    if (chosenWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongGuesses++;
    }

    updateDisplay();
}

function disableKeyboard() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.disabled = true);
    document.getElementById("btnRestart").style.display = "block";
}

// Запуск игры при инициализации файла
initGame();
