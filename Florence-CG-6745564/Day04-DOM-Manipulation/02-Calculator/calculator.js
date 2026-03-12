const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// 🔹 Add this function HERE
function removeLeadingZeros(value) {
    if (value.includes(".")) return value;
    return value.replace(/^0+(\d)/, "$1");
}

buttons.forEach(button => {

    if (button.hasAttribute("data-value")) {
        button.addEventListener("click", () => {
            display.value += button.getAttribute("data-value");
            display.value = removeLeadingZeros(display.value);
        });
    }

    if (button.classList.contains("clear")) {
        button.addEventListener("click", () => {
            display.value = "";
        });
    }

    if (button.classList.contains("equal")) {
        button.addEventListener("click", () => {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        });
    }

});