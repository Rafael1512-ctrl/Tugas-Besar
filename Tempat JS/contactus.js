document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("5xV9fLiu63cXaQZwa"); 

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_8jeadhk", "template_19rcvqh", form)
            .then(function () {
                alert("Pesan berhasil dikirim!");
                form.reset();
            }, function (error) {
                alert("Gagal mengirim pesan: " + error.text);
            });
    });
});