
document.addEventListener("click", (e) => {
    let currActive = document.getElementsByClassName("active")
    currActive[0].classList.remove("active")
    e.target.classList.add("active")
})