var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#fff',
  progressColor: '#631577',
    height: 80
});

wavesurfer.load('/assets/audio/short.mp3');

var slider = document.querySelector('#slider');
