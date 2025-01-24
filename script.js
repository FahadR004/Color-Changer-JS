const buttons = document.querySelectorAll("button"); // Will give an array
console.log(buttons);
console.table(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.id) {
            body.style.backgroundColor = e.target.id;
        }
    })
})

// function changeColor(e) {
//     console.log(e.target.id);
//     body.style.backgroundColor = e.target.id;
// };