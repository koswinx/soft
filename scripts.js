document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("grid")) {
        generateMinesGrid();
    }

    if (document.getElementById("bombucks-grid")) {
        generateBombucksGrid();
    }

    if (document.getElementById("goal")) {
        generatePenaltyGoal();
    }

    function generateMinesGrid() {
        const grid = document.getElementById("grid");
        grid.innerHTML = "";

        for (let i = 0; i < 25; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
        }

        document.getElementById("mines-refresh").addEventListener("click", function () {
            document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("safe"));
            let safeCell = Math.floor(Math.random() * 25);
            document.querySelectorAll(".cell")[safeCell].classList.add("safe");
        });
    }

    function generateBombucksGrid() {
        const grid = document.getElementById("bombucks-grid");
        grid.innerHTML = "";

        for (let i = 0; i < 18; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
        }

        document.getElementById("bombucks-prediction").addEventListener("click", function () {
            document.getElementById("bombucks-prediction").textContent = Math.floor(Math.random() * 10) + 1;
        });
    }

    function generatePenaltyGoal() {
        const goal = document.getElementById("goal");
        goal.innerHTML = "";

        for (let i = 0; i < 15; i++) {
            const cell = document.createElement("div");
            cell.classList.add("goal-cell");
            goal.appendChild(cell);
        }

        document.body.addEventListener("click", function () {
            document.querySelectorAll(".goal-cell").forEach(cell => cell.classList.remove("active"));
            let randomIndex = Math.floor(Math.random() * 15);
            document.querySelectorAll(".goal-cell")[randomIndex].classList.add("active");
        });
    }
});