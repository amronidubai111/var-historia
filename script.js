/* =========================
   MINNESKORT - KLICK
========================= */

const minneskort =
    document.querySelectorAll(".minne");


minneskort.forEach((kort) => {

    kort.addEventListener("click", () => {

        minneskort.forEach((annatKort) => {

            if (annatKort !== kort) {
                annatKort.classList.remove("active");
            }

        });

        kort.classList.toggle("active");

    });

});


/* =========================
   VISA MINNEN
========================= */

function visaHistoria() {

    const minnen =
        document.getElementById("minnen");

    minnen.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   ÖVERRASKNING
========================= */

function visaOverraskning() {

    const meddelande =
        document.getElementById("hemligtMeddelande");

    meddelande.textContent =
        "Du betyder väldigt mycket för mig ❤️";

}


/* =========================
   ALLA 41 BILDER + VIDEOS
========================= */

const gallery =
    document.querySelector(".gallery");

const antalBilder = 41;


for (let i = 1; i <= antalBilder; i++) {

    const card =
        document.createElement("div");

    card.className = "photo-card";


    const image =
        document.createElement("img");

    image.src = `./bild${i}.jpg`;

    image.alt = `Minne ${i}`;


    card.appendChild(image);

    gallery.appendChild(card);


    /* VIDEO 1 */

    if (i === 2) {

        skapaVideo("./video1.mp4");

    }


    /* VIDEO 2 */

    if (i === 20) {

        skapaVideo("./video2.mp4");

    }

}


/* =========================
   SKAPA VIDEO
========================= */

function skapaVideo(src) {

    const card =
        document.createElement("div");

    card.className = "photo-card";


    const video =
        document.createElement("video");

    video.src = src;

    video.controls = true;

    video.muted = true;

    video.loop = true;

    video.playsInline = true;


    card.appendChild(video);

    gallery.appendChild(card);

}


/* =========================
   GALLERI-KNAPPAR
========================= */

function flyttaBild(riktning) {

    const bild =
        gallery.querySelector(".photo-card");

    if (!bild) return;


    const avstand =
        bild.getBoundingClientRect().width + 20;


    gallery.scrollBy({

        left: avstand * riktning,

        behavior: "smooth"

    });

}


/* =========================
   VIDEO AUTOPLAY
========================= */

const videos =
    document.querySelectorAll(".photo-card video");


const videoObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                const video =
                    entry.target;


                if (entry.isIntersecting) {

                    video.play().catch(() => {});

                } else {

                    video.pause();

                }

            });

        },

        {
            threshold: 0.7
        }

    );


videos.forEach((video) => {

    videoObserver.observe(video);

});
