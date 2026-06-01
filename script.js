const openBtn = document.getElementById("openInvitation");
const splash = document.getElementById("splash-screen");
const content = document.getElementById("invitation-content");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", async () => {

    try{
        await music.play();
    }catch(error){
        console.log(error);
    }

    splash.classList.add("hide");

    setTimeout(() => {

        splash.style.display = "none";
        content.style.display = "block";

        initializeAnimations();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1200);

});

/* ===================== */
/* CONTADOR */
/* ===================== */

const weddingDate = new Date(
    "2026-09-25T15:30:00-05:00"
);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdown = document.getElementById("countdown");
const eventMessage = document.getElementById("eventMessage");

function updateCountdown(){

    const now = new Date();
    const diff = weddingDate - now;

    if(diff > 0){

        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor((diff/(1000*60*60)) % 24);
        const m = Math.floor((diff/(1000*60)) % 60);
        const s = Math.floor((diff/1000) % 60);

        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;

        eventMessage.innerHTML = "";

    }else{

        countdown.style.display = "none";

        const elapsedDays = Math.floor(
            Math.abs(diff)/(1000*60*60*24)
        );

        if(elapsedDays === 0){

            eventMessage.innerHTML =
            "❤️ Hoy celebramos nuestro gran día ❤️";

        }else{

            eventMessage.innerHTML =
            `❤️ Han pasado ${elapsedDays} días desde nuestro gran día ❤️`;

        }
    }
}

updateCountdown();
setInterval(updateCountdown,1000);

/* ===================== */
/* ANIMACIONES */
/* ===================== */

function initializeAnimations(){

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){
                    entry.target.classList.add("visible");
                }

            });

        },

        {
            threshold:0.15
        }
    );

    document
    .querySelectorAll(".fade-section")
    .forEach(section=>{
        observer.observe(section);
    });

}
