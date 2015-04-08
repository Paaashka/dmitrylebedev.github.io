var link = document.querySelector(".search-form-title");
var popup = document.querySelector(".form-search");

window.addEventListener("keydown", function(event){
    if (event.keyCode == 27) { //esc
        if (popup.classList.contains("form-search-show")) {
            popup.classList.remove("form-search-show");
        }
    }
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-search-show");
});
