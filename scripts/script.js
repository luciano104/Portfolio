
// BOTON PARA EL MENU DE CELULARES
const header = document.querySelector("header");
const button = document.querySelector(".btn-menu");

button.addEventListener("click", function() {

    header.classList.toggle("menu-abierto");

});

//CODIGO PARA ENVIAR CORREOS CON EMAILJS
emailjs.init("ndkImYRUtwqvAj9g8");

const form = document.getElementById('formulario');
const btn = document.getElementById('btn-submit');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(new FormData(this));

    btn.disabled = true;
    btn.textContent = 'Enviando...';

    emailjs.sendForm('service_fslrx0n', 'template_vxsraop', this)
    .then(() => {
        alert('¡Correo enviado con éxito!');
        form.reset();
    })
    .catch((err) => {
        alert('Error al enviar el correo. Por favor intenta de nuevo.');
        console.error('EmailJS Error:', err);
    })
    .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Enviar';
    });
});