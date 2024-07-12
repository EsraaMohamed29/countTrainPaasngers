let count = 0;
let countEl = document.getElementById("count-el");
let previousPassengers = document.getElementById("previousPassengers");
function increament() {
  count += 1;
  countEl.innerText = count;
}
function decrement() {
  count -= 1;
  countEl.innerText = count;
}
function save() {
  previousPassengers.innerText += count + " - ";
  count = 0;
  countEl.innerText = count;
}
