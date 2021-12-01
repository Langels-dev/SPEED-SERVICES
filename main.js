// Validador del formulario

const btnEnviar = document.querySelector('#submit');
const formulario = document.querySelector('#enviar-email')

//variables para los campos
const nombre = document.querySelector('#fname')
const email = document.querySelector('#email')
const msj = document.querySelector('#subject')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListener()
function eventListener() {
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);
    msj.addEventListener('blur', validarFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}

// Funciones
function iniciarApp() {
    btnEnviar.disabled = true
}

// Validar el formulario
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        e.target.style.borderBottomColor = 'green';
    } else {
        e.target.style.borderBottomColor = 'red';
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') {

        if(er.test( e.target.value ) ) {
            e.target.style.borderBottomColor = 'green';
        } else {
            e.target.style.borderBottomColor = 'red';
            mostrarError('Email no válido');
        }
    }

    if( er.test( email.value ) && email.value !== '' && msj.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled')
        btnEnviar.classList.add('active')
    } else {
        iniciarApp()
        btnEnviar.classList.remove('active')
        btnEnviar.classList.add('disabled')
    }
}

function mostrarError(mensaje) {
    Notiflix.Notify.Init({
        width:"380px",
        fontSize:"18px",
        fontFamily:"Quicksand",
        useGoogleFont:true,
        closeButton:true,
        position:"right-bottom", 
    });
    Notiflix.Notify.Failure(mensaje);
}

// Envia el email
function enviarEmail(e) {
    e.preventDefault();
    Notiflix.Notify.Init({
        width:"380px",
        fontSize:"18px",
        fontFamily:"Quicksand",
        useGoogleFont:true,
        closeButton:true,
        position:"right-bottom", 
    });

    setTimeout( () => {
        Notiflix.Notify.Success('Email enviado correctamente');
        setTimeout(() => {
            resetearFormulario();
        }, 3000);
    }, 1000);
}

function resetearFormulario() {
    formulario.reset();
    iniciarApp()
    btnEnviar.classList.remove('active')
    btnEnviar.classList.add('disabled')
}