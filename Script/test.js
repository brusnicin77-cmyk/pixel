const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const allInputs = document.querySelectorAll("input[type='radio']");
const totalQuestions = 10;

// ПРОГРЕСС

allInputs.forEach(input => {

    input.addEventListener("change", () => {

        updateSelectedStyles();
        updateProgress();

    });

});

// ПОДСВЕТКА ВЫБРАННОГО ОТВЕТА

function updateSelectedStyles() {

    document.querySelectorAll(".answer-option").forEach(option => {
        option.classList.remove("selected");
    });

    allInputs.forEach(input => {

        if (input.checked) {

            input.parentElement.classList.add("selected");

        }

    });

}

// ПРОГРЕСС-БАР

function updateProgress() {

    let answered = 0;

    for (let i = 1; i <= totalQuestions; i++) {

        const checked = document.querySelector(`input[name="q${i}"]:checked`);

        if (checked) {
            answered++;
        }

    }

    const percent = (answered / totalQuestions) * 100;

    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${answered} / ${totalQuestions}`;

}

// ПРОВЕРКА ТЕСТА

submitBtn.addEventListener("click", () => {

    let score = 0;

    for (let i = 1; i <= totalQuestions; i++) {

        const answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (!answer) {

            alert("Пожалуйста, ответьте на все вопросы.");
            return;

        }

        if (answer.value === "1") {
            score++;
        }

    }

    let level = "";
    let color = "";
    let description = "";

    // НИЗКИЙ

    if (score <= 4) {

        level = "🔴 Низкий уровень безопасности";
        color = "#ff5f5f";

        description = `
            Ваш аккаунт может быть уязвим для взлома и мошенничества.
            Рекомендуется срочно улучшить защиту аккаунтов.
        `;

    }

    // СРЕДНИЙ

    else if (score <= 7) {

        level = "🟠 Средний уровень безопасности";
        color = "#ffb84d";

        description = `
            Вы знаете основы цифровой безопасности,
            но некоторые настройки защиты стоит улучшить.
        `;

    }

    // ВЫСОКИЙ

    else {

        level = "🟢 Высокий уровень безопасности";
        color = "#57ff98";

        description = `
            Отличный результат! Вы хорошо понимаете,
            как защищать свои аккаунты и личные данные.
        `;

    }

    resultBox.style.display = "block";
    resultBox.style.border = `2px solid ${color}`;

    resultBox.innerHTML = `

        <h2>
            Ваш результат: ${score} / 10
        </h2>

        <div class="result-level" style="color:${color}">
            ${level}
        </div>

        <p class="result-description">
            ${description}
        </p>

        <h3>
            Рекомендации:
        </h3>

        <ul class="result-list">

            <li>
                Используйте уникальные сложные пароли
            </li>

            <li>
                Включите двухфакторную аутентификацию
            </li>

            <li>
                Не переходите по подозрительным ссылкам
            </li>

            <li>
                Регулярно обновляйте приложения
            </li>

            <li>
                Проверяйте настройки приватности
            </li>

        </ul>

        <div class="result-links">

            <a href="section2.html">
                Пароли и доступ
            </a>

            <a href="section3.html">
                Двухфакторная аутентификация
            </a>

            <a href="section4.html">
                Фишинг
            </a>

            <a href="section5.html">
                Приватность
            </a>

        </div>

    `;

    resultBox.scrollIntoView({
        behavior: "smooth"
    });

});