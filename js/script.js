const modal = $('.modal');
const modalMain = $('.modal__main');

const openBtn = $('.header__button');
const closeBtn = $('.modal__close');

const modalForm = $('.modal__form');
const modalTitle = $('.modal__title');

const menuOverlay = $('.header__overlay');
const menu = $('.header__menu');
const menuBox = $('.header__box');
// const menuBtn = $('.header__button--mobile');
const menuLink = $('.header__link');
const burgerBtn = $('.header__burger');
const closeMenu = $('.header__close');



function closeModal() {
    modalMain.hide(200, function() {
        modal.fadeOut(100, function() {
            modalForm.slideDown();
            modalTitle.text('Заказать звонок')
        });
    });
}
// открыть по кнопке

openBtn.click(function() {
    modal.fadeIn(100, function() {
        modalMain.show(200);
    });
});


// закрыть по клику на крестик

closeBtn.click(closeModal);


//закрыть по клику мимо

$('.modal').click(function(event){
    if(event.target === this) {
        closeModal();
    }
});


//отослать форму

modalForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            const [{name, tel}] = modalForm;
            console.log(data);
            modalTitle.text('Спасибо ваша заявка принята!')
            modalForm.slideUp(300, function() {
                name.value = '';
                tel.value = '';
            }); 
        },
        error() {
            modalTitle.text('Что то пошло не так, попробуйте позже!')
        }
    })  
});


// Бургер


function closeNav() {
    menu.hide(100, function() {
        menuBox.slideUp(200, function() {
            menuOverlay.fadeOut(100);
            closeMenu.fadeOut(100, function() {
                burgerBtn.fadeIn(100);
            })
        });
    });
}

burgerBtn.click(function() {
    menuOverlay.fadeIn(100, function() {
        menuBox.slideDown(200, function() {
            menu.show(100, function() {
                burgerBtn.fadeOut(100, function() {
                    closeMenu.fadeIn(100);
                })
            });
            openBtn.click(function() {
                closeNav();
            });
            menuLink.click(function() {
                closeNav();
            })
        });
    });
});

closeMenu.click(closeNav);



menuOverlay.click(function(event){
    if(event.target === this) {
        closeNav();
    }
});




// Аккордион

// $('.acc__button').hover(
//     function() {
//         $('.acc__accord').addClass("acc__accord--hover");
//     }, function() {
//         $('.acc__accord' ).removeClass( "acc__accord--hover" );
//     }
// );



$('.acc__item').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
        header: 'acc__accord',
        activeHeader: 'acc__accord, acc__accord--active',  
    },
});


$('.acc__item--even').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
        header: 'acc__even',
        activeHeader: 'acc__even, acc__even--active',
    },
});


// Карта

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


// Календарь


new AirDatepicker('#airdatepicker', {
        // isMobile: true,
        autoClose: true,
        inline: true,
});


// Часы

$(document).ready(function(){
    $('#timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 90,
        startTime: '10:00',
        minTime: '10',
        maxTime: '17:30',
    });
});