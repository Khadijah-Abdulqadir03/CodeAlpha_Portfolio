var moonIcon = document.getElementById("moon-icon");
        moonIcon.onclick= function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                moonIcon.src="sun.png";
            }else { 
                moonIcon.src ="moon_icon-removegbg-preview.png";

            }
        }
        
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("select").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailtoLink =
        `mailto:abdulqadirkhadijah25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});