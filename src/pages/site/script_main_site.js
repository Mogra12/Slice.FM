//FUNCTION AUDIOPLAYER 1
const audioPlayer1 = document.getElementById('audio-player-1')
const progressBarPlayer1 = document.getElementById('audio-progress-player1')

function playAudio() {
    audioPlayer1.play()
}

function pauseAudio() {
    audioPlayer1.pause()
}

function updateProgressBar() {
    const percentage = (audioPlayer1.currentTime / audioPlayer1.duration) * 100
    progressBarPlayer1.value = percentage
}

function seekAudio() {
    const seekTime = (progressBarPlayer1.value / 100) * audioPlayer1.duration
    audioPlayer1.currentTime = seekTime
}
 

audioPlayer1.addEventListener('timeupdate', updateProgressBar)
progressBarPlayer1.addEventListener('input', seekAudio)

//FUNCTION AUDIOPLAYER 2
const audioPlayer2 = document.getElementById('audio-player-2')
const progressBarPlayer2 = document.getElementById('audio-progress-player2')

function playAudio2() {
    audioPlayer2.play()
}

function pauseAudio2() {
    audioPlayer2.pause()
}

function updateProgressBar2() {
    const percentage2 = (audioPlayer2.currentTime / audioPlayer2.duration) * 100
    progressBarPlayer2.value = percentage2
}

function seekAudio2() {
    const seekTime2 = (progressBarPlayer2.value / 100) * audioPlayer2.duration
    audioPlayer2.currentTime = seekTime2
}
 
audioPlayer2.addEventListener('timeupdate', updateProgressBar2)
progressBarPlayer2.addEventListener('input', seekAudio2)