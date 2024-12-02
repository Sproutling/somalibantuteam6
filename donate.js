let buttons = document.getElementsByClassName("progress-button");
let goals = [100,500,1000];
let donations = 750;

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (donations > goals[i]) {
        button.innerHTML = "✓";
        button.style.backgroundColor = "#3EB24A";
    }
}