const checkItems = document.querySelectorAll(".check-item");

checkItems.forEach(item => {

    const checkbox = item.querySelector("input");

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {

            item.classList.add("completed");

        } else {

            item.classList.remove("completed");

        }

        saveChecklistState();

    });

});

// СОХРАНЕНИЕ СОСТОЯНИЯ

function saveChecklistState() {

    const states = [];

    checkItems.forEach(item => {

        const checkbox = item.querySelector("input");

        states.push(checkbox.checked);

    });

    localStorage.setItem(
        "checklistStates",
        JSON.stringify(states)
    );

}

// ЗАГРУЗКА СОСТОЯНИЯ

function loadChecklistState() {

    const saved = JSON.parse(
        localStorage.getItem("checklistStates")
    );

    if (!saved) return;

    checkItems.forEach((item, index) => {

        const checkbox = item.querySelector("input");

        checkbox.checked = saved[index];

        if (checkbox.checked) {

            item.classList.add("completed");

        }

    });

}

loadChecklistState();