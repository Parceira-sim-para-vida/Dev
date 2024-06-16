       function showModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "flex";
        }

        // Close the modal when clicking outside of the modal content
        window.onclick = function(event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
