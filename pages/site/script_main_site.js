const audioPlayer1 = document.getElementById('audio-player-1')
const progressBarPlayer1 = document.getElementById('audio-progress-player1')
const timeupdatePlayer1 = document.getElementById('timerupdate-audio')
const spantimeupdatePlayer1 = document.getElementById('span-timeupdate')

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
 
function timerUpdaterAudio() {
    const durationAudio = audioPlayer1.duration
    timeupdatePlayer1.innerText = durationAudio
}


spantimeupdatePlayer1.innerText = `${a}`

audioPlayer1.addEventListener('timeupdate', updateProgressBar)
progressBarPlayer1.addEventListener('input', seekAudio)
