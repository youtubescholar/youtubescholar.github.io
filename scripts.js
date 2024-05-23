document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex > document.getElementsByClassName("mySlides").length) {
            slideIndex = 1; // Loop back to the first slide
        } else if (slideIndex < 1) {
            slideIndex = document.getElementsByClassName("mySlides").length; // Loop back to the last slide
        }
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            slides[i].style.opacity = 0;  
        }

        // Remove the "active" class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the active slide and active dot
        slides[slideIndex-1].style.display = "block";  
        slides[slideIndex-1].style.opacity = 1;  
        dots[slideIndex-1].className += " active";
    }

    // Add event listeners for next/previous controls
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Add event listeners for dots
    document.querySelectorAll('.dot').forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });
});