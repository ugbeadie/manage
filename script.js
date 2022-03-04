const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName("nav-items")[0]
const navMenu = document.querySelector("nav");

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
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

function hideUl() {
    document.body.classList.toggle("cross");
    navbarLinks.classList.toggle('active');
    // document.body.classList.toggle("black");
}