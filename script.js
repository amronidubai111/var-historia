// =========================
// GALLERI
// =========================

const gallery = document.querySelector(".gallery");


// =========================
// SKAPA 41 BILDER
// =========================

for (let i = 1; i <= 41; i++) {

    const card = document.createElement("div");

    card.className = "photo-card";

    const image = document.createElement("img");

    image.src = "bilder/bild" + i + ".jpg";

    image.alt = "Minne " + i;

    card.appendChild(image);

    gallery.appendChild(card);


    // =========================
    // VIDEO 1 EFTER BILD 2
    // =========================

    if (i === 2) {

        skapaVideo("bilder/video1.mp4");
    }


    // =========================
    // VIDEO 2 EFTER BILD 20
    // =========================

    if (i === 20) {

        skapaVideo("bilder/video2.mp4");
    }
}


// =========================
// SKAPA VIDEO
// =========================

function skapaVideo(videoKalla) {

    const videoCard =
        document.createElement("div");

    videoCard.className = "photo-card";


    const video =
        document.createElement("video");


    video.src = videoKalla;

    video.muted = true;

    video.loop = true;

    video.playsInline = true;

    video.controls = true;


    videoCard.appendChild(video);

    gallery.appendChild(videoCard);
}


// =========================
// FLYTTA GALLERIET
// =========================

function flyttaBild(riktning) {

    const bild =
        document.querySelector(".photo-card");


    if (!bild) {
        return;
    }


    const avstand =
        bild.offsetWidth + 20;


    gallery.scrollBy({

        left: avstand * riktning,

        behavior: "smooth"

    });
}


// =========================
// AUTOPLAY NÄR VIDEO SYNs
// =========================

const videos =
    document.querySelectorAll(
        ".photo-card video"
    );


const videoObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    const video =
                        entry.target;


                    if (entry.isIntersecting) {

                        video.play().catch(
                            function () {
                                // Autoplay stoppades
                            }
                        );

                    } else {

                        video.pause();

                    }

                }
            );

        },

        {
            threshold: 0.7
        }

    );


videos.forEach(
    function (video) {

        videoObserver.observe(video);

    }
);


// =========================
// STARTSIDA
// =========================

function visaHistoria() {

    const minnen =
        document.getElementById("minnen");


    if (!minnen) {
        return;
    }


    minnen.scrollIntoView({

        behavior: "smooth"

    });
}


// =========================
// ÖVERRASKNING
// =========================

function visaOverraskning() {

    const meddelande =
        document.getElementById(
            "hemligtMeddelande"
        );


    if (!meddelande) {
        return;
    }


    meddelande.textContent =
        "Du betyder väldigt mycket för mig ❤️";


    meddelande.classList.add("show");
}