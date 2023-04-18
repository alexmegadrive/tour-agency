const formOptions = document.querySelectorAll(".form__option");
const formSelectInputs = document.querySelectorAll(".form__selectinput");
console.log("formOptions :", formOptions);

formOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(e.target);
    const parent = e.target.closest(".form__input-wrapper");
    const list = e.target.closest(".form__options-list");
    const select = parent.querySelector(".form__selectinput");
    const label = parent.querySelector(".form__select-label");
    if (!select.classList.contains("form__selectinput--correct")) {
      select.classList.add("form__selectinput--correct");
    }
    list.classList.remove("isActive");
    label.innerHTML = e.target.innerText;
  });
});

formSelectInputs.forEach((selectInput) => {
  selectInput.addEventListener("click", (e) => {
    const parent = e.target.closest(".form__input-wrapper");
    const list = parent.querySelector(".form__options-list");
    if (!list.classList.contains("isActive")) {
      list.classList.add("isActive");
    }
  });
});
