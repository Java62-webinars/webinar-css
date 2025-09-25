//1 создаем константы имен классов
const CLASS_COL = "col-12 col-md-6 col-lg-4";
const CLASS_CARD = "card h-100";
const CLASS_IMG = "card-img-top";
const CLASS_OVL = "card-img-overlay d-flex align-items-end";
const CLASS_CAP = "w-100 small";
const CLASS_BTN_ADD_PHOTO = "btn btn-primary my-3";
const CLASS_FORM_ADD_PHOTO = "border p-3 mb-3";
const CLASS_INNERFORM_DIV ="mb-2";
const CLASS_INPUT_FORM="form-control"

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
    form.addEventListener("click", ()=> console.log('form'));
    const sccBtn = makeElement("button", "btn btn-success");
    sccBtn.textContent = "Add Photo";
    const cancel = makeElement("button", "btn btn-secondary ms-2");
    cancel.textContent = "Cancel";
    form.appendChild(sccBtn);
    form.appendChild(cancel);
    const row = makeElement("div", "row g-3");
    //O(N)
    for (const p of photos) {
        const col = createPhoto(p);
        row.appendChild(col);
    }
    main.appendChild(row);

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

    main.addEventListener("click",  (e)=>{
        console.log("BUBBLE", e.target.alt);
    },);
    main.addEventListener("click", (e)=>{
        console.log("CAPTURE", e.target.tagName);
    }, {capture:true});
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