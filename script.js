console.log("welcome to spotify")
let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');
let songs = [
    {songname: "Salaame - Ishq", filepath:"songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Pehle Bhi Main. Vishal Mishra, Raj Shekhar", filepath:"songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Apna Bana Le. Sachin-Jigar, Arijit Singh", filepath:"songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "O Maahi. Pritam, Arijit Singh, Irshad Kamil", filepath:"songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Wellerman. Nathan Evans/220kid/Billen ted", filepath:"songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Save your tears. Weeknd", filepath:"songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "Atronaut in the Ocaen", filepath:"songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "Party Rock Anthem Lmfao", filepath:"songs/8.mp3", coverpath: "covers/8.jpg"},
    {songname: "We can't stop Miley Cyrus", filepath:"songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname: "Never say never	Justin Bieber ft. Jaden Smith", filepath:"songs/10.mp3", coverpath: "covers/10.jpg"}

]
// audioElement.play();
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

});
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = Math.round((audioElement.currentTime/audioElement.duration) * 100);
    MyProgressBar.value = progress;
})
MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (MyProgressBar.value * audioElement.duration)/100;
})
const makeallplays = ()=>{  
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('previous').addEventListener('click', () =>{
    if(songindex<=0){
        songindex = 9;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click', () =>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
