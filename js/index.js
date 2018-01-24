window.onload = function() {
    var myCarouselBox = document.querySelector(".myCarouselBox"),
        carouselMainItem = document.querySelector(".mainItem img"),
        thumbnail = document.querySelectorAll(".thumbnail"),
        selectThumnail = thumbnail[0];

    carouselMainItem.src = thumbnail[0].querySelector("img").getAttribute("src");
    selectThumnail.className += " select";

    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].onmouseover = function() {
            carouselMainItem.src = this.querySelector("img").getAttribute("src");
            selectThumnail.className = "thumbnail";
            selectThumnail = this;
            this.classList.add("select");

        };
    }
}