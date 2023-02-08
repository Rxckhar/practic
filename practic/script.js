let nextBtn = document.querySelector(".next"),
    backBtn = document.querySelector(".back"),
    slider = document.querySelector(".overflow"),
    s1 = document.querySelector(".s1"),
    s2 = document.querySelector(".s2"),
    s3 = document.querySelector(".s3"),
    dots = document.querySelectorAll(".dot");
    

let slide = 0,
    count = 1;
    

let timeSlide = setInterval(function(){
    if (count > 3){
        count = 1;
        slides();
        slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
        console.log(count);
    }
    else{
        count++;
        slides();
        slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
        console.log(count);
    }
}, 5000);    
function slides(){
    switch(count){
        case 0: 
            slide = -1820;
            count = 3;
            dots[1].style.backgroundColor = "#d6d6d6";
            dots[0].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#e63d17";
            break;
        case 1:
            slide = 0;
            dots[1].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#d6d6d6";
            dots[0].style.backgroundColor = "#e63d17";
            break;
        case 2:
            slide = -910;
            dots[0].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#d6d6d6";
            dots[1].style.backgroundColor = "#e63d17";
            break;
        case 3:
            slide = -1820;
            dots[1].style.backgroundColor = "#d6d6d6";
            dots[0].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#e63d17";
            break;
        case 4:
            slide = 0;
            count = 1;
            dots[1].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#d6d6d6";
            dots[0].style.backgroundColor = "#e63d17";
            break;
        default:
            slide = -910;
            count = 2;
            dots[0].style.backgroundColor = "#d6d6d6";
            dots[2].style.backgroundColor = "#d6d6d6";
            dots[1].style.backgroundColor = "#e63d17";
            break;
    }
}
dots[0].style.backgroundColor = "#e63d17";
console.log(count);

dots[0].addEventListener('click', function(){
    console.log(count);
    count = 1;
    slides();
    slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
});
dots[1].addEventListener('click', function(){
    console.log(count);
    count =  2;
    slides();
    slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
});
dots[2].addEventListener('click', function(){
    console.log(count);
    count = 3;
    slides();
    slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
});


nextBtn.addEventListener('click', function(){
    
    count++;
    console.log(count);
    console.log(slide);

    slides();
    slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
    
});
backBtn.addEventListener('click', function(){
    
    count--;
    console.log(count);
    console.log(slide);

    slides();
    slider.style.transform = `translate3d(${slide}px, 0 , 0)`;
});

