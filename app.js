let currentMusic = 0;
const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current- time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forewardBtn = document.querySelector('.foreward-btn');
const backwardBtn = document.querySelector('.backward-btn');

playBtn.addEventListener('click',() =>{
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

//setup music

const setMusic = (i) => {
    seekBar.value = 0; //set range slide value to 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = url('${song.cover]');

    currentTime.innerHTML = '00:00';
    seekBar.max = music.duration;
    setTimeout(() => {
    console.log(music.duration);
    }, 300);
}

setMusic(0);
