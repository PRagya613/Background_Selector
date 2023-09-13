const visualGradientBox = document.querySelector(".visualGradientBox");
const selectMenu = document.querySelector(".directionSelectBox select");
const visualColorInputs = document.querySelectorAll(".visualColors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    // Generating a random color in hexadecimal format. Example: #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom) {
      // If isRandom is true, update the colors inputs value with random color
        visualColorInputs[0].value = getRandomColor();
        visualColorInputs[1].value = getRandomColor();
    }

    // Creating a gradient string using the select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${visualColorInputs[0].value}, ${visualColorInputs[1].value})`;
    visualGradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    // Copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

visualColorInputs.forEach(input => {
    // Calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
