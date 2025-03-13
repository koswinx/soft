document.addEventListener("DOMContentLoaded", function () {
    const gameButtons = document.querySelectorAll(".game-btn");
    const sections = document.querySelectorAll(".game-section");

    function showGame(game) {
        sections.forEach(section => section.style.display = "none");
        document.getElementById(game).style.display = "block";
    }

    gameButtons.forEach(button => {
        button.addEventListener("click", () => showGame(button.dataset.game));
    });

    // Логика Mines
    const grid = document.getElementById("grid");
    const minesRefresh = document.getElementById("mines-refresh");

    function updateMinesPrediction() {
        document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("safe"));
        let safeCell = Math.floor(Math.random() * 25);
        document.querySelectorAll(".cell")[safeCell].classList.add("safe");
    }

    minesRefresh.addEventListener("click", updateMinesPrediction);
    
    // Логика Bombucks
    function generateBombucksPrediction() {
        let predictionNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById("bombucks-prediction").textContent = predictionNumber;
    }

    // Логика Penalty Shoot Out
    function updatePenaltyPrediction() {
        document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("active"));
        let randomCell = Math.floor(Math.random() * 15);
        document.querySelectorAll(".cell")[randomCell].classList.add("active");
    }

    document.getElementById("penalty").addEventListener("click", updatePenaltyPrediction);

    // Показать первую игру
    showGame("mines");
});
