
const audio = window.document.getElementById('audio-player-1')
const play_button = window.document.getElementById('play-button-player1')
const pause_button = window.document.getElementById('pause-button-player1')
const progress_bar = window.document.getElementById('audio-progress-player1')

function play() {
    audio.play()
}

function pause() {
    audio.pause()
}

audio.addEventListener('timeupdate', () => {
    var progress = (audio.currentTime / audio.duration) * 100
    progressBar.style.width = progress + '%'
})
