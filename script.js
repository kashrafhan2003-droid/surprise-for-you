const proposal = document.getElementById("proposal");
const mainCard = document.getElementById("mainCard");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const btn = document.getElementById("playBtn");
const song = document.getElementById("song");
const surprise = document.getElementById("surprise");
const card = document.querySelector(".card");

// No button bhaagega
function moveNoButton() {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

// YES CLICK
yesBtn.addEventListener("click", () => {

    proposal.style.display = "none";
    mainCard.style.display = "block";

    song.play();

    btn.innerHTML = "💖 Playing... 💖";
    btn.disabled = true;

    card.style.transform = "scale(1.03)";
    card.style.transition = "0.5s";

    createSparkles();

    setTimeout(() => {
        surprise.classList.add("show");
    },5000);

});

// Sparkles
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

// Hearts
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
        {transform:"translateY(0)",opacity:1},
        {transform:"translateY(-120vh)",opacity:0}
    ],{
        duration:duration,
        easing:"linear"
    });

    setTimeout(()=>{
        heart.remove();
    },duration);

}

setInterval(createHeart,300);

// Loader
window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList.add("loader-hide");

    },2500);

});