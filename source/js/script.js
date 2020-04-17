  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
        if (formModal.classList.contains("page-main__modal-show")) {
          formModal.classList.remove("page-main__modal-show");
        }
    }
  });

  var callButtons = document.querySelectorAll('.cart__link-basket');
  var formModal = document.querySelector('.page-main__modal');
  for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      formModal.classList.add("page-main__modal-show");
    });
  }

  var callFeatured = document.querySelector('.featured__button');
  callFeatured.addEventListener("click", function (evt) {
      evt.preventDefault();
      formModal.classList.add("page-main__modal-show");
  });
