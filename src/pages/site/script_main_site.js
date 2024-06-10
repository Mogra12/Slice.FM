//FUNCTION AUDIOPLAYER 1 -----------------------------------------------------------------
const audioPlayer1 = document.getElementById('audio-player-1');
const progressBarPlayer1 = document.getElementById('audio-progress-player1');

function playAudio() {
    audioPlayer1.play();
};

function pauseAudio() {
    audioPlayer1.pause();
};

function updateProgressBar() {
    const percentage = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
    progressBarPlayer1.value = percentage;
};

function seekAudio() {
    const seekTime = (progressBarPlayer1.value / 100) * audioPlayer1.duration;
    audioPlayer1.currentTime = seekTime;
};
 

audioPlayer1.addEventListener('timeupdate', updateProgressBar);
progressBarPlayer1.addEventListener('input', seekAudio);

//FUNCTION AUDIOPLAYER 2 -----------------------------------------------------------------
const audioPlayer2 = document.getElementById('audio-player-2');
const progressBarPlayer2 = document.getElementById('audio-progress-player2');

function playAudio2() {
    audioPlayer2.play();
};

function pauseAudio2() {
    audioPlayer2.pause();
};

function updateProgressBar2() {
    const percentage2 = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
    progressBarPlayer2.value = percentage2;
};

function seekAudio2() {
    const seekTime2 = (progressBarPlayer2.value / 100) * audioPlayer2.duration;
    audioPlayer2.currentTime = seekTime2;
};
 
audioPlayer2.addEventListener('timeupdate', updateProgressBar2);
progressBarPlayer2.addEventListener('input', seekAudio2);

//FUNCTION AUDIOPLAYER 3 -----------------------------------------------------------------
const audioPlayer3 = document.getElementById('audio-player-3');
const progressBarPlayer3 = document.getElementById('audio-progress-player3');

function playAudio3() {
    audioPlayer3.play();
};

function pauseAudio3() {
    audioPlayer3.pause();
};

function updateProgressBar3() {
    const percentage3 = (audioPlayer3.currentTime / audioPlayer3.duration) * 100;
    progressBarPlayer3.value = percentage3;
};

function seekAudio3() {
    const seekTime3 = (progressBarPlayer3.value / 100) * audioPlayer3.duration;
    audioPlayer3.currentTime = seekTime3;
};
 
audioPlayer3.addEventListener('timeupdate', updateProgressBar3);
progressBarPlayer3.addEventListener('input', seekAudio3);

//FUNCTION AUDIOPLAYER 4 -----------------------------------------------------------------
const audioPlayer4 = document.getElementById('audio-player-4');
const progressBarPlayer4 = document.getElementById('audio-progress-player4');

function playAudio4() {
    audioPlayer4.play();
};

function pauseAudio4() {
    audioPlayer4.pause();
};

function updateProgressBar4() {
    const percentage4 = (audioPlayer4.currentTime / audioPlayer4.duration) * 100;
    progressBarPlayer4.value = percentage4;
};

function seekAudio4() {
    const seekTime4 = (progressBarPlayer4.value / 100) * audioPlayer4.duration;
    audioPlayer4.currentTime = seekTime4;
};
 
audioPlayer4.addEventListener('timeupdate', updateProgressBar4);
progressBarPlayer4.addEventListener('input', seekAudio4);
//FUNCTION AUDIOPLAYER 4 -----------------------------------------------------------------
const audioPlayer5 = document.getElementById('audio-player-5');
const progressBarPlayer5 = document.getElementById('audio-progress-player5');

function playAudio5() {
    audioPlayer5.play();
};

function pauseAudio5() {
    audioPlayer5.pause();
};

function updateProgressBar5() {
    const percentage5 = (audioPlayer5.currentTime / audioPlayer5.duration) * 100;
    progressBarPlayer5.value = percentage5;
};

function seekAudio5() {
    const seekTime5 = (progressBarPlayer5.value / 100) * audioPlayer5.duration;
    audioPlayer5.currentTime = seekTime5;
};
 
audioPlayer5.addEventListener('timeupdate', updateProgressBar5);
progressBarPlayer5.addEventListener('input', seekAudio5);
