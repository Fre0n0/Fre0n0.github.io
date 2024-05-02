document.addEventListener("DOMContentLoaded", function(){
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown){
        dropdown.addEventListener("mouseover", function(){
            let dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.add('show');
        })

        dropdown.addEventListener("mouseout", function(){
            let dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.remove('show');
        });
    });
});