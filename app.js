let containerElem = document.querySelector(".container");
let btn = document.getElementById("btn");
let count = 0;
btn.addEventListener("click", () => {
  if (count < 1) {
    containerElem.insertAdjacentHTML("afterend", "<p>moohtava</p>");
    count++;
  }
});
