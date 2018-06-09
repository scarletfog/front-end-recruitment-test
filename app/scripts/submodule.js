const butto = document.getElementById('baconButton');
let gottaLoveBacon;

gottaLoveBacon = () => {
// get some random gif with tag bacon
const imageBaconEndpoint = 'https://api.giphy.com/v1/gifs/random?api_key=hN5OslB29gTFbTyHqrd6L9HsCT3YdIQO&tag=bacon&rating=G';
fetch(imageBaconEndpoint)
  .then((resp) => resp.json())
    .then(function(data) {
        const imageResult = data.data.image_url;

        const addDiv = document.createElement('div');
        addDiv.style = 'min-width: 800px; min-height: 500px; background-size: cover';
        document.getElementById('baconPan').appendChild(addDiv).style.backgroundImage = 'url(' + `${imageResult}` + ')';
    })
    .catch((error) => {
        // adding default bacon image if anything goes wrong
            const img = document.createElement('img');
            img.src = 'http://media.washtimes.com.s3.amazonaws.com/media/image/2015/02/23/bacon.jpg';
            img.style = 'width: 100%; height: 100%;';
            document.getElementById('baconPan').appendChild(img);
    });
};


butto.addEventListener('click', gottaLoveBacon);
