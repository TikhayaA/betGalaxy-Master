//scroll
var myNav = document.getElementById('mynav');
window.onscroll = function() {
    "use strict";
    if (pageYOffset >= 30) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// openLogin
let signUp = document.getElementsByClassName("modal-signap-open");
let sign = document.getElementsByClassName("modal-signap");
let login = document.getElementsByClassName("modal-login");
let forgot = document.getElementsByClassName("modal-forgot-p");
let reset = document.getElementsByClassName("modal-reset-p");
let confirmation = document.getElementsByClassName("modal-confirmation");
let linkOpenLogin = document.getElementsByClassName("btn-open-login");
let linkOpenSignUp = document.getElementsByClassName("btn-open-signup");
let BtnOpenLogin = document.getElementsByClassName("header_btn__login");
let BtnOpenSignUp = document.getElementsByClassName("header_btn__signup")
let blackout = document.getElementsByClassName("blackout");

function openLogin() {
    signUp[0].style.display = "none";
    login[0].style.display = "flex";
    blackout[0].classList.add("active");
}
if (linkOpenLogin.length > 0) {
    linkOpenLogin[0].addEventListener('click', openLogin);
}
if (BtnOpenLogin.length > 0) {
    BtnOpenLogin[0].addEventListener('click', openLogin);
}

// open signup
function openSignUp() {
    signUp[0].style.display = "flex";
    login[0].style.display = "none";
    blackout[0].classList.add("active");
}
let NewBtnOpenSignUp = Object.values(BtnOpenSignUp);
NewBtnOpenSignUp.forEach(function(element, i) {
    element.addEventListener("click", () => openSignUp());
});
if (linkOpenSignUp.length > 0) {
    linkOpenSignUp[0].addEventListener('click', openSignUp);
}

// close
let closeBtn = document.getElementsByClassName("closse-modal");

function closeModal() {
    if (signUp[0]) {
        signUp[0].style.display = "none";
    }
    blackout[0].classList.remove("active");
    if (login[0]) {
        login[0].style.display = "none";
    }
    if (forgot[0]) {
        forgot[0].style.display = "none";
    }
    if (confirmation[0]) {
        confirmation[0].style.display = "none";
    }
    if (reset[0]) {
        reset[0].style.display = "none";
    }
}
let NewClose = Object.values(closeBtn);

NewClose.forEach(function(element, i) {
    element.addEventListener("click", () => closeModal());
});
// back to Login
let back_login = document.getElementsByClassName("modal-confirmation_back-login");

function BackToLogin() {
    confirmation[0].style.display = "none";
    forgot[0].style.display = "none";
    login[0].style.display = "flex";
    blackout[0].classList.add("active");
}
let NewBackToLogin = Object.values(back_login);

NewBackToLogin.forEach(function(element, i) {
    element.addEventListener("click", () => BackToLogin());
});
// forgot password

let forgot_open = document.getElementsByClassName("form_forgot");

function openForgot() {
    login[0].style.display = "none";
    forgot[0].style.display = "flex";
    blackout[0].classList.add("active");
}
if (forgot_open.length > 0) {
    forgot_open[0].addEventListener('click', openForgot);
}

// chat

let circle = document.getElementsByClassName("chat_header__circle");
let open_chat = document.getElementsByClassName("chat_open-btn");
let chat_wrap = document.getElementsByClassName("chat");
let blackout_for_chat = document.getElementsByClassName("blackout-for-chat");
let close_chat = document.getElementsByClassName("chat_header");


function closeChat() {
    open_chat[0].style.display = "block";
    chat_wrap[0].classList.remove('active');
    if ($(window).width() > 1850) {
        if($('.sidebar-open').hasClass('active')) {
            $('.wrap-content').removeClass('open');
            $('.main').removeClass('open');
            $('.header-not-authorized').removeClass('open');
            $('.wrap-content').removeClass('open-chat');
            $('.wrap-content').addClass('open-menu');
        } else {
            $('.wrap-content').removeClass('open-chat');
            $('.wrap-content').removeClass('open-menu');
        }
    } else {
        blackout_for_chat[0].style.display = "none";
    }
}

function openChat() {
    open_chat[0].style.display = "none";
    chat_wrap[0].classList.add('active');
    if ($(window).width() > 1850) {
        if($('.sidebar-open').hasClass('active')) {
            $('.wrap-content').addClass('open');
            $('.main').addClass('open');
            $('.header-not-authorized').addClass('open');
            $('.wrap-content').removeClass('open-menu');
        } else {
            $('.wrap-content').addClass('open-chat');
        }
    } else {
        blackout_for_chat[0].style.display = "block";
    }
}
if (open_chat.length > 0) {
    open_chat[0].addEventListener('click', openChat);
}
if (close_chat.length > 0) {
    close_chat[0].addEventListener('click', closeChat);
}

// password-show 

let passwordInput = document.getElementsByClassName('password-input');
let showPass = document.getElementsByClassName('display_password');

function togglePasswordInput(i) {
    if (passwordInput[i].type === "password") {
        passwordInput[i].type = "text";
    } else {
        passwordInput[i].type = "password";
    }
}

let NewshowPass = Object.values(showPass);
NewshowPass.forEach(function(element, i) {
    element.addEventListener("click", () => {
        togglePasswordInput(i);
    });
    passwordInput[i].oninput = () => {
        if (passwordInput[i].value) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
});

// select-option
    let selectOption = document.querySelectorAll('.select-option');
    let selectOption_title = document.querySelectorAll('.select-option_title');
    let selectOption_labels = document.querySelectorAll('.select-option_body__block');
    // select-option list 
    selectOption_title.forEach((element, i) => {
        element.addEventListener("click", () => {
            selectOption.forEach((elementOption, iOption) => {
                if(iOption === i) {
                    if (selectOption[i].getAttribute('data-state') === 'active') {
                         selectOption[i].setAttribute('data-state', '');
                    } else {
                        selectOption[i].setAttribute('data-state', 'active');
                    }
                } else {
                    elementOption.setAttribute('data-state', '');
                }
                
            });
            
        });
    });
    // Close when click to select-option list 
    for (let i = 0; i < selectOption_labels.length; i++) {
        selectOption_labels[i].addEventListener('click', (evt) => {
            let selectTitleInner, selectBodyInner;
            evt.path.forEach((element, i) => {
                if(element.classList) {
                    if(element.classList[0] === 'select-option') {
                        selectTitleInner = i;
                    }
                    if(element.classList[0] === 'select-option_body__block') {
                        selectBodyInner = i;
                    }
                }
            });
            evt.path[selectTitleInner].children[0].innerHTML = evt.path[selectBodyInner].children[0].innerHTML;
            evt.path[selectTitleInner].setAttribute('data-state', '');
        });
    }
    $(document).mouseup((e) => {
        let closeCurrencyOut = $(".select-option");
        if (closeCurrencyOut.length) {
            if (!closeCurrencyOut.is(e.target) &&
                closeCurrencyOut.has(e.target).length === 0) {
                $(".select-option").attr('data-state', '');
            }
        }
    });
    $('.wallet_pop-up').click(() => {
        $('.wallet').attr('data-state', '');
    });

// languages
const selectSingle = document.getElementsByClassName('select');
const selectSingle_title = document.querySelectorAll('.select__title');
const selectSingle_labels = document.querySelectorAll('.select__label');

// Toggle menu 
selectSingle_title.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        if (selectSingle[i].getAttribute('data-state') === 'active') {
            selectSingle[i].setAttribute('data-state', '');
        } else {
            selectSingle[i].setAttribute('data-state', 'active');
        }
    })
});
// Close when click to option 
selectSingle_labels.forEach((element, i) => {
    element.addEventListener('click', (evt) => {
        if (i < selectSingle_labels.length / 3) {
            selectSingle_title[0].innerHTML = selectSingle_labels[i].innerHTML;
            selectSingle_title[1].innerHTML = selectSingle_labels[i + selectSingle_labels.length / 3].innerHTML;
            selectSingle_title[2].innerHTML = selectSingle_labels[i + selectSingle_labels.length / 3].innerHTML;
        } else if(i >= selectSingle_labels.length / 3 && i < selectSingle_labels.length / 3 * 2){
            selectSingle_title[0].innerHTML = selectSingle_labels[i - selectSingle_labels.length / 3].innerHTML;
            selectSingle_title[1].innerHTML = selectSingle_labels[i].innerHTML;
            selectSingle_title[2].innerHTML = selectSingle_labels[i].innerHTML;
        } else {
            selectSingle_title[0].innerHTML = selectSingle_labels[i - selectSingle_labels.length / 3 * 2].innerHTML;
            selectSingle_title[1].innerHTML = selectSingle_labels[i].innerHTML;
            selectSingle_title[2].innerHTML = selectSingle_labels[i].innerHTML;
        }
        if (evt.path[0].tagName === 'IMG') {
            evt.path[3].setAttribute('data-state', '');
        } else {
            evt.path[2].setAttribute('data-state', '');
        }
    });
});

