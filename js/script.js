const openBtn = $('.header__button');
const closeBtn = $('.modal__close');
const title = $('.modal__title');


// открыть по кнопке

openBtn.click(function() {
    $('.modal').show(300);
});


// закрыть по клику на крестик

closeBtn.click(function() {
    $('.modal').hide(300);
});


//закрыть по клику мимо

$('.modal').click(function(event){
    if(event.target == this) {
        $('.modal').hide(300);
    }
});

// $(document).click(function (event) {
//     if ($(event.target).is('.modal')) {
//         $('.modal').hide(300);;
//     }
// });

//отослать форму

$('.modal__form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            title.text('Спасибо ваша заявка принята!')
            $('.modal__form').slideUp(300);
        },
        error() {
            title.text('Что то пошло не так, попробуйте позже!')
        }
    })
});


// Бургер

const burgerBtn = $('.header__burger');
const closeMenu = $('.header__close');


burgerBtn.click(function(){
    $('.header__menu').show(300);
    burgerBtn.hide(300);
    closeMenu.show(300);
});

closeMenu.click(function(){
    $('.header__menu').hide(300);
    burgerBtn.show(300);
    closeMenu.hide(300);
})

$('.header__menu').click(function(event){
    if(event.target == this) {
        $('.header__menu').hide(300);
    }
});


// $('.header__overlay').click(function(event){
//     if(event.target == this) {
//         $('.header__overlay').hide(300);
//     }
// });



// $('.header__burger').on('click', function() {
//     $('.header__overlay').show(300);
//     $('.header__close').animate({
//         opasity: 1,
//     }, 300, 'swing');
// });

// closeMenu.on('click', function(){
//     $('.header__overlay').hide();
// })