const heading = document.getElementById("heading");
const colorInput = document.getElementById("colorInput"); 
const changeColorButton = document.getElementById("changeColor"); 

changeColorButton.addEventListener("click", function () {
    const newColor = colorInput.value.trim(); 
    
    if (newColor) { 
        heading.style.color = newColor; 
    }
});