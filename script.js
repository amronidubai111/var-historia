// script.js

const gallery = document.querySelector(".gallery");

// =========================
// SKAPA ALLA BILDER + VIDEOS
// =========================

for (let i = 1; i <= 41; i++) {

    const card = document.createElement("div");
    card.className = "photo-card";

    const image = document.createElement("img");

    image.src = "./bild" + i + ".jpg";
    image.alt = "Minne " + i;
    image.loading = "lazy";

    card.appendChild(image);
    gallery.appendChild(card);


    // VIDEO 1 EFTER BILD 2
    if (i === 2) {

        const videoCard = document.createElement("div");
        videoCard.className = "photo-card";

        const video = document.createElement("video");

        video.src = "./video1.mp4";
        video.controls = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        videoCard.appendChild(video);
        gallery.appendChild(videoCard);
    }


    // VIDEO 2 EFTER BILD 20
    if (i === 20) {

        const videoCard = document.createElement("div");
        videoCard.className = "photo-card";

        const video = document.createElement("video");

        video.src = "./video2.mp4";
        video.controls = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        videoCard.appendChild(video);
        gallery.appendChild(videoCard);
    }
}


// =========================
// PILAR
// =========================

function flyttaBild(riktning) {

    const bild = document.querySelector(".photo-card");

    if (!bild) return;

    const avstand = bild.offsetWidth + 20;

    gallery.scrollBy({
        left: avstand * riktning,
        behavior: "smooth"
    });
}


// =========================
// AUTOPLAY PÅ VIDEOS
// =========================

const videos = document.querySelectorAll(".photo-card video");

const videoObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {});

            } else {

                video.pause();
            }

        });

    },
    {
        threshold: 0.6
    }
);

videos.forEach((video) => {
    videoObserver.observe(video);
});


// =========================
// KNAPP PÅ STARTSIDAN
// =========================

function visaHistoria() {

    const minnen = document.getElementById("minnen");

    if (minnen) {

        minnen.scrollIntoView({
            behavior: "smooth"
        });

    }
}


// =========================
// ÖVERRASKNING
// =========================

function visaOverraskning() {

    const meddelande =
        document.getElementById("hemligtMeddelande");

    if (meddelande) {

        meddelande.classList.add("show");

    }
}
