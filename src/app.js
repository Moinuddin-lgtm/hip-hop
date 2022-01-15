        document.addEventListener("contextmenu", function (disabled) {
            disabled.preventDefault();
        })


        // Selector 
        var musicContainer = document.querySelector(".music-container");
        var prev = document.querySelector("#prev");
        var next = document.querySelector("#next");
        var play = document.querySelector("#play");
        var audio = document.querySelector("#audio");
        var title = document.querySelector("#title");
        var cover = document.querySelector(".cover img");
        var progress = document.querySelector(".progress");
        var progressbar = document.querySelector(".progressbar");
        // Songs 
        var songs = ['social', 'button', 'filp'];
        var songIndex = 1;
        // Prev 
        prev.addEventListener("click", function () {
            songIndex--;
            if (songIndex < 0) {
                songIndex = songs.length - 1;
            }
            loadSong(songs[songIndex]);
            audio.play();
            musicContainer.classList.add("play");
            play.querySelector("i.fa").classList.remove("fa-play")
            play.querySelector("i.fa").classList.add("fa-pause")

        })
        // NExt 
        next.addEventListener("click", function () {
            songIndex++;
            if (songIndex > songs.length - 1) {
                songIndex = 0;
            }
            loadSong(songs[songIndex]);
            audio.play();
            musicContainer.classList.add("play");
            play.querySelector("i.fa").classList.remove("fa-play")
            play.querySelector("i.fa").classList.add("fa-pause")
          

        })
        // Play 
        play.addEventListener("click", function () {
            if (musicContainer.classList.contains("play")) {
                audio.pause();
                musicContainer.classList.remove("play");
                play.querySelector("i.fa").classList.remove("fa-pause")
                play.querySelector("i.fa").classList.add("fa-play")
            } else {
                audio.play();
                musicContainer.classList.add("play");
                play.querySelector("i.fa").classList.remove("fa-play")
                play.querySelector("i.fa").classList.add("fa-pause")
            }
        })

        // Load SOng 
        loadSong(songs[songIndex]);

        function loadSong(songs) {
            title.textContent = songs;
            cover.src = './images/' + songs + '.jpg';
            audio.src = './audio/' + songs + '.mp3'
        };

        // Progressbar 

        audio.addEventListener("timeupdate", function (e) {
            var {
                duration,
                currentTime
            } = e.srcElement;
            var ActualTime = (currentTime / duration) * 100;
            progress.style.width = `${ActualTime}%`;





        })

        // Set Progressbar 
        progressbar.addEventListener("click", function (e) {
            var width = this.clientWidth;
            var clickX = e.offsetX;
            var duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;

        })

        // Ended 
        audio.addEventListener("ended", function () {
            songIndex++;
            if (songIndex > songs.length - 1) {
                songIndex = 0;
            }
            loadSong(songs[songIndex]);
            audio.play();
        });