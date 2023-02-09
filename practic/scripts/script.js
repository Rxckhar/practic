let nextBtn = document.querySelector(".next"),
    backBtn = document.querySelector(".back"),
    sliderOld = document.querySelector(".overflow"),
    s1 = document.querySelector(".s1"),
    s2 = document.querySelector(".s2"),
    s3 = document.querySelector(".s3"),
    dots = document.querySelectorAll(".dot");
    


    

    
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        dots: true,
        nav: true,
        dotsEach: true,
        navText: [
            '<div class="nav-back"><</div>',
            '<div class="nav-next">></div>'
        ],
        responsive:{
            1:{
                items:4
            }
        }
    });
});
$(document).ready(function(){
    const slider = $("#slider-first").owlCarousel({
        loop: true,
        items: 8,
        mouseDrag: true,
        dots: true,
        nav: true,
        navText:[
            '<div class="nav-first-back"><</div>',
            '<div class="nav-first-next">></div>'
        ],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            1:{
                items:1
            }
        }
    });
});
