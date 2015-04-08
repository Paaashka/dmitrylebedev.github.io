var mainNav = document.querySelector('.main-nav__list');
var link = document.querySelector('.main-nav__toggle');
var close = document.querySelector('.main-nav__toggle');

document.querySelector( ".main-nav__toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

if (link) {
link.addEventListener(
    'click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    mainNav.classList.toggle('open')
});
}
