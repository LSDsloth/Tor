import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';
import Hover from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/hover.esm.js';
import { songs } from "../scripts/songs.js";

const coverWrapper = document.getElementById("cover-wrapper")

console.log(songs)

const play = document.getElementById("playButton");


// Create a WaveSurfer instance
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#145bcc',
    progressColor: '#1768EB',
    height: 50,
    // autoplay: true,
    plugins: [
      Hover.create({
        lineColor: '#65ebc9',
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

  wavesurfer.on("pause", function() {
    play.setAttribute("class", "control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-play")
    play.innerHTML = `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />`
  })

  wavesurfer.on("play", function() {
    play.setAttribute("class", "control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-pause")
    play.innerHTML = `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />`
  })
  // songs.forEach(song => {
  //   const sang =
  //   `<div class="background-img"></div>
  //   <div class="song-info">
  //       <div class="cover-img-wrapper">
  //           <img class="cover-img" src="${song.track}" alt="${song.name}">
  //       </div>
  //       <a href="#" class="song-name">${song.name}</a>
  //       <div class="waveform-wrapper">
  //           <div id="time">0:00</div>
  //           <div id="waveform">
  //           </div>
  //           <div id="duration">0:00</div>
  //       </div>
  //       <div class="audio-controls">
  //           <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
            
  //           <svg id="playButton" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
            
  //           <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="control-buttons icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
  //       </div>
  //   </div>`
  //   coverWrapper.innerHTML += sang;
  // })
   