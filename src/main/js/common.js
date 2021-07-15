let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

// <i className='bx bx-x'></i>
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    }else{
        searchBox.classList.replace("bx-x", "bx-search");
    }
})