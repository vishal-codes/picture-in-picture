const videoElement = document.getElementById('video');
const startButton = document.getElementById('start-button');
const button = document.getElementById('button');


button.addEventListener("click", async () => {


     try {
         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
             videoElement.play();
         }
     } catch (error) {
         console.log('error', error);
     }
});

startButton.addEventListener('click' , async() => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
