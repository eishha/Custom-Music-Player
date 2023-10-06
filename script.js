let playList = [
    {
        name : "Hip Hop Sux!",
        artist : "Mesin Tempur",
        source : "Mesin Tempur - Hip Hop Sux! (Official Audio)"
    },
    {
        name : " Mari Membaca",
        artist : "Mesin Tempur",
        source : "Mesin Tempur - Mari Membaca (Official Audio)"
    }
,
    {
        name : "Super Angkot Goblog",
        artist : "Mesin Tempur",
        source : "Super Angkot Goblog",
    }
,
    {
        name : "Aku Death Metal",
        artist : "Mesin Tempur",
        source : "Mesin Tempur - Aku Death Metal (Official Audio)"
    }
]   



const playSection = document.querySelector('.play-section'),
songTitle = playSection.querySelector('#song-name '),
audio = playSection.querySelector('#audio'),
playIcon = playSection.querySelector('.play'),
pauseIcon = playSection.querySelector('.pause'),
nextIcon = playSection.querySelector('#next'),
repeatIcon = playSection.querySelector("#repeat"),
volumeIcon = playSection.querySelector("#volume"),
previousIcon = playSection.querySelector("#previous"),
shuffleIcon = playSection.querySelector("#shuffle"),
saveIcon = playSection.querySelector("#save"),
ctrlIcon = playSection.querySelector(".ctrlIcon"),
muteIcon = playSection.querySelector("#mute"),
progress= playSection.querySelector("#progress"),
circle = playSection.querySelector('.circle'),
playlistSection = document.querySelector('.playlist-section'),
songImage= playlistSection.querySelector('#songImage'),
songDetails = playlistSection.querySelector('#song-details'),
active= playlistSection.querySelector('.active'),
songList = playSection.querySelectorAll('.songList');



audio.onloadedmetadata = function(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

if (audio.play()){
    setInterval(()=>{
        progress.value = audio.currentTime;
    }, 500)
}

progress.onchange = function(){
    audio.play();
    audio.currentTime =  progress.value;
    playIcon.replaceWith(pauseIcon);
}

let songIndex =0
window.addEventListener("load" , ()=>{
    setIndex(songIndex);
});


function setIndex(indexValue){
    songTitle.textContent = playList[indexValue].name;
    audio.src = `Audio/${playList[indexValue].source}.mp3`;
   
    const songLists = document.querySelectorAll('.songList')

	songLists.forEach((song, index) =>
		index === indexValue
			? song.classList.add('active')
			: song.classList.remove('active'),
	)

    audio.play();
    playIcon.replaceWith(pauseIcon);
    if (audio.paused){
        pauseIcon.replaceWith(playIcon);
    }
    }
    



playIcon.addEventListener("click" , ()=>{
    playIcon.replaceWith(pauseIcon);
    audio.play();
});
pauseIcon.addEventListener("click" , ()=>{
    pauseIcon.replaceWith(playIcon);
    audio.pause();
    
})

previousIcon.addEventListener("click" , ()=>{
    if (songIndex === 0){
     songIndex = playList.length;
    }
    else{
     songIndex --;
    }
    setIndex(songIndex);
 })
nextIcon.addEventListener("click" , ()=>{
   if (songIndex === playList.length){
    songIndex = 0;
   }
   else{
    songIndex ++;
   }
   setIndex(songIndex);
})

window.onload=()=>{
    muteIcon.replaceWith(volumeIcon);
    

}
volumeIcon.addEventListener("click", ()=>{
    audio.volume = 0;
    volumeIcon.replaceWith(muteIcon);
})
muteIcon.addEventListener("click", ()=>{
    audio.volume = 1;
    muteIcon.replaceWith(volumeIcon);
})