$(document).mouseup(function(e) {
    var div = $(".select__title");
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        selectSingle[0].setAttribute('data-state', '');
        selectSingle[1].setAttribute('data-state', '');
        selectSingle[2].setAttribute('data-state', '');
    }
});

// open user account
let user_account = document.getElementsByClassName("user-account");

function Open_account_dropdown() {
    user_account[0].classList.toggle("active");
}
user_account[0].addEventListener("click", Open_account_dropdown);

$(document).mouseup(function(e) {
    let closeOut = $(".user-account");
    if (closeOut.length) {
        if (!closeOut.is(e.target) &&
            closeOut.has(e.target).length === 0) {
                user_account[0].classList.remove("active");
        }
    }
});

// open modal popup
let modalPopupBtn = document.querySelectorAll('.open-modal');
let modalPopup = document.querySelectorAll('.modal-popup');
let closeModalPopup = document.querySelectorAll('.closse-modal');

// open modal function
modalPopupBtn.forEach((element, i) => {
    element.addEventListener("click", () => {
        modalPopup.forEach((element, i) => {
            element.classList.remove("active");
        });
        let modalName = element.getAttribute('data-modal');
        let modalNameOpen = document.getElementsByClassName(modalName);
        modalNameOpen[0].classList.add("active");
        blackout[0].classList.add("active");
    });
});
// close modal function
closeModalPopup.forEach((element, i) => {
    element.addEventListener("click", () => {
        modalPopup[i].classList.remove("active");
        blackout[0].classList.remove("active");
    });
});
let openFilter = document.querySelectorAll('.user-profile_open-filter');
let modalFilter = document.querySelectorAll('.modal-filter');
let closeModalFilter = document.querySelectorAll('.closse-modal-filter');

openFilter.forEach((element, i) => {
    element.addEventListener("click", () => {
        modalPopup.forEach((element, i) => {
            element.classList.remove("active");
        });
        modalFilter.forEach(function(el, i) {
            el.classList.remove("active");
        });
        modalFilter[i].classList.add("active");
        blackout[0].classList.add("active");
    });
});
closeModalFilter.forEach((element, i) => {
    element.addEventListener("click", () => {
        modalFilter[i].classList.remove("active");
        blackout[0].classList.remove("active");
    });
});
// close modal function out element
$(document).mouseup(function(e) {
    let closeOut = $(".modal-popup");
    let closeOutFilter = $(".modal-filter");
    if (closeOut.length) {
        if (!closeOut.is(e.target) &&
            closeOut.has(e.target).length === 0 ) {
                modalPopup.forEach(function(element, i) {
                    element.classList.remove("active");
                });
                if (!closeOutFilter.is(e.target) &&
                closeOutFilter.has(e.target).length === 0) {
                    modalFilter.forEach(function(el, i) {
                        el.classList.remove("active");
                    });
                    blackout[0].classList.remove("active");
                }
        }
    } 
    else if (closeOutFilter.length) {
        if (!closeOutFilter.is(e.target) &&
            closeOutFilter.has(e.target).length === 0) {
                modalFilter.forEach(function(el, i) {
                    el.classList.remove("active");
                });
                blackout[0].classList.remove("active");
        }
    }
});

