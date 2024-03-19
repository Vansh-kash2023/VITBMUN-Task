// varibles

const togglebtn = document.getElementById("menu-icon")
const navExpanded = document.getElementById("expanded")

// Banner
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// menu-icon

// Define the toggle function
function toggleNav() {
    if(navExpanded.classList.contains("hidden")) {
        navExpanded.classList.remove("hidden");
        console.log("show");
    } else {
        navExpanded.classList.add("hidden");
        console.log("hidden");
    }
}

togglebtn.addEventListener("click", toggleNav);
toggleNav();


const togglelink = () => {
    const navExpanded = document.getElementById("expanded");
    const navBlock = document.querySelector(".nav--block");

    navBlock.addEventListener("click", function(event) {
        if (navExpanded.classList.contains("hidden")) {
            navExpanded.classList.remove("hidden");
            console.log("hidden");
        } else {
            navExpanded.classList.add("hidden");
            console.log("show");
        }
    });
};

togglelink();