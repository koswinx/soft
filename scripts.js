document.addEventListener("DOMContentLoaded", function () {
    const bombucksPrediction = document.getElementById("bombucks-prediction");
    
    if (bombucksPrediction) {
        bombucksPrediction.addEventListener("click", function () {
            bombucksPrediction.textContent = Math.floor(Math.random() * 10) + 1;
        });
    }

    const goalCells = document.querySelectorAll(".cell");
    
    if (goalCells.length > 0) {
        document.body.addEventListener("click", function () {
            goalCells.forEach(cell => cell.classList.remove("active"));
            let randomIndex = Math.floor(Math.random() * goalCells.length);
            goalCells[randomIndex].classList.add("active");
        });
    }
});
