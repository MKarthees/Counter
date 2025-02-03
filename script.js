const counterEl = document.getElementById("counter");
const incCountEl = document.getElementById("incCount");
const decCountEl = document.getElementById("decCount");

let count = 0;
let incCount = 0;
let decCount = 0;

function increment(params) {
    count += 1;
    counterEl.innerHTML = count;
    incCountEl.innerHTML = `Increment Count: <span> ${incCount += 1} </span>`;
}

function decrement(params) {
    count -= 1;
    counterEl.innerHTML = count;
    decCountEl.innerHTML = `Decrement Count: <span>${decCount += 1}</span>`;
}

function reset(params) {
    count = 0;
    decCount = 0;
    incCount = 0;
    counterEl.innerHTML = count;
    incCountEl.innerHTML = `Increment Count: ${incCount}`;
    decCountEl.innerHTML = `Decrement Count: ${decCount}`;
}