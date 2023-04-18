const openModalBtn = document.querySelector("#open-modal");
const body = document.querySelector("body");
const modal = document.querySelector(".modal-wrapper");

const openModal = () => {
  modal.classList.add("isActive");
  if (window.screen.width >= 1400) {
    body.classList.add("isOverFlowHidden");
  }
};
const closeModal = () => {
  modal.classList.remove("isActive");
  body.classList.remove("isOverFlowHidden");
};
openModalBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
