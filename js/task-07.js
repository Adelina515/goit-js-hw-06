/*
Напиши скрипт, який реагує на зміну значення input #font-size-control (подія input) 
і змінює інлайн-стиль span #text, оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const reft = {
    inputEl: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),

}

reft.inputEl.addEventListener("input", handleControlInput);

function handleControlInput() {
    reft.spanText.style.fontSize = `${reft.inputEl.value}px`;
}