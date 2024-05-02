let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count += 16
    countEl.textContent = count
}

function increment3() {
    count += 32
    countEl.textContent = count
}

function increment4() {
    count += 48
    countEl.textContent = count
}

function increment5() {
    count += 64
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
