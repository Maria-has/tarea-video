let number = 0;
let data = null;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

async function getData() {
  if (data === null) {
    const response = await fetch('js/ajax.json');
    const jsonData = await response.json();
    data = jsonData;
  }
}

function changeVideo() {
  getData();

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