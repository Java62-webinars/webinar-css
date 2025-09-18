//1 создаем константы имен классов
const CLASS_COL = "col-12 col-md-6 col-lg-4";
const CLASS_CARD = "card h-100";
const CLASS_IMG= "card-img-top";
const CLASS_OVL = "card-img-overlay d-flex align-items-end";
const CLASS_CAP ="w-100 small";

//2 Фото - как массив объектов
const photos = [
    {
        src: "https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg",
        alt: "Dust Storm and Jezero Crater",
        caption: "Dust Storm and Jezero Crater — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA25897_modest.jpg",
        alt: "Looking at the Crater Half Full",
        caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg",
        alt: "Curiosity 'Postcard' of Marker Band Valley",
        caption: "Curiosity “Postcard” — NASA/JPL-Caltech/MSSS"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA26632_modest.jpg",
        alt: "Curiosity Landscape While Talking to an Orbiter",
        caption: "Curiosity Landscape — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA26633_modest.jpg",
        alt: "Rock shaped like coral",
        caption: "Rock “like coral” — NASA/JPL-Caltech"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
        alt: "Phobos moon color view",
        caption: "Phobos — ESA/DLR/FU Berlin (CC BY-SA)"
    }
]
//3 Сборка
const main = document.querySelector("main");
if(main){
    const row = document.createElement("div");
    row.className = "row g-3";
    for(const p of photos) {
        const col = document.createElement("div");
        col.className = CLASS_COL;
        const card = document.createElement("div");
        card.className = CLASS_CARD;
        const img = document.createElement("img");
        img.className = CLASS_IMG;
        img.src = p.src;
        img.alt = p.alt;
        const overlay = document.createElement("div");
        overlay.className = CLASS_OVL;
        const cap = document.createElement("div");
        cap.className = CLASS_CAP;
        cap.textContent = p.caption;
        overlay.appendChild(cap);
        card.append(img, overlay);
        col.appendChild(card);
        row.appendChild(col);
    }
    main.appendChild(row);
}else{
    console.warn("main container not found");
}