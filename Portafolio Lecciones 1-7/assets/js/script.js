let clickCount = 0;
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

clickButton.addEventListener('click', function () {
    clickCount++;
    clickButton.textContent = clickCount;
});

resetButton.addEventListener('click', function () {
    clickCount = 0;
    clickButton.textContent = clickCount;
});
