const formBtns = document.querySelectorAll(".form__btn");

formBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    formBtns.forEach((btn) => {
      btn.classList.remove("form__btn--active");
    });

    e.target.classList.add("form__btn--active");
  });
});
