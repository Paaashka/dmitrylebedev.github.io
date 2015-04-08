/*----------------------------------
    Map
----------------------------------*/
ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
            center: [45.04468, 38.9380], //координаты карты
            zoom: 16 //приближение карты
        }),
    myPlacemark = new ymaps.Placemark([45.0433,38.9442],
        {
        hintContent: 'Nёrds'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/balloon.png', //  путь до картинки
        iconImageSize: [151, 190], //размер картинки
        iconImageOffset: [-45, -190] //смещение ножки балуна относительно левого верхнего угла. 
    });
    myMap.geoObjects.add(myPlacemark);
});
/*----------------------------------
    Form
----------------------------------*/
var link = document.querySelector('.btn-write');
var popup = document.querySelector('.write-us-popup');
var close = document.querySelector('.write-us-popup-close');
var cancel = document.querySelector('.write-us-popup-cancel');
var name = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var comment = popup.querySelector('[name=comment]');
var form = popup.querySelector('form');
var storage = localStorage.getItem('name');
var storage = localStorage.getItem('email');


link.addEventListener(
    'click', function(event) {
    event.preventDefault();
    popup.classList.add('write-us-popup-show');
});
close.addEventListener(
    'click', function(event) {
    event.preventDefault();
    popup.classList.remove('write-us-popup-show')
});
cancel.addEventListener(
    'click', function(event) {
    event.preventDefault();
    popup.classList.remove('write-us-popup-show')
});

form.addEventListener('submit', function(event) {
    if (!(email.value && comment.value && name.value)) {
    event.preventDefault();
        popup.classList.add('write-us-popup-error');
    } else {
        event.preventDefault();
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
    }   
});
window.addEventListener('keydown', function(event){
    if (event.keyCode == 27) { //esc
        if (popup.classList.contains("write-us-popup-show")) {
            popup.classList.remove('write-us-popup-show');
        }
    }
})
