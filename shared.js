const backdrop = document.querySelector('.backdrop')
const selectPlanButtons = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal__actions > button')
const closeModal =
	() => {
		backdrop.style.display = "none"
		modal.style.display = "none"
	}
modalButton.addEventListener('click', closeModal)
backdrop.addEventListener('click', closeModal)

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', () => {
		backdrop.style.display = "block"
		modal.style.display = "block"
	})
}