<meta name='viewport' content='width=device-width, initial-scale=1'/>document.addEventListener("DOMContentLoaded", function () {
    const goalCells = document.querySelectorAll(".cell");

    function generatePrediction() {
        // Убираем прошлые подсказки
        goalCells.forEach(cell => cell.classList.remove("active"));

        // Выбираем случайную точку
        let randomIndex = Math.floor(Math.random() * goalCells.length);
        goalCells[randomIndex].classList.add("active");
    }

    // Обновляем прогноз при клике
    document.body.addEventListener("click", generatePrediction);

    generatePrediction(); // Первый прогноз при загрузке
});