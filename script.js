document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header.html and load it into the page
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Reattach event listeners after the header has been loaded
            // For the burger menu
            document.getElementById('burger-menu').addEventListener('click', function() {
                document.getElementById('menu').classList.toggle('active');
            });

            // Reattach event listeners for the language dropdown if needed
            document.querySelector(".dropbtn").addEventListener("click", function(event) {
                event.stopPropagation();
                document.querySelector(".dropdown-content").classList.toggle("show");
            });

            // Close dropdown when clicking outside
            window.addEventListener("click", function(e) {
                if (!e.target.matches(".dropbtn")) {
                    document.querySelector(".dropdown-content").classList.remove("show");
                }
            });
        })
        .catch(error => console.log("Error loading header: ", error));
});

// articles.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.article-card');
    const cardWidth = cards[0].offsetWidth + 20; // Including padding
    let currentIndex = 0;

    const moveCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            moveCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    });

    // Make cards clickable (dummy action, e.g., alert)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Article clicked! (This is a demo)');
        });
    });
});
