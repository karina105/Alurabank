const botonAbrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

const botonTomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
const botonEnviar = document.querySelector("[data-enviar]");

let imgUrl = ""

// Funciones para la camara  del html abrir cuenta form 2 con las que se podra usar el reconocimiento facial
// Funcion para abrir la camara
botonAbrirCamara.addEventListener("click", async () => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    botonAbrirCamara.style.display = "none";
    campoCamaraCamara.style.display = "block";
    video.srcObject = iniciarVideo;
});

// Funcion para tomar la foto

botonTomarFoto.addEventListener("click", () => {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    imgUrl = canvas.toDataURL("image/jpeg");
    campoCamara.style.display = "none";
    mensaje.style.display = "block";
});

// Funcion para enviar la foto

botonEnviar.addEventListener("click", () => {
    const recibirDatos = localStorage.getItem("registro");
    const convertirDatos = JSON.parse(recibirDatos);
    convertirDatos.img_url = imgUrl;
    localStorage.setItem("registro", JSON.stringify(convertirDatos));

    window.location.href = "./abrir-cuenta-form-3.html";

})