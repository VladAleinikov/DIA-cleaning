/*---------------------------------------- Открытие модального окна ----------------------------------------*/
const openModalBtns = [...document.getElementsByClassName("open-modal")];
const modalBg = document.getElementById("modal-bg");
const modalCloseBtn = [...document.getElementsByClassName("close-modal")];
const modalCleaningOrder = document.getElementById("cleaning-order-modal");
const modalSuccessfulRequest = document.getElementById("successful-request-modal");

// Метод для открытия модального окна
const openModal = (modal) => {
      modalCleaningOrder.classList.remove("active");
      modalSuccessfulRequest.classList.remove("active");

      modalBg.classList.add("active");
      modal.classList.add("active");
      document.body.classList.add("hide");
}
// Метод для закрытия всех модальных окон
const closeModal = () => {
      modalBg.classList.remove("active");
      modalCleaningOrder.classList.remove("active");
      modalSuccessfulRequest.classList.remove("active");
      document.body.classList.remove("hide");
}
// try catch нужен для страниц на которых нет модального окна
try {
      openModalBtns.map(btn =>
            btn.addEventListener("click", e => {
                  openModal(modalCleaningOrder);
            }));
      modalCloseBtn.map(btn => btn.addEventListener("click", closeModal));
      modalBg.addEventListener("click", closeModal);
} catch (e) {

}
/*---------------------------------------- Валидация формы модального окна ----------------------------------------*/
const inputName = document.getElementById("cleaning-order__name");
const inputTel = document.getElementById("cleaning-order__tel");
const formBtn = document.getElementById("cleaning-order__btn");

try {
      formBtn.addEventListener("click", e => {
            inputName.closest('div').classList.remove("empty", "invalid");
            inputTel.closest('div').classList.remove("empty", "invalid");
            
            // Регулярное выражение для валидации номера телефона
            const telRe = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
            if (inputName.value.length == 0) {
                  inputName.closest('div').classList.add("empty");
            }
            else if (inputName.value.length <= 3) {
                  inputName.closest('div').classList.add("invalid");
            }
            else if (inputTel.value.length == 0) {
                  inputTel.closest('div').classList.add("empty");
            }
            else if (telRe.exec(inputTel.value) === null) {
                  inputTel.closest('div').classList.add("invalid");
            }
            else {
                  openModal(modalSuccessfulRequest);
            }
      })
} catch (e) {

}