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


/*---------------------------------------- Бургер меню ----------------------------------------*/
const burger = document.getElementById("header__burger");
const nav = document.getElementById("header__nav");

burger.addEventListener("click", e => {
      burger.classList.toggle("active")
      nav.classList.toggle("active");
      document.body.classList.toggle("hide");
})


/*---------------------------------------- Слайдер сертификатов ----------------------------------------*/
const sertificatesSlides = [...document.querySelectorAll(".sertificates__slide")];
const sertificatesRight = document.getElementById("sertificates-right");
const sertificatesLeft = document.getElementById("sertificates-left")
let sertificatesSlide = 0;
const showsertificates = 3;

const setSertificatesSlides = () =>{
      sertificatesSlides.map((slide, id) => {
            slide.style.left = "calc(((101% - 40px ) * 0.33 + 20px) * " + (id - sertificatesSlide) + ")";
      })
}
setSertificatesSlides();

sertificatesRight.addEventListener("click", e => {
      sertificatesLeft.classList.remove("disabled")
      if (sertificatesSlide == sertificatesSlides.length - showsertificates) {
            return;
      }
      sertificatesSlide += 1;
      setSertificatesSlides();
      if (sertificatesSlide == sertificatesSlides.length - showsertificates) {
            sertificatesRight.classList.add("disabled");
      }
})
sertificatesLeft.addEventListener("click", e => {
      sertificatesRight.classList.remove("disabled")
      if (sertificatesSlide == 0) {
            return;
      }
      sertificatesSlide -= 1;
      setSertificatesSlides();
      if (sertificatesSlide == 0) {
            sertificatesLeft.classList.add("disabled")
      }
})

/*---------------------------------------- Слайдер отзывов ----------------------------------------*/
const commentsSlides = [...document.querySelectorAll(".comments__comment")];
const commentsRight = document.getElementById("comments-right");
const commentsLeft = document.getElementById("comments-left")
let commentsSlide = 0;
const showcomments = 3;

const setCommentsSlides = () =>{
      commentsSlides.map((slide, id) => {
            slide.style.left = "calc(((101% - 40px ) * 0.33 + 20px) * " + (id - commentsSlide) + ")";
      })
}
setCommentsSlides();

commentsRight.addEventListener("click", e => {
      commentsLeft.classList.remove("disabled")
      if (commentsSlide == commentsSlides.length - showcomments) {
            return;
      }
      commentsSlide += 1;
      setCommentsSlides();
      if (commentsSlide == commentsSlides.length - showcomments) {
            commentsRight.classList.add("disabled");
      }
})
commentsLeft.addEventListener("click", e => {
      commentsRight.classList.remove("disabled")
      if (commentsSlide == 0) {
            return;
      }
      commentsSlide -= 1;
      setCommentsSlides();
      if (commentsSlide == 0) {
            commentsLeft.classList.add("disabled")
      }
})