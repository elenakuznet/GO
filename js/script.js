const openBtn = $('.header__button');
const closeBtn = $('.modal__close');



// открыть по кнопке

openBtn.click(function() {
    $('.modal').show(300);
    $('.modal__main').show(300);
});


// закрыть по клику на крестик

closeBtn.click(function() {
    $('.modal').hide(300);
    $('.modal__main').hide(300);
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

// $('.modal__form').submit(function(event) {
//     event.preventDefault();
//     $.post('https://jsonplaceholder.typicode.com/posts', $)
// });