let popupAddMore = document.getElementsByClassName('modal-popup_add');
let newPopupAddMore = Object.values(popupAddMore);
newPopupAddMore.forEach((element, i) => {
    let innerHtml = element.previousSibling.previousElementSibling.innerHTML;
    element.addEventListener("click", () => {
        element.previousSibling.previousElementSibling.innerHTML = element.previousSibling.previousElementSibling.innerHTML + innerHtml;
        $('.reward').click(function(){
            $('.select-option').each(function(){
                $(this).attr('data-state', '');
            });
            $(this).toggleClass('active');
            if($(this).hasClass('active')) {
                if ($(this).attr('data-state') === '') {
                    $(this).attr('data-state', 'active');
                    $('.reward').each(function(){
                        $(this).removeClass('active');
                    });
                    $(this).toggleClass('active');
                } else {
                    $(this).attr('data-state', '');
                    $(this).removeClass('active');
                }
            }
            $(".reward .select-option_body__block").click(function() {
                let inHTML = $(this).find(".select-option_body__element").html();
                $(this).parent().prev().html(inHTML); 
                $(this).parent().parent().attr('data-state', '');
            });
        });

        $(document).mouseup((e) => {
            let closeCurrencyOut = $(".reward");
            if (closeCurrencyOut.length) {
                if (!closeCurrencyOut.is(e.target) &&
                    closeCurrencyOut.has(e.target).length === 0) {
                        closeCurrencyOut.attr('data-state', '');
                        closeCurrencyOut.removeClass('active');
                }
            }
        });
    });
});

// contoll tabs

$('.tabs-controll button').each(function(item, element) {
    $(element).click(() => {
        $(element).parent().find('button').each(function() {
            $(this).removeClass("active");
        });
        $(element).addClass("active");
        $(element).parent().next().children().each(function() {
            $(this).removeClass("active");
        });
       $('.tabs-content > div')[item].classList.add("active");
    })
});


// range

let tapSlider = document.getElementById('range');
let rangeCount = document.getElementById('range-count');

if(tapSlider) {
    noUiSlider.create(tapSlider, {
        start: 50,
        behaviour: 'none',
        padding: [1, 5],
        connect: [false, true],
        range: {
            'min': 0,
            'max': 100
        }
    });
    let directionField = document.getElementsByClassName('noUi-touch-area');

    tapSlider.noUiSlider.on('update', function (values, handle) {
        directionField[0].innerHTML = Math.ceil(values[handle]);
        rangeCount.innerHTML = Math.ceil(values[handle]) + '%';
    });
}

let rangeFilter = document.querySelectorAll('.range-filter');
let rangeResultLeft = document.getElementsByClassName('range-filter-result-left');
let rangeResultRight = document.getElementsByClassName('range-filter-result-right');
if(rangeFilter) {
    rangeFilter.forEach((element, index) => {
        noUiSlider.create(element, {
            start: [20, 2500],
            connect: true,
            range: {
                'min': 20,
                'max': 5000
            }
        });

        element.noUiSlider.on('update', function (values) {
            rangeResultLeft[index].innerHTML = Math.ceil(values[0]);
            rangeResultRight[index].innerHTML = Math.ceil(values[1]);
        });
    });
}

let rangeFilterCoeficient = document.querySelectorAll('.range-filter-coeficient');
let rangeResultLeftCoeficient = document.getElementsByClassName('range-filter-result-left-coeficient');
let rangeResultRightCoeficient = document.getElementsByClassName('range-filter-result-right-coeficient');
if(rangeFilterCoeficient) {
    rangeFilterCoeficient.forEach((element, index) => {
        noUiSlider.create(element, {
            start: [0.00, 2.50],
            connect: true,
            range: {
                'min': 0.00,
                'max': 5.00
            }
        });

        element.noUiSlider.on('update', function (values) {
            rangeResultLeftCoeficient[index].innerHTML = values[0] + 'x';
            rangeResultRightCoeficient[index].innerHTML = values[1] + 'x';
        });
    });
}

// click  on auto tab
let autobets = document.getElementsByClassName('autobets');
let openAutobets = document.getElementsByClassName('open-autobets');
if(openAutobets.length > 0) {
    openAutobets[0].addEventListener('click', () => {
        autobets[0].classList.add("active");
    });

    openAutobets[0].previousElementSibling.addEventListener('click', () => {
        autobets[0].classList.remove("active");
    });
}


let numberBet = document.getElementById('dice-number-of-bets');
if(numberBet) {
    numberBet.oninput = () => {
        if (numberBet.value) {
            numberBet.previousElementSibling.classList.add("type");
        } else {
            numberBet.previousElementSibling.classList.remove("type");
        }
    }
}

// chat text area 
let chatTextarea = document.querySelectorAll('[name="message"]');
let countChatInner = document.getElementsByClassName('chat_footer__letters');
chatTextarea[0].oninput = () => {
    countChatInner[0].children[0].innerHTML = chatTextarea[0].value.length;
    if (chatTextarea[0].value.length > 26 && chatTextarea[0].value.length < 54) {
        chatTextarea[0].style.height = '36px';
    } else if(chatTextarea[0].value.length > 53) {
        chatTextarea[0].style.height = '54px';
    } else {
        chatTextarea[0].style.height = '19px';
    }
}

