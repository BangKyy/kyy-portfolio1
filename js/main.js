let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg) {
    emailjs.send("service_b6wk3ux","template_e9w7mw8",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oh No...",
        Text: "Fields can't be empty!",
        icon: "error",
    });
}
function success() {
    swal({
        title: "Email sent successfully",
        Text: "We try to reply in 24 hours",
        icon: "Success",
    });
}

// Header background change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTopS.classList.toggle("scroll-active", window.scrollY >= 400);
});
