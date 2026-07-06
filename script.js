const btn = document.getElementById("playBtn");
const song = document.getElementById("song");
const surprise = document.getElementById("surprise");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {

    song.play();

    btn.innerHTML = "💖 Playing... 💖";
    btn.disabled = true;

    card.style.transform = "scale(1.03)";
    card.style.transition = "0.5s";

    createSparkles();

    setTimeout(() => {
        surprise.classList.add("show");
    }, 5000);

});

function createSparkles(){

    for(let i=0;i<25;i++){

        let sparkle=document.createElement("span");

        sparkle.innerHTML="✨";

        sparkle.style.position="fixed";
        sparkle.style.left=Math.random()*window.innerWidth+"px";
        sparkle.style.top=Math.random()*window.innerHeight+"px";
        sparkle.style.fontSize=(10+Math.random()*20)+"px";
        sparkle.style.pointerEvents="none";
        sparkle.style.transition="1.5s";
        sparkle.style.opacity="1";
        sparkle.style.zIndex="999";

        document.body.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.style.transform="translateY(-80px)";
            sparkle.style.opacity="0";
        },100);

        setTimeout(()=>{
            sparkle.remove();
        },1600);

    }

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.opacity=Math.random();

    heart.style.pointerEvents="none";

    heart.style.zIndex="1";

    document.body.appendChild(heart);

    let duration=5000+Math.random()*5000;

    heart.animate([

        {transform:"translateY(0) rotate(0deg)",opacity:1},

        {transform:"translateY(-120vh) rotate(360deg)",opacity:0}

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>{
        heart.remove();
    },duration);

}

setInterval(createHeart,300);

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},2500);

});