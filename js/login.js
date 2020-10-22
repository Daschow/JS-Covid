// Get the modal
var modal = document.querySelector("#id01");
var modal2 = document.querySelector("#id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

//
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  if (username == "aze" && password == "aze") {
    alert("Login successfully");
    window.location = "index.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.querySelector("#username").disabled = true;
      document.querySelector("#password").disabled = true;
      document.querySelector("#submit").disabled = true;
      return false;
    }
  }
}







const replace = document.getElementById('replace');
const add = document.getElementById('add');

const scaleKeyframes = [
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
]
const scaleTiming = {
  duration: 2100,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'ease-in-out'
}

const rotateKeyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(180deg)' }
]
const rotateTiming = {
  duration: 3000,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'ease-in'
}

replace.animate(scaleKeyframes, scaleTiming);
replace.animate(rotateKeyframes, rotateTiming);

add.animate(scaleKeyframes, Object.assign({ composite: 'add' }, scaleTiming));
let rotate = add.animate(rotateKeyframes, Object.assign({ composite: 'add' }, rotateTiming));

if (rotate.effect && rotate.effect.composite === 'add') {
  document.documentElement.classList.add('supported');
}