// menu 

let closeSedibar = document.getElementsByClassName('close-sidebar');
let sidebarOpen = document.getElementsByClassName('sidebar-open');
let sidebar = document.getElementsByClassName('sidebar');
let sidebarMenu = document.querySelectorAll('.sidebar ul li');
let sidebarMenuOpen = document.querySelectorAll('.sidebar-open nav ul li');
let sidebarBodyOpen = document.querySelectorAll('.sidebar-open_body');
let sidebarCategoryBlock = document.getElementsByClassName("sidebar-open_body__wrap-block");
let sidebarCategoryList = document.getElementsByClassName("sidebar-open_body__wrap-list");
let mobileOpen = document.getElementsByClassName("mobile-menu");


closeSedibar[0].addEventListener('click', () => {
    sidebarOpen[0].classList.remove('active');
    sidebar[0].classList.add('active');
    blackout_for_chat[0].style.display = "none";
    if ($(window).width() > 1850) {
        if($('.chat').hasClass('active')) {
            $('.wrap-content').removeClass('open');
            $('.main').removeClass('open');
            $('.header-not-authorized').removeClass('open');
            $('.wrap-content').addClass('open-chat');
        } else {
            $('.wrap-content').removeClass('open-menu');
        }
    } else {
        blackout_for_chat[0].style.display = "none";
    }

});
if ($(window).width() > 1199) {
    sidebarMenu.forEach((element, index) => {
        element.addEventListener('click', () => {
            if ($(window).width() < 1441) {
                blackout_for_chat[0].style.display = "block";
            } 
            sidebarMenu.forEach((el) => {
                el.classList.remove('active');
            });
            sidebarMenuOpen.forEach((el) => {
                el.classList.remove('active');
            });
            sidebarBodyOpen.forEach((el) => {
                el.classList.remove('active');
            });
            sidebarOpen[0].classList.add('active');
            sidebar[0].classList.remove('active');
            //element.classList.add('active');
            sidebarMenuOpen[index].classList.add('active');
            sidebarBodyOpen[index].classList.add('active');

            if ($(window).width() > 1850) {
                if($('.chat').hasClass('active')) {
                    $('.wrap-content').addClass('open');
                    $('.main').addClass('open');
                    $('.header-not-authorized').addClass('open');
                    $('.wrap-content').removeClass('open-chat');
                } else {
                    $('.wrap-content').addClass('open-menu');
                }
            } else {
                blackout_for_chat[0].style.display = "block";
            }
        });
    })
} else {
    mobileOpen[0].addEventListener('click', () => {
        blackout_for_chat[0].style.display = "block";
        sidebarMenu.forEach((el) => {
            el.classList.remove('active');
        });
        sidebarMenuOpen.forEach((el) => {
            el.classList.remove('active');
        });
        sidebarBodyOpen.forEach((el) => {
            el.classList.remove('active');
        });
        sidebarOpen[0].classList.add('active');
        sidebar[0].classList.remove('active');
        //sidebarMenuOpen[index].classList.add('active');
        sidebarBodyOpen[sidebarBodyOpen.length - 1].classList.add('active');
    });
}

sidebarMenuOpen.forEach((element, index) => {
    element.addEventListener('click', () => {
        sidebarMenu.forEach((el) => {
            el.classList.remove('active');
        });
        sidebarMenuOpen.forEach((el) => {
            el.classList.remove('active');
        });
        sidebarBodyOpen.forEach((el) => {
            el.classList.remove('active');
        });
        element.classList.add('active');
        // if ($(window).width() > 1199) {
        //     sidebarMenu[index].classList.add('active');
        // }
        sidebarBodyOpen[index].classList.add('active');
    });
});
let sidebarCategoryBlockNew = Object.values(sidebarCategoryBlock);
sidebarCategoryBlockNew.forEach((element,index) => {
    element.addEventListener("click", () => {
        if(element.nextSibling.nextSibling.classList[0] === 'sidebar-open_body__wrap-list') {
            sidebarCategoryBlockNew.forEach((el, ind) =>{
                if(index !== ind) {
                    el.classList.remove('active');
                    if(el.nextSibling.nextSibling) {
                        el.nextSibling.nextSibling.classList.remove('active');
                    }
                }
            });
            element.classList.toggle('active');
            element.nextSibling.nextSibling.classList.toggle('active');
        }
    });
});




// loss toogle 

let lossReset = document.getElementById('radio-buttons-loss-reset');
let lossEnable = document.getElementById('radio-buttons-loss-increase');
let lossInput = document.getElementById('input-loss');
if(lossReset) {
    lossReset.addEventListener('click', () => {
        lossInput.setAttribute('disabled', '');
    });
    lossEnable.addEventListener('click', () => {
        lossInput.removeAttribute('disabled');
    });
}
let winReset = document.getElementById('radio-buttons-reset');
let winEnable = document.getElementById('radio-buttons-increase');
let winInput = document.getElementById('input-win');
if(winReset) {
    winReset.addEventListener('click', () => {
        winInput.setAttribute('disabled', '');
    });
    winEnable.addEventListener('click', () => {
        winInput.removeAttribute('disabled');
    });
}

// cut input on mobile device

let inputText = document.querySelectorAll(".input-block-default_input-default");
if(document.body.clientWidth < 426) {
    inputText.forEach((element) => {
        if (element.value.length > 20) {
            let newString = element.value.slice(0, 17)
            element.value = newString + '...';
        }
    })
}


let dots = document.getElementsByClassName('dots');
let rulesSliderBanner = document.getElementsByClassName('rules_slider-wrap-banner');
let rulesSlider = document.getElementsByClassName('rules_slider-wrap');

