// Your code here
const dodger = document.getElementById("dodger")

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});


document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
    

moveDodgerLeft()
moveDodgerRight()

function moveDodgerRight() {
const leftNumbers = dodger.style.left.replace("px", "")
const left = parseInt(leftNumbers, 10)

let gameFieldView = 400
let dodgerSize = 40

if (left + dodgerSize < gameFieldView) {
  dodger.style.left = `${left + 1}px`
}
}

