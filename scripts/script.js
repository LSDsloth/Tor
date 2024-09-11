import WaveSurfer from '../node_modules/wavesurfer.js/dist/wavesurfer.js';
import Hover from '../node_modules/wavesurfer.js/dist/plugins/hover.esm.js';

// Create a WaveSurfer instance
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    plugins: [
      Hover.create({
        lineColor: '#ff0000',
        lineWidth: 2,
        labelBackground: '#555',
        labelColor: '#fff',
        labelSize: '11px',
      }),
    ],
  })
  
  // Load the audio file
  wavesurfer.load('../sang/sang-1.mp4');
  
  // Play or pause audio when the button is clicked
  document.getElementById('playButton').addEventListener('click', function() {
    wavesurfer.playPause();

  });
  const play = document.getElementById("playButton");
  play.addEventListener("click", clicky)
  function clicky() {
    console.log("Clicked")
  }