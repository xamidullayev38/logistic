const swiper_block4 = new Swiper('.swiper-block4', {
    loop: false,

    pagination: {
      el: '.swiper-pagination-block4',
      clickable: true
    },
  
    navigation: {
      nextEl: '.swiper-block4-next',
      prevEl: '.swiper-block4-prev',
    },

    breakpoints: {
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        1199: {
          spaceBetween: 24,  
          slidesPerView: 2,
        },
  }
  });


const selects = document.querySelectorAll('.select-head'),
      options = document.querySelectorAll('.options li');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect');
    })
});

window.addEventListener("click", (e) => {
  selects.forEach(select => {
      select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect');
   
});
})

options.forEach(option => {
    option.addEventListener('click', () => {
        let active = option.parentElement.parentElement.previousElementSibling.children[1].children[0];
        active.textContent = option.textContent;
        option.parentElement.parentElement.parentElement.classList.remove('showSelect')
    })
});



// Start form code
const userName = document.getElementById('name'),
      userPhone = document.getElementById('phone'),
      userName2 = document.getElementById('name-block7'),
      email = document.getElementById('email'),
      comment = document.getElementById('comment'),
      phoneModalForm = document.getElementById('phone-modalForm'), ///
      emailModalForm = document.getElementById('email-modalForm'), ///
      nameModalForm = document.getElementById('name__modalForm'), ///

      formBtn = document.querySelector('.block6 .form-btn'),
      formBtn2 = document.querySelector(' .block7-btn'),
      addItem = document.querySelector('.form-button'),
      deleteItem = document.querySelector('.delete-button' ),
      
      cards = document.querySelectorAll(' .block4-card'),
      popUpForm = document.querySelector('.popUpForm'),
      popUpItem = document.querySelector('.form-extra'),
      popUpThanks = document.querySelector('.popUp-thanks'),
      popUpBtn = document.querySelector('.popUp-form-btn');

      console.log(comment);
    
    
// Buttons 
formBtn.addEventListener('click', () => {
  checkInputs();
  const userNameSuc =  userName.nextElementSibling.classList,
        userPhoneSuc =  userPhone.nextElementSibling.classList;

  if(userNameSuc == 'success' && userPhoneSuc == 'success') {
    // formBtn.type = 'submit'
    popUpThanks.classList.remove('d-none')
  }

}),
formBtn2.addEventListener('click', () => {
  checkInputs();
  const userName2Suc =  userName2.nextElementSibling.classList,
        commentSuc = comment.nextElementSibling.classList,
        emailSuc =  email.nextElementSibling.classList;

  if(userName2Suc == 'success' && emailSuc == 'success' && commentSuc == 'success') {
    // formBtn2.type = "submit"
    popUpThanks.classList.remove('d-none')
    
  }

})
popUpBtn.addEventListener('click', () => {
  // popUpBtn.type = 'submit';
  popUpForm.classList.add('d-none')
  popUpThanks.classList.remove('d-none')

})



addItem.addEventListener('click', () => {
  popUpItem.classList.remove('d-none')
})
deleteItem.addEventListener('click', () => {
  popUpItem.classList.toggle('d-none')
})

cards.forEach(card => {
  card.addEventListener('click', () => {
     popUpForm.classList.remove('d-none')
 })
}); 



// functions 
function checkInputs() {
  const userNameVal = userName.value.trim(),
  userPhoneVal = userPhone.value.trim(),
  userName2Val = userName2.value.trim(),
  commentVal = comment.value.trim(),
  emailVal = email.value.trim();
  /////


  
  if(userNameVal == '' || userName.value.length <= 2) {
    setError(userName)
  } else {
    setSuccess(userName)
  }
  if(userPhoneVal == '') {
    setError(userPhone)
  } else {
    setSuccess(userPhone)
  }


  if(userName2Val == '' || userName2.value.length <= 2) {
    setError(userName2)
  } else {
    setSuccess(userName2)
  }
  if(emailVal == '') {
    setError(email)
  } else {
    setSuccess(email)
  }
  if(commentVal == '' || comment.value.length <= 2) {
    setError(comment)
  } else {
    setSuccess(comment)
  }
}

function setSuccess(input) {
  input.style.borderColor = '#006BE9'
  input.parentElement.children[3].classList.add('success');
  input.parentElement.children[3].classList.remove('error');
  input.nextElementSibling.classList.add('success')
}
function setError(input) {
  input.style.borderColor = '#E51017'
  input.parentElement.children[3].classList.add('error');
  input.parentElement.children[3].classList.remove('success');
}


