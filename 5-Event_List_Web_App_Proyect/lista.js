let events = [];
let arr = []; //cargar la informacion

const eventName = document.querySelector("#nameEvent");
const eventDate = document.querySelector("#dateEvent");
const eventAdd = document.querySelector("#btnAdd");
const form = document.querySelector(".form");
const eventsContainer = document.querySelector("#eventsContainer");

const json = load();

try {
    arr = JSON.parse(json);

} catch (error) {
    arr = [];
}
events = arr ? [...arr] : [];

renderEvent();


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addEvents();
});

eventAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addEvents();
});



function addEvents() {
    if (eventName.value == "" || eventDate.value == "") {
        return;
    };

    if (dateDif(eventDate.value) < 0) {
        return;
    };

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value,
    };

    events.unshift(newEvent);

    save(JSON.stringify(events));

    eventName.value = "";
    eventDate.value = "";

    renderEvent();
}

function dateDif(d) {
    const targetDate = new Date(d);
    const todayDate = new Date();
    const dif = targetDate.getTime() - todayDate.getTime();
    const daysDif = Math.ceil(dif / (1000 * 3600 * 24));

    return daysDif;
}

function renderEvent() {
    const eventsHTML = events.map(event => {

        return `
        <div class="event">
            <div class="days">
                <span>Faltan </span>
                <span class="number-days">${dateDif(event.date)}</span>
                <span class="text-days">días</span>
            </div>
            <div class="name-event"> Evento: ${event.name}
            </div>
            <div class="date-event">Fecha: ${event.date}
            </div>
            <div class="actions">
            <button class="delete-button" data-id="${event.id}">Eliminar</button>
            </div>
        </div>
        `;
    });

    eventsContainer.innerHTML = eventsHTML.join("");

    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = button.getAttribute("data-id");
            events = events.filter(event => event.id != id);
            save(JSON.stringify(events));
            renderEvent();
        });


    });
};

function save(data) {
    localStorage.setItem("items", data);
};

function load() {
    return localStorage.getItem("items");
}