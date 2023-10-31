const modal = document.querySelector(".modal");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const closeModal = document.querySelector(".icon-x");

button1.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
})

button2.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
})

button3.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
})