let newDots = Object.values(dots);
let newRulesSliderBanner = Object.values(rulesSliderBanner);
let newRulesSlider = Object.values(rulesSlider);
newDots.forEach((element, index) => {
    element.addEventListener("click", () => {
        newDots.forEach((el) => {
            el.classList.remove('active');
        })
        newRulesSliderBanner.forEach((elem) => {
            elem.classList.remove('active');
        });
        newRulesSlider.forEach((elem) => {
            elem.classList.remove('active');
        });
        newRulesSliderBanner[index].classList.add('active');
        newRulesSlider[index].classList.add('active');
        element.classList.toggle('active');
    });
});

let horizontalScroller = document.getElementById("horizontal-scroller");
if (horizontalScroller){
    horizontalScroller.addEventListener('wheel', function(event) {
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
          var modifier = 1;
          // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
          var modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
          var modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
          // замена вертикальной прокрутки горизонтальной
          this.scrollLeft += modifier * event.deltaY;
          event.preventDefault();
        }
      });
}
let horizontalScrollerCard = document.getElementById("horizontal-scroller-card");
if (horizontalScrollerCard){
    horizontalScrollerCard.addEventListener('wheel', function(event) {
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
          var modifier = 1;
          // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
          var modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
          var modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
          // замена вертикальной прокрутки горизонтальной
          this.scrollLeft += modifier * event.deltaY;
          event.preventDefault();
        }
      });
}

  let faqOpenBtn = document.getElementsByClassName("arrow-open-btn");
  let faqBody = document.getElementsByClassName("faq_block__body"); 
  let faqBlock = document.getElementsByClassName("faq_block");
  let faqMenu = document.getElementsByClassName("faq-menu");
  let faqWrap = document.getElementsByClassName("faq_wrap");
  let accountPage = document.getElementsByClassName("account");
  let balanceBlock = document.getElementsByClassName("balance_currency-block");
  let balanceBody = document.getElementsByClassName("balance_currency-body");
  let BalanceOpenBtn = document.getElementsByClassName("arrow-open-btn-balance");
  let StatisticOpenBtn = document.getElementsByClassName("statictic-open-btn");
  let HistoryBody = document.getElementsByClassName("user-profile_responsive-row");
  let StatisticBlock = document.getElementsByClassName("user-profile_statistic-block");


  let NewFaqOpenBtn = Object.values(faqOpenBtn);
  NewFaqOpenBtn.forEach((element, index) => {
    element.addEventListener("click", () =>{
        if(faqBody.length > 0) {
            faqBody[index].classList.toggle("active");
            element.classList.toggle("active");
            faqBlock[index].classList.toggle("active");
            Object.values(faqBody).forEach((el, ind) => {
                if(index !== ind) {
                    el.classList.remove("active");
                    faqBlock[ind].classList.remove("active");
                    NewFaqOpenBtn[ind].classList.remove("active");
                }
            });
        }
    })
  }) 

  let NewBalanceOpenBtn = Object.values(BalanceOpenBtn);
  NewBalanceOpenBtn.forEach((element, index) => {
    element.addEventListener("click", () =>{
        if(balanceBody) {
            balanceBody[index].classList.toggle("active");
            element.classList.toggle("active");
            balanceBlock[index].classList.toggle("active");
            Object.values(balanceBody).forEach((el, ind) => {
                if(index !== ind) {
                    el.classList.remove("active");
                    NewBalanceOpenBtn[ind].classList.remove("active");
                    balanceBlock[ind].classList.remove("active");
                }
            });
        }
    })
  }) 

  let inputTextAdress = document.querySelectorAll(".account-addres_default");

if(document.body.clientWidth < 1301 && document.body.clientWidth > 300) {
    inputTextAdress.forEach((element) => {
        if (element.innerHTML.length > 20) {
            let newString = element.innerHTML.slice(0, 20)
            element.innerHTML = newString + '...';
        }
    })
}
let inputTextBtnName = document.querySelectorAll(".button-sports-name");

if(document.body.clientWidth < 425 && document.body.clientWidth > 381) {
    inputTextBtnName.forEach((element) => {
        if (element.innerHTML.length > 9) {
            let newStringSportsBtn = element.innerHTML.slice(0, 9)
            element.innerHTML = newStringSportsBtn + '...';
        }
    })
}

if(document.body.clientWidth < 380 && document.body.clientWidth > 340) {
    inputTextBtnName.forEach((element) => {
        if (element.innerHTML.length > 14) {
            let newStringSportsBtn = element.innerHTML.slice(0, 14)
            element.innerHTML = newStringSportsBtn + '...';
        }
    })
}
if(document.body.clientWidth < 339 && document.body.clientWidth > 300) {
    inputTextBtnName.forEach((element) => {
        if (element.innerHTML.length > 10) {
            let newStringSportsBtn = element.innerHTML.slice(0, 10)
            element.innerHTML = newStringSportsBtn + '...';
        }
    })
}

let sportsCategoryBlockTitle = document.querySelectorAll(".sports_category-block-title span:last-child");

if(document.body.clientWidth < 600 && document.body.clientWidth > 370) {
    sportsCategoryBlockTitle.forEach((element) => {
        if (element.innerHTML.length > 17) {
            let newStringSportsBtn = element.innerHTML.slice(0, 10)
            element.innerHTML = newStringSportsBtn + '...';
        }
    })
}
if(document.body.clientWidth < 369 && document.body.clientWidth > 300) {
    sportsCategoryBlockTitle.forEach((element) => {
        if (element.innerHTML.length > 14) {
            let newStringSportsBtn = element.innerHTML.slice(0, 10)
            element.innerHTML = newStringSportsBtn + '...';
        }
    })
}

  $(document).mouseup(function(e) {
    let closeOut = $(".balance_currency-block");
    if (closeOut.length) {
        if (!closeOut.is(e.target) &&
            closeOut.has(e.target).length === 0) {
                Object.values(balanceBody).forEach(function(element, i) {
                    element.classList.remove("active");
                    balanceBlock[i].classList.remove("active");
                });
        }
    }
});
    
