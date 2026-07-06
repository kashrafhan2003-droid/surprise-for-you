const btn = document.getElementById("playBtn");
const song = document.getElementById("song");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {

    song.play();

    btn.innerHTML = "❤️ Playing... ❤️";

    setTimeout(() => {
        surprise.classList.add("show");
    }, 5000);

});