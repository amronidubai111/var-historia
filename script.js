const gallery = document.querySelector(".gallery");


// =========================
// 41 BILDER + 2 VIDEOS
// =========================

for (let i = 1; i <= 41; i++) {

    // BILD
    const card = document.createElement("div");
    card.className = "photo-card";

    const image = document.createElement("img");

    image.src = "./bild" + i + ".jpg";
    image.alt = "Minne " + i;

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

        videoCard.appendChild(video);
        gallery.appendChild(videoCard);
    }
}


// =========================
// PILARNA
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
        threshold: 0.7
    }
);


videos.forEach((video) => {
    videoObserver.observe(video);
});


// =========================
// STARTSIDA
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

        meddelande.textContent =
            "Du betyder väldigt mycket för mig ❤️";

        meddelande.classList.add("show");

    }
}
