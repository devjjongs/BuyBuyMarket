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

// // <script type="text/javascript">
// let counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 3) {
//         counter = 1;
//     }
// }, 1000);
// // </script>