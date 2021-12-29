const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
/* getElementByIs() --> returns an Element object representing the element whose id property matches the specified string */
const color = document.querySelector(".color");
/* querySelector() --> returns the first Element within the document that matches the specified selector, or group of selectors */

btn.addEventListener("click", function () {
  /* addEventListener() --> method of the EventTarget interface that sets up a function that will be called whenever the specified event is delivered to the target */

  // get random number between 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
/* Math.random --> function returns a pseudorandom number between 0 and 1 (but not 1) */
/* Math.floor --> function returns the largest integer less than or equal to a given number */

