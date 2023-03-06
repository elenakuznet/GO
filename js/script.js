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


// $('.modal__form').trigger('reset');


// Бургер


const burgerBtn = $('.header__burger');
const closeMenu = $('.header__close');
const overlay = $('.header__menu').parent();


burgerBtn.click(function() {
    overlay.addClass('overlay');
    $('.header__menu').show(300);
    burgerBtn.hide();
    closeMenu.show();
});

closeMenu.click(function(){
    overlay.removeClass('overlay');
    $('.header__menu').hide(300);
    closeMenu.hide();
    burgerBtn.show();
})

overlay.click(function(event){
    if(event.target == this) {
        overlay.hide(300);
        $('.header__menu').hide(300);
        closeMenu.hide();
        burgerBtn.show(); 
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


$('.acc__item').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
        header: 'acc__accord',
        activeHeader: 'acc__accord, acc__accord--active',
        hoverHeader: 'acc__accord--hover',
    }
});

$('.acc__item--even').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
        header: 'acc__even',
        activeHeader: 'acc__even--active',
        hoverHeader: 'acc__even--hover',
    }
});


ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.716198, 37.595659],
                zoom: 17
            });

            const mark = new ymaps.Placemark([55.716198, 37.595659], {
                hintContent: 'GAME OVER - игровое пространство',
            }, {
                iconLayout: 'default#image'
            });
            myMap.geoObjects.add(mark);

            myMap.behaviors.disable('drag');

            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            // myMap.controls.remove('fullscreenControl');
            // myMap.controls.remove('zoomControl');
        }