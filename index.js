const colorPickerEl = document.getElementById("color-picker");
const colorSchemeEl = document.getElementById("color-scheme");
const submitBtnEl = document.getElementById("submit-btn");
const colorDisplayEl = document.getElementById("color-display");

function getColorScheme() {
  fetch(
    `http://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.substring(
      1
    )}&mode=${colorSchemeEl.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorDisplayEl.innerHTML = data.colors
        .map((color) => {
          return `
        <div class="color-container">
        <div class="color"><img src="${color.image.bare}"></div>
        <p class="hex-value" id="hex-value">${color.hex.value}</p>
        </div>
        `;
        })
        .join("");
    });
}

submitBtnEl.addEventListener("click", getColorScheme);

getColorScheme();
