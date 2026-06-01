const openBtn = document.getElementById("openInvitation");
const splash = document.getElementById("splash-screen");
const content = document.getElementById("invitation-content");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", async () => {

    try{
        music.volume = 0.6;
        await music.play();
    }catch(e){
        console.log("Audio iniciado mediante interacción del usuario.");
    }

    splash.classList.add("hide");

    setTimeout(() => {
        splash.style.display = "none";
        content.style.display = "block";
        initAnimations();
    }, 1200);
});

/* ==========================
   CONTADOR
========================== */

const weddingDate = new Date("2026-09-25T15:30:00-05:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = document.getElementById("countdown");
const message = document.getElementById("eventMessage");

function updateCountdown() {

    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");

        message.innerHTML = "";

    } else {

        const elapsed = Math.floor(
            Math.abs(difference) / (1000 * 60 * 60 * 24)
        );

        countdown.style.display = "none";

        if (elapsed === 0) {
            message.innerHTML =
                "❤️ Hoy celebramos nuestro gran día ❤️";
        } else {
            message.innerHTML =
                `❤️ Han pasado ${elapsed} días desde nuestro gran día ❤️`;
        }
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ==========================
   FADE IN
========================== */

function initAnimations(){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll(".fade-section").forEach(section=>{
        observer.observe(section);
    });
}
