const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName("nav-items")[0]
// const navMenu = document.querySelector("nav");

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    // navMenu.classList.toggle('active');
    document.body.classList.toggle("cross");
    document.body.classList.toggle('hidden')

    // document.body.classList.toggle("black");    
});


// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 500;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })

window.addEventListener('scroll',  function() {
    if (window.scrollY > 600) {
        navMenu.style.position = 'fixed';
        navMenu.style.backgroundColor = 'black';
    }else{
        navMenu.style.position = 'absolute';
        navMenu.style.backgroundColor = "var(--nav-bg)";
    }
});

function hideUl() {
    document.body.classList.toggle("cross");
    navUl.classList.toggle('active');
    document.body.classList.toggle('hidden');
}

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address Is valid';
        text.style.color = 'var(--palered)';
    }
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Insert A Valid Email Address';
        text.style.color = 'var(--brightred)';
    }
}