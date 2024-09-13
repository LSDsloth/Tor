import WaveSurfer from 'wavesurfer.js';
import Hover from 'wavesurfer.js/dist/plugins/hover.js';


const play = document.getElementById("playButton");


// Create a WaveSurfer instance
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#145bcc',
    progressColor: '#1768EB',
    height: 50,
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

  {
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60)
      const secondsRemainder = Math.round(seconds) % 60
      const paddedSeconds = `0${secondsRemainder}`.slice(-2)
      return `${minutes}:${paddedSeconds}`
    }
  
    const timeEl = document.querySelector('#time')
    const durationEl = document.querySelector('#duration')
    wavesurfer.on('decode', (duration) => (durationEl.textContent = formatTime(duration)))
    wavesurfer.on('timeupdate', (currentTime) => (timeEl.textContent = formatTime(currentTime)))
  }
  
  // Load the audio file
  wavesurfer.load('../sang/sang-1.mp4');
  
  // Play or pause audio when the button is clicked
  play.addEventListener('click', function() {
    wavesurfer.playPause();

  });


  play.addEventListener("click", clicky)
  function clicky() {
    console.log("Clicked")
    if(wavesurfer.isPlaying()) {
      play.setAttribute("class", "control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-pause")
      play.innerHTML = `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />`
    } else if(!wavesurfer.isPlaying()) {
      play.setAttribute("class", "control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-play")
      play.innerHTML = `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />`
    }
  }

