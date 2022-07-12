
const link_nav = document.querySelectorAll(".nav-link");
const icons = document.querySelectorAll("box-icon");
const scroll = document.querySelector("#scrolltoTop");

// Navbar funsionality

link_nav.forEach(e => {
    e.addEventListener("click", function(s) {
        link_nav.forEach(d => {
            d.classList.remove("active-link");
        })

        s.target.classList.toggle("active-link");
    });
});



document.addEventListener("click", (e) => {

    if(!e.target.closest(".nav-link")){

        link_nav.forEach(d => {
            d.classList.remove("active-link");
        })
    }
})
window.onscroll = function() {
    if(document.documentElement.scrollTop > 500){
        scroll.classList.remove("d-none")
    } else{
        scroll.classList.add("d-none")
    }
};



function backToTop() {
    document.documentElement.scrollTop = 0;
}



// Mansonry Grid


