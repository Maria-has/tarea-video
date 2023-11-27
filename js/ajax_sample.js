let number = 0;
let data = null;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    if (data === null) {
        const simulatedResponse = [
            {
                "title": "Pensamientos de Noro, CEO de Divic Co., Ltd.",
                "content": "¿Por qué creaste una escuela de programación? ¡Te contaré sobre la experiencia original",
                "url": "https://www.youtube.com/embed/Ho1NLq7fpJQ"
            },
            {
                "title": "DEMODAY 3rd",
                "content": "Le enviaremos un video resumido del DEMODAY 3rd desde la sala de seminarios de Leverages Co., Ltd. en el lugar.",
                "url": "https://www.youtube.com/embed/S9qp7QMCabM"
            },
            {
                "title": "Estudio Dpro",
                "content": "[Estudio Dpro] Vol.10 “¡Haz gemir al entrevistador! ] Medidas de entrevista para ingenieros!",
                "url": "https://www.youtube.com/embed/q1AvJPTrfM4"
            }
            // ...
        ];
        data = simulatedResponse;
    }
}

function changeVideo() {
    getData(); // Cargar los datos 

    if (data && number < data.length) {
        const currentItem = data[number];
        titleArea.textContent = currentItem.title;
        contentArea.textContent = currentItem.content;
        videoArea.src = currentItem.url;

        number = (number + 1) % data.length;
    }
}

button.addEventListener('click', changeVideo);
window.onload = changeVideo;