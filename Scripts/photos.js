// <div class="row g-3">
//     <!-- 1 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg" class="card-img-top" alt="Dust Storm and Jezero Crater">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Dust Storm and Jezero Crater — NASA/JPL-Caltech</div>
//                 </div>
//         </div>
//     </div>
//     <!-- 2 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://photojournal.jpl.nasa.gov/jpegMod/PIA25897_modest.jpg" class="card-img-top" alt="Looking at the Crater Half Full">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Looking at the Crater Half Full — NASA/JPL-Caltech</div>
//                 </div>
//         </div>
//     </div>
//     <!-- 3 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg" class="card-img-top" alt="Curiosity 'Postcard' of Marker Band Valley">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Curiosity “Postcard” — NASA/JPL-Caltech/MSSS</div>
//                 </div>
//         </div>
//     </div>
//     <!-- 4 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://photojournal.jpl.nasa.gov/jpegMod/PIA26632_modest.jpg" class="card-img-top" alt="Curiosity Landscape While Talking to an Orbiter">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Curiosity Landscape — NASA/JPL-Caltech</div>
//                 </div>
//         </div>
//     </div>
//     <!-- 5 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://photojournal.jpl.nasa.gov/jpegMod/PIA26633_modest.jpg" class="card-img-top" alt="Rock shaped like coral">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Rock “like coral” — NASA/JPL-Caltech</div>
//                 </div>
//         </div>
//     </div>
//     <!-- 6 -->
//     <div class="col-12 col-md-6 col-lg-4">
//         <div class="card h-100">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg" class="card-img-top" alt="Phobos moon color view">
//                 <div class="card-img-overlay d-flex align-items-end">
//                     <div class="w-100 small">Phobos — ESA/DLR/FU Berlin (CC BY-SA)</div>
//                 </div>
//         </div>
//     </div>
// </div>

//1 создаем константы имен классов
const CLASS_COL = "col-12 col-md-6 col-lg-4";
const CLASS_CARD = "card h-100";
const CLASS_IMG= "card-img-top";
const CLASS_OVL = "card-img-overlay d-flex align-items-end";
const CLASS_CAP ="w-100 small";

//2 Фото - как массив объектов
const photos = [
    {src: "https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg",
        alt:"Dust Storm and Jezero Crater",
        caption: "Dust Storm and Jezero Crater — NASA/JPL-Caltech"
    },
    {src:"https://photojournal.jpl.nasa.gov/jpegMod/PIA25897_modest.jpg",
        alt: "Looking at the Crater Half Full",
        caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"},
    { src:"https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg",
        alt:"Curiosity 'Postcard' of Marker Band Valley",
       caption: "Curiosity “Postcard” — NASA/JPL-Caltech/MSSS"
    } ,
    {src: "https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg",
        alt:"Dust Storm and Jezero Crater",
        caption: "Dust Storm and Jezero Crater — NASA/JPL-Caltech"
    },
    {src:"https://photojournal.jpl.nasa.gov/jpegMod/PIA25897_modest.jpg",
        alt: "Looking at the Crater Half Full",
        caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"},
    { src:"https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg",
        alt:"Curiosity 'Postcard' of Marker Band Valley",
        caption: "Curiosity “Postcard” — NASA/JPL-Caltech/MSSS"
    }
]
