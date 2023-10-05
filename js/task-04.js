const increaseButton = document.querySelector('[data-action="increment"]');
const decreaseButton = document.querySelector('[data-action="decrement"]');
const actualValue = document.querySelector("#value");
let actualNumber = parseInt(actualValue.textContent); 

increaseButton.addEventListener("click", () => {    
    actualNumber += 1;
    actualValue.textContent = actualNumber;
});

decreaseButton.addEventListener("click", () => {
    actualNumber -= 1;
    actualValue.textContent = actualNumber;  
});