let NewStatisticOpenBtn = Object.values(StatisticOpenBtn);
NewStatisticOpenBtn.forEach((element, index) => {
    element.addEventListener("click", () =>{
        if(HistoryBody){
            HistoryBody[index].classList.toggle("active");
            element.classList.toggle("active");
            StatisticBlock[index].classList.toggle("active");
            Object.values(HistoryBody).forEach((el, ind) => {
                if(index!==ind) {
                    el.classList.remove("active");
                    NewStatisticOpenBtn[ind].classList.remove("active");
                    StatisticBlock[ind].classList.remove("active");
                }
            });
        }
    })
})
  let newFaqMenu = Object.values(faqMenu);
  let newFaqWrap = Object.values(faqWrap);
  let NewAccount = Object.values(accountPage);
  newFaqMenuAccount = Object.values(faqMenu);
  newFaqMenu.forEach((element, index) => {
    element.addEventListener("click", () =>{
        newFaqMenu.forEach((el) => {
            el.classList.remove("active");
        });
        element.classList.add("active");

        newFaqWrap.forEach((item) => {
            item.classList.remove('active');
        });
        if(accountPage.length > 0){
            if(faqWrap[index]) {
                faqWrap[index].classList.add("active");
            }
        }
    })
  }) 
  newFaqMenuAccount.forEach((element, index) => {
    element.addEventListener("click", () =>{
        newFaqMenu.forEach((el) => {
            el.classList.remove("active");
        });
        element.classList.add("active");

        NewAccount.forEach((item) => {
            item.classList.remove('active');
        });
        if(accountPage) {
            accountPage[index].classList.add("active");
        }
    })
  }) 
  if ($(window).width() < 1101) {
    let userProfile = document.querySelectorAll('.user-profile_responsive-row');
    userProfile.forEach((el) => {
        el.classList.remove('loosing');
        el.classList.remove('removed');
    });
  }

  let selectOptionCheckbox  = document.querySelectorAll('.select-option-checkbox');

  selectOptionCheckbox.forEach((element,index) => {
    let checkboxItem = element.querySelectorAll('.checkbox-block-item input');
    checkboxItem.forEach((el) => {
        el.addEventListener("change", () => {
            let checkboxTitle = element.querySelectorAll('.select-option_title p');
            let checkboxTitleVal = checkboxTitle[0].innerHTML;
            let newValue;
            if(checkboxTitleVal === 'All') {
                checkboxTitle[0].innerHTML = el.value;
            } else {
                checkboxItem.forEach((elIn, indexIn) => {
                    if(elIn.checked === true) {
                        if(indexIn > 0 && newValue !== undefined) {
                            newValue = newValue + ', ' + elIn.value
                        } else {
                            newValue = elIn.value
                        }
                    }
                });
                if (newValue) {
                    checkboxTitle[0].innerHTML = newValue;
                } else {
                    checkboxTitle[0].innerHTML = 'All';
                }
                
            }
            
        });
    });
  });

  let slotsBlockTitle = document.querySelectorAll('.slots_block-title .tooltip-open');
  let slots_tooltip = document.querySelectorAll('.slots_tooltip');
  let slotsTooltipBtn = document.querySelectorAll('.slots_tooltip-title .tooltip-close');
  if(slotsBlockTitle) {
    slotsBlockTitle.forEach((element, index) => {
        element.addEventListener('click', () => {
            slots_tooltip.forEach((elem) => {
                elem.classList.remove('active');
            });
            slotsBlockTitle.forEach((el) => {
                el.classList.remove('active');
            });
            element.classList.toggle('active');
            slots_tooltip[index].classList.toggle('active');
        });
      });
      slotsTooltipBtn.forEach((element) => {
        element.addEventListener('click', () => {
            slots_tooltip.forEach((elem) => {
                elem.classList.remove('active');
            });
            slotsBlockTitle.forEach((el) => {
                el.classList.remove('active');
            });
        });
      });
    
      $(document).mouseup(function(e) {
        let closeOut = $(".slots_tooltip");
        if (closeOut.length) {
            if (!closeOut.is(e.target) &&
                closeOut.has(e.target).length === 0) {
                    slots_tooltip.forEach((elem) => {
                        elem.classList.remove('active');
                    });
                    slotsBlockTitle.forEach((el) => {
                        el.classList.remove('active');
                    });
            }
        }
     });
  }

  let searchInput = document.getElementById("search");
  let searchDelete = document.querySelectorAll(".search-wrap .delete-text");
  if(searchInput) {
    searchInput.oninput = () => {
        if (searchInput.value) {
            searchDelete[0].style.display = 'block';
        } else {
            searchDelete[0].style.display = 'none';
        }
    }
  }


  let sportCategoryHeader = document.getElementsByClassName("sports_category-block-header");
  let sportCategoryBody = document.getElementsByClassName("sports_category-block-body-wrap");
  let sportCategorybtn = document.getElementsByClassName("arrow-open-btn");
  let sportCategoryWrap = document.getElementsByClassName("sports_category-wrap");
  let sportCategoryquantity = document.getElementsByClassName("sports_quantity");

  let NewSportCategoryHeader = Object.values(sportCategoryHeader);
  NewSportCategoryHeader.forEach((element, index) => {
    element.addEventListener("click", () =>{
        if(sportCategoryBody.length > 0) {
            sportCategoryBody[index].classList.toggle("active");
            sportCategorybtn[index].classList.toggle("active");
            sportCategoryWrap[index].classList.toggle("active");
            if(sportCategoryquantity.length > 0){
                sportCategoryquantity[index].classList.toggle("active");
            }
            Object.values(sportCategoryBody).forEach((el, ind) => {
                if(index !== ind) {
                    el.classList.remove("active");
                    NewSportCategoryHeader[ind].classList.remove("active");
                    sportCategorybtn[ind].classList.remove("active");
                    sportCategoryWrap[ind].classList.remove("active");
                    if(sportCategoryquantity.length > 0){
                        sportCategoryquantity[ind].classList.remove("active");
                    }
                    }
                });
            }
        })
    })


    let sportBtn = document.querySelectorAll('.button-sports');
    let sportsPanel =  document.querySelectorAll('.sports_info-panel');
    let closeSportsPanel = document.querySelectorAll('.sports_info-panel .chat_header__circle');
    
    if(sportBtn.length > 0) {
        sportBtn.forEach((element) => {
            element.addEventListener('click', () => {
                sportsPanel[0].classList.add('active');

                if ($(window).width() > 1850) {
                    if($('.sidebar-open').hasClass('active')) {
                        $('.wrap-content').addClass('open');
                        $('.main').addClass('open');
                        $('.header-not-authorized').addClass('open');
                        $('.wrap-content').removeClass('open-menu');
                    } else {
                        $('.wrap-content').addClass('open-chat');
                    }
                } else {
                    blackout_for_chat[0].style.display = "block";
                }
            });
        });
        closeSportsPanel[0].addEventListener('click', () => {
            sportsPanel[0].classList.remove('active');
            if ($(window).width() > 1850) {
                if($('.sidebar-open').hasClass('active')) {
                    $('.wrap-content').removeClass('open');
                    $('.main').removeClass('open');
                    $('.header-not-authorized').removeClass('open');
                    $('.wrap-content').removeClass('open-chat');
                    $('.wrap-content').addClass('open-menu');
                } else {
                    $('.wrap-content').removeClass('open-chat');
                    $('.wrap-content').removeClass('open-menu');
                }
            } else {
                blackout_for_chat[0].style.display = "none";
            }
        });
    }

    // slider

    let sliderItem = document.querySelectorAll('.slider_item');
    let sliderDots = document.querySelectorAll('.slider_dots ul li');

    if(sliderItem.length > 0) {
        sliderItem[0].style.zIndex = sliderItem.length;
        sliderItem[1].style.zIndex = sliderItem.length - 1;
        sliderItem[1].classList.add('next');
        console.log(sliderItem.length)
        if(sliderItem.length > 2) {
            sliderItem[sliderItem.length - 1].classList.add('prev');
        }
        let elementItem = 0
        sliderDots.forEach((element,index) => {
            element.addEventListener('click', () => {
                sliderItem.forEach(el => {
                    el.classList.remove('active');
                    el.style.zIndex = 0;
                    el.classList.remove('next');
                    el.classList.remove('prev');
                });
                sliderDots.forEach(el => {
                    el.classList.remove('active');
                });
                element.classList.add('active');
                if(sliderItem.length > 2) {
                    if(index === 0) {
                        sliderItem[sliderItem.length - 1].classList.add('prev');
                    } else {
                        sliderItem[index - 1].classList.add('prev');
                    }
                }
                sliderItem[index].classList.add('active');
                sliderItem[index].style.zIndex = sliderItem.length;

                if(index !== sliderItem.length - 1) {
                    let item = index + 1;
                    sliderItem[item].style.zIndex = sliderItem.length - 1;
                    sliderItem[item].classList.add('next');
                    elementItem = index
                } else {
                    sliderItem[0].style.zIndex = sliderItem.length - 1;
                    sliderItem[0].classList.add('next');
                    elementItem = 0
                }
            });
        });

        sliderItem.forEach((element,index) => {
            element.addEventListener('click', () => {
                element.addEventListener('click', () => {
                    sliderItem.forEach(el => {
                        el.classList.remove('active');
                        el.style.zIndex = 0;
                        el.classList.remove('next');
                        el.classList.remove('prev');
                    });
                    sliderDots.forEach(el => {
                        el.classList.remove('active');
                    });
                    element.classList.add('active');
                    if(sliderItem.length > 2) {
                        if(index === 0) {
                            sliderItem[sliderItem.length - 1].classList.add('prev');
                        } else {
                            sliderItem[index - 1].classList.add('prev');
                        }
                    }
                    sliderDots[index].classList.add('active');
                    sliderItem[index].style.zIndex = sliderItem.length;
                    if(index !== sliderItem.length - 1) {
                        let item = index + 1;
                        sliderItem[item].style.zIndex = sliderItem.length - 1;
                        sliderItem[item].classList.add('next');
                        elementItem = index
                    } else {
                        sliderItem[0].style.zIndex = sliderItem.length - 1;
                        sliderItem[0].classList.add('next');
                        elementItem = 0
                    }
                        
                });
            })
        });

        setInterval(() => {
            sliderItem.forEach(el => {
                el.classList.remove('active');
                el.style.zIndex = 0;
                el.classList.remove('next');
                el.classList.remove('prev');
            });
            sliderDots.forEach(el => {
                el.classList.remove('active');
            });
            if(sliderItem.length > 2) {
                if(elementItem === 0) {
                    sliderItem[sliderItem.length - 1].classList.add('prev');
                } else {
                    sliderItem[elementItem - 1].classList.add('prev');
                }
            }
            sliderDots[elementItem].classList.add('active');
            sliderItem[elementItem].classList.add('active');
            sliderItem[elementItem].style.zIndex = sliderItem.length;

            if(elementItem !== sliderItem.length - 1) {
                let item = elementItem + 1;
                sliderItem[item].style.zIndex = sliderItem.length - 1;
                sliderItem[item].classList.add('next');
                elementItem++;
            } else {
                sliderItem[0].style.zIndex = sliderItem.length - 1;
                sliderItem[0].classList.add('next');
                elementItem = 0;
            }
            
        }, 4000)
    }

    let infoPanelList = document.querySelectorAll(".info-panel_header ul li a");
    let sportsInfoPanelBlock = document.querySelectorAll('.sports_info-panel-block');

    infoPanelList.forEach((element,index) => {
        let sportsPanelWrapBtn = sportsInfoPanelBlock[index].querySelectorAll(".info-panel_btn-wrap button");
        let sportsInfoPanelFooter = sportsInfoPanelBlock[index].querySelectorAll('.info-panel_footer');
        let sportsInfoPanelBody = sportsInfoPanelBlock[index].querySelectorAll('.info-panel_body-multi'); 
        sportsPanelWrapBtn.forEach((element,index) => {
            element.addEventListener('click', () => {
                sportsPanelWrapBtn.forEach((el) => {
                    el.classList.remove('active');
                });
                sportsInfoPanelFooter.forEach((el) => {
                    el.classList.remove('active');
                });
                sportsInfoPanelBody.forEach((el) => {
                    el.classList.remove('active');
                });
                sportsInfoPanelBody[index].classList.add('active');
                sportsInfoPanelFooter[index].classList.add('active');
                element.classList.add('active');
            });
        });
        element.addEventListener('click', () => {
            infoPanelList.forEach((el) => {
                el.classList.remove('active')
            });
            sportsInfoPanelBlock.forEach((el) => {
                el.classList.remove('active')
            });
            sportsInfoPanelBlock[index].classList.add('active');
            element.classList.add('active');
        });
    });
    
    let sportsCategoryBlockBody = document.querySelectorAll('.sports_category-block-body');

    sportsCategoryBlockBody.forEach((element) => {
        let elementBtn = element.querySelectorAll('.button-sports');
        if(elementBtn.length < 3) {
            element.classList.add('double');
        }
    });    

    $(document).ready(function(){
        $(".btn-ranks").click(function(){
            if ($(".owl-carousel").length > 0) {
                let loopValue = false;
                if ($(window).width() < 769) {
                    loopValue = true;
                }
                let owl = $(".owl-carousel").owlCarousel({
                    responsive: {
                        0: {items: 1},
                        520: {items: 2},
                        900: {items: 3},
                    },
                    item: 3,
                    loop: true,
                    margin: 30,
                    autoplay: loopValue,
                    nav: true,
                    navText: ['<div class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.85074e-06 1.88669L5.56508 8L2.47409e-07 14.1133L1.71743 16L9 8L1.71744 2.25214e-07L1.85074e-06 1.88669Z" fill="white"/></svg></div>','<div class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.85074e-06 1.88669L5.56508 8L2.47409e-07 14.1133L1.71743 16L9 8L1.71744 2.25214e-07L1.85074e-06 1.88669Z" fill="white"/></svg></div>']
                });
                $('.closse-modal-level').on('click',function(){
                    owl.trigger('stop.owl.autoplay')
                })
                $('.account-popup .closse-modal-level').click(() => {
                    $('.account-popup').removeClass('active');
                });
                let nextClick = false;
                $('.owl-next').click(() => {
                    nextClick = true;
                });
                $('.owl-prev').click(() => {
                    nextClick = false;
                });

                owl.on('translated.owl.carousel', function (event) {
                    if(nextClick){
                        if(event.item.count + 3 === event.item.index) {
                            owl.trigger('to.owl.carousel', [0, 400]);
                        }
                    }
                });
                
            }
        });
        if ($(".scroll").length > 0) {
            $('.scroll').mCustomScrollbar({
                theme:'dark',
            })
        }
        if ($(".scroll-vertical").length > 0) {
            $('.scroll-vertical').mCustomScrollbar({
                theme:'dark',
                axis: "x",
            })
        }
    });

    let gameBreadcrumbItem = document.querySelectorAll('.wrap-game-info .breadcrumb_item-wrap > li');
    let gameBreadcrumbListAll = document.querySelectorAll('.wrap-game-info .breadcrumb_item-wrap li .breadcrumb_list');

    gameBreadcrumbItem.forEach((element, index) => {
        element.addEventListener('click', () => {
            let gameBreadcrumbList = element.querySelectorAll('.breadcrumb_list');
            if (gameBreadcrumbList.length > 0) {
                gameBreadcrumbListAll.forEach((el,ind) => {
                    console.log(index, ind)
                    if(index - 1 !== ind) {
                        el.classList.remove('active');
                    } else {
                        el.classList.toggle('active');
                    }
                });
            }
        });
    });

    let sportsLiveMenuWrap = document.querySelectorAll('.sports_live-menu-wrap ul a');
    let liveSportsCategory = document.querySelectorAll('.sports_category');

    if(sportsLiveMenuWrap.length > 0) {
        sportsLiveMenuWrap.forEach((element, index) => {
            element.addEventListener('click', () => {
                sportsLiveMenuWrap.forEach((el) => {
                    el.classList.remove('active');
                });
                liveSportsCategory.forEach((el) => {
                    el.classList.remove('active');
                });
                element.classList.add('active');
                liveSportsCategory[index].classList.add('active');
            });
        });
    }
  
   // Set the date we're counting down to
let countDownDate = new Date("December 5, 2020 15:37:25").getTime();
let countDownSet = document.getElementById("demo");
if(countDownSet) {
    // Update the count down every 1 second
    let x = setInterval(() => {

    // Get today's date and time
    let now = new Date().getTime();
        
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    // Output the result in an element with id="demo"
    countDownSet.innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        countDownSet.innerHTML = "EXPIRED";
    }
    }, 1000);
}
    
