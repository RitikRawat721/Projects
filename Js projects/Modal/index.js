const openModal = document.getElementById("modalBtn")
const modal = document.querySelector(`.modal`)
const modalContent = document.querySelector(`.modal_content`);
const user = document.getElementById("greet");

openModal.addEventListener('click', () => {
   const name = prompt('Enter Your Name:')
    user.textContent = `Hello ${name}`;
    modal.classList.add(`open`);
})

modalContent.addEventListener('click', () => {
    modal.classList.remove(`open`);
})
