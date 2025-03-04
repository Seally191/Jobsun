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
