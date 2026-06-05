const ingredientsBtn = document.getElementById("ingredientsBtn");

const ingredients = document.getElementById("ingredients");

ingredients.style.display = "none";


ingredientsBtn.addEventListener("click", () => {

    if(ingredients.style.display === "none") {

        ingredients.style.display = "block";

        ingredientsBtn.textContent = "Hide Ingredients";

    } else {

        ingredients.style.display = "none";

        ingredientsBtn.textContent = "Show Ingredients";

    }
});

const stepsBtn = document.getElementById("stepsBtn");

const steps = document.getElementById("steps");

steps.style.display = "none";

stepsBtn.addEventListener("click", () => {

    if(steps.style.display === "none") {

        steps.style.display = "block";

        stepsBtn.textContent = "Hide Steps";

    } else {

        steps.style.display = "none";

        stepsBtn.textContent = "Show Steps";
    }

});

// Select Start Cooking button

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const progressText = document.getElementById("progressText");

const progressBar = document.getElementById("progressBar");

const completeMessage = document.getElementById("completeMessage");

// Track current cooking step

const stepItems = document.querySelectorAll("#steps li");

let currentStep = 0;

startBtn.addEventListener("click", () => {

    stepItems[currentStep].classList.add("active-step");

    progressText.textContent = `Step ${currentStep + 1} of ${stepItems.length}`;

    progressBar.style.width = `${((currentStep + 1) / stepItems.length) * 100}%`;


});

nextBtn.addEventListener("click", () => {

   if(currentStep < stepItems.length - 1) {
    
    stepItems[currentStep].classList.remove("active-step");

    currentStep++;

    stepItems[currentStep].classList.add("active-step");

    progressText.textContent = `Step ${currentStep + 1} of ${stepItems.length}`;

    progressBar.style.width = `${((currentStep + 1) / stepItems.length) * 100}%`;

   } else {

    completeMessage.textContent = "🎉 Recipe Completed!";

   }

});

