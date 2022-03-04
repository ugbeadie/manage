const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName("navbar-links")[0]
const navMenu = document.querySelector(".navbar");

toggleButton.addEventListener('click', () => {
    // navUl.classList.toggle('active');
    document.body.classList.toggle("cross");
    // document.body.classList.toggle("black");    
});

// window.addEventListener('scroll',  function() {
//     if (window.scrollY > 770) {
//         navbar.style.position = 'fixed';
//         navbar.style.backgroundColor = 'black'; 
//     }else{
//         navbar.style.position = 'absolute';
//         navbar.style.backgroundColor = "var(--nav-bg)";
//     }
// });

// function hideUl() {
//     document.body.classList.toggle("cross");
//     navbarLinks.classList.toggle('active');
//     document.body.classList.toggle("black");
// }
const btn = document.getElementsByClassName('t-btn');
const slide = document.getElementById('slide');

btn[0].onclick = function () {
    slide.style.backgroundColur = 'translate(0px)';
}
btn[0].onclick = function () {
    slide.style.backgroundColur = 'translate(-800px)';
}
btn[0].onclick = function () {
    slide.style.backgroundColur = 'translate(-1600px)';
}
btn[0].onclick = function () {
    slide.style.backgroundColur = 'translate(-2400px)';
}
