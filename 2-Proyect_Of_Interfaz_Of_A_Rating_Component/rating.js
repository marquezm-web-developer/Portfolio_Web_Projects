const rating = document.querySelector(".rating");
let currentValue = 0;
const limit = 10;

const html = Array.from(Array(10)).map((item, i) => {
    return `<div class="elemento item-${i}" data-pos="${i}"></div>`
});

rating.innerHTML = html.join("");


document.querySelectorAll(".elemento").forEach(elemento => {
    elemento.addEventListener("mouseover", (e) => {

        const position = elemento.getAttribute("data-pos");

        if (currentValue == parseInt(position) + 1) {
            return;
        }

        document.querySelectorAll(".elemento").forEach(elem => {
            if (elem.classList.contains("elemento-full")) {
                elem.classList.remove("elemento-full");
            };
        });

        for (let i = 0; i <= position; i++) {

            const item = document.querySelector(`.item-${i}`);

            if (!item.classList.contains("elemento-full")) {
                item.classList.add("elemento-full");
            };
        };

        currentValue = parseInt(position) + 1;
    });

    elemento.addEventListener("click", (e) => {
        const position = elemento.getAttribute("data-pos");
        currentValue = parseInt(position) + 1;
        console.log(currentValue);
    });
});