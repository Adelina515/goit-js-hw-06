const liItem = document.querySelectorAll(".item")
console.log(liItem)
liItem.forEach(el => {
    console.log(el.firstElementChild.textContent)
    console.log(el.lastElementChild.children.length)
})