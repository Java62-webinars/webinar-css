//1 создаем константы имен классов
const CLASS_COL = "col-12 col-md-6 col-lg-4";
const CLASS_CARD = "card h-100";
const CLASS_IMG = "card-img-top";
const CLASS_OVL = "card-img-overlay d-flex align-items-end";
const CLASS_CAP = "w-100 small";
const CLASS_BTN_ADD_PHOTO = "btn btn-primary my-3";
const CLASS_FORM_ADD_PHOTO = "border p-3 mb-3";
const CLASS_INNERFORM_DIV = "mb-2";
const CLASS_INPUT_FORM = "form-control"

//2 Фото - как массив объектов
const photos = [
    {
        src: "https://photojournal.jpl.nasa.gov/jpeg/PIA25068.jpg",
        alt: "Dust Storm and Jezero Crater",
        caption: "Dust Storm and Jezero Crater — NASA/JPL-Caltech"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q8s3heMl_TruN8qmUFkdInUxj_m05NWWtg&s",
        alt: "Looking at the Crater Half Full",
        caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"
    },
    {
        src: "https://photojournal.jpl.nasa.gov/jpegMod/PIA25912_modest.jpg",
        alt: "Curiosity 'Postcard' of Marker Band Valley",
        caption: "Curiosity “Postcard” — NASA/JPL-Caltech/MSSS"
    },
    {
        src: "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA26644.2e16d0ba.fill-430x430-c70.format-jpeg.jpg",
        alt: "Curiosity Landscape While Talking to an Orbiter",
        caption: "Curiosity Landscape — NASA/JPL-Caltech"
    },
    {
        src: "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA26633.width-1600.jpg",
        alt: "Rock shaped like coral",
        caption: "Rock “like coral” — NASA/JPL-Caltech"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
        alt: "Phobos moon color view",
        caption: "Phobos — ESA/DLR/FU Berlin (CC BY-SA)"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia05/pia05538/PIA05538.jpg",
        alt: "Spirit reaches the rim of Bonneville Crater",
        caption: "Spirit — NASA/JPL"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sojourner_on_Mars_PIA01122.jpg",
        alt: "Sojourner rover near 'The Dice' (Pathfinder lander view)",
        caption: "Pathfinder/Sojourner — NASA/JPL (via Wikimedia Commons)"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia01/pia01904/PIA01904.jpg",
        alt: "‘McMurdo’ winter panorama (Spirit Pancam, stereo version)",
        caption: "Spirit — NASA/JPL/Cornell"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia08/pia08810/PIA08810.jpg",
        alt: "Victoria Crater 'Cape Verde' layers (Opportunity Pancam)",
        caption: "Opportunity — NASA/JPL/Cornell"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Opportunity_at_Victoria_Crater_from_Mars_reconnaissance_orbiter.jpg",
        alt: "Opportunity at Victoria Crater (seen by MRO/HiRISE)",
        caption: "Opportunity from orbit — NASA/JPL/Univ. of Arizona (Wikimedia)"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia19/pia19142/PIA19142.jpg",
        alt: "Curiosity selfie at 'Mojave' site",
        caption: "Curiosity at Mojave — NASA/JPL-Caltech/MSSS"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA24435-Mars-IngenuityHelicopter-VanZylOverlook-20210323.jpg",
        alt: "Ingenuity at Van Zyl Overlook (Perseverance mastcam view)",
        caption: "Ingenuity — NASA/JPL-Caltech (via Wikimedia Commons)"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA18390-MarsCuriosityRover-SelfPortraitAtWindjana-20140512.jpg",
        alt: "Curiosity selfie at 'Windjana' drilling site",
        caption: "Curiosity — NASA/JPL-Caltech/MSSS (via Wikimedia Commons)"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA16937-MarsCuriosityRover-SelfPortraitAtJohnKlein-20130510.jpg",
        alt: "Curiosity selfie at 'John Klein' drill site",
        caption: "Curiosity — NASA/JPL-Caltech/MSSS (via Wikimedia Commons)"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera_unedited.jpg",
        alt: "Curiosity high-resolution self-portrait (MAHLI)",
        caption: "Curiosity — NASA/JPL-Caltech/MSSS (via Wikimedia Commons)"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia19/pia19807/PIA19807.jpg",
        alt: "Curiosity low-angle panorama at Buckskin",
        caption: "Curiosity Buckskin panorama — NASA/JPL-Caltech/MSSS"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia16/pia16468/PIA16468.jpg",
        alt: "Curiosity 'Rocknest' workplace selfie",
        caption: "Curiosity at Rocknest — NASA/JPL-Caltech/MSSS"
    },{
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia25/pia25564/PIA25564.jpg",
        alt: "Mars Terrain with Crater",
        caption: "Mars terrain with crater — NASA/JPL-Caltech"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia22/pia22171/PIA22171.jpg",
        alt: "Mars Panorama — Curiosity",
        caption: "Mars panorama captured by Curiosity — NASA/JPL-Caltech"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia20/pia20321/PIA20321.jpg",
        alt: "Martian Dunes",
        caption: "Martian sand dunes — NASA/JPL"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia20/pia20322/PIA20322.jpg",
        alt: "Rocky Ridge on Mars",
        caption: "Rocky ridge — NASA/JPL"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia21/pia21414/PIA21414.jpg",
        alt: "Shadowed Cliff Face",
        caption: "Shadowed cliff — NASA/JPL"
    },
    {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia24/pia24057/PIA24057.jpg",
        alt: "Crater Floor Panorama",
        caption: "Crater floor panorama — NASA/JPL-Caltech"
    }
]
//3 Сборка
const main = document.querySelector("main");


if (main) {

    //==========Initial page ============
    const addBtn = makeElement("button", CLASS_BTN_ADD_PHOTO);
    addBtn.textContent = "➕ Add Photo";
    main.appendChild(addBtn);
    const form = makeElement("form", CLASS_FORM_ADD_PHOTO);
    form.style.display = "none";
    const fields = Object.keys(photos[0]);
    fields.forEach(field => {
        const formDiv = makeElement("div", CLASS_INNERFORM_DIV);
        form.appendChild(formDiv);
        const input = makeElement("input", CLASS_INPUT_FORM);
        input.name = field;
        input.type = "text";
        input.placeholder = `Input ${field}`;
        input.setAttribute('required', '');
        formDiv.appendChild(input);
    });
    main.appendChild(form);
    form.addEventListener("click", () => console.log('form'));
    const sccBtn = makeElement("button", "btn btn-success");
    sccBtn.textContent = "Add Photo";
    const cancel = makeElement("button", "btn btn-secondary ms-2");
    cancel.textContent = "Cancel";
    form.appendChild(sccBtn);
    form.appendChild(cancel);
    const row = makeElement("div", "row g-3");
    //O(N)
    // for (const p of photos) {
    //     const col = createPhoto(p);
    //     row.appendChild(col);
    // }
        photos.map(p => createPhoto(p))
            .map(photo => row.append(photo));

    try{
        console.log(getCreditCount(photos));
    }catch(e){
        console.log(e.message)
    };

    const captionStats = getCaptionStats(photos);
    console.log("Stats: ", captionStats);
    try{
        console.log(indexPhotosBySrc(photos));
    }catch(e){
        console.log(e.message)
    };
    main.appendChild(row);
    const tip = makeElement("div", "alert alert-danger my-2");
    tip.textContent = "Это очень важная информация (!): кликните по фото (сработает один раз).";
    main.insertBefore(tip, row);
    row.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            console.log("Первый клик по фото:", e.target.alt);
            tip.remove(); // убираем подсказку
        }
    }, {once: true});
//"dblclick" - событие
    //e.target.tagName === "IMG" - адаптировать под аппликацию
    row.addEventListener("dblclick", (e) => {
        if (e.target.tagName === "IMG") {
            const img = e.target;
            const src = img.src; //адаптировать под аппликацию
            const col = img.parentElement.parentElement;// Элемент который удаляем, адаптировать под аппликацию
            if (col) col.remove();
            //Удаление из БД (бэкенда) - адаптировать
            const index = photos.findIndex(p => p.src === src);
            if (index != -1) {
                photos.splice(index, 1);
                console.log("photo deleted");
                //обновить статистику
            }
            console.log("Photos: ", photos.length);
        }
    });

    form.onsubmit = (e) => {
        e.preventDefault() // блокируем стандартную отправку на сервер

        const formData = new FormData(form) // собираем данные из полей

        const newPhoto = {
            src: formData.get("src"),      // ссылка на картинку
            alt: formData.get("alt"),      // текст для атрибута alt
            caption: formData.get("caption") // подпись под фото
        }
        photos.push(newPhoto)                  // добавляем объект в массив
        row.appendChild(createPhoto(newPhoto))  // и сразу дорисовываем карточку
        form.reset()
        form.style.display = "none"
        addBtn.style.display = "inline-block"
    }

    addBtn.onclick = () => {
        form.style.display = "block";
        addBtn.style.display = "none";
    }
    cancel.onclick = () => {
        form.style.display = "none";
        addBtn.style.display = "inline-block";
    }

    // main.addEventListener("dblclick",  (e)=>{
    //     e.stopPropagation()
    //     console.log("stoppropagation", e.target.alt);
    // },{capture:true});
    // main.addEventListener("click", (e)=>{
    //     console.log("CAPTURE", e.target.tagName);
    // }, {capture:true});
} else {
    console.warn("main container not found");
}


function makeElement(tag, className = "") {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    ;
    return element;
}

function createPhoto(p) {
    const col = makeElement("div", CLASS_COL);
    const card = makeElement("div", CLASS_CARD);
    const img = makeElement("img", CLASS_IMG);

    // img.addEventListener("dblclick", (e) =>{
    //     e.stopPropagation();
    //     console.log("Propagation stopped");
    // });
    img.src = p.src;
    img.alt = p.alt;
    const overlay = makeElement("div", CLASS_OVL);
    const cap = makeElement("div", CLASS_CAP);
    cap.textContent = p.caption;
    overlay.appendChild(cap);
    card.append(img, overlay);
    col.appendChild(card);
    return col;
}