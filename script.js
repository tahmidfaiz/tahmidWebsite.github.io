/*================== send email ================= */

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
    };

   const serviceID = "service_upgiyw3";
   const templateID = "template_5gq5px6";

   emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    console.log(res);
    alert("Your message was sent successfully");
   })
.catch((err) => console.log(err));
}
 


/*================== toggle icon navbar ================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*================== scroll section active link ================= */



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    /*================== sticky navbar ================= */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*================== remove toggle icon navbar when click navbar link (scroll) ================= */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

    /*================== Scroll reveal ================= */
    ScrollReveal({
         reset: true,
         distance: '80px',
         duration: 2000,
         delay: 200
        });
        
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });  
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); 
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });  
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });  


           /*================== typed js ================= */
           const typed = new Typed('.multiple-text', {
            strings: ['Software Developer', 'Web Developer', 'Data Scientist'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
           });


           
           
           