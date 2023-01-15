const inputText = document.querySelector("#input_text");
const teclado = document.querySelector("#teclado");
let empty = `<div class = "key-empty"></div>`;
let mayus = false;
let shift = false;
let current = null;
let keys = [
    [
        ["1", "!"],
        ["2", "@"],
        ["3", "#"],
        ["4", "$"],
        ["5", "%"],
        ["6", "&"],
        ["7", "/"],
        ["8", "("],
        ["9", ")"],
        ["0", "="]
    ],
    [
        ["q", "Q"],
        ["w", "W"],
        ["e", "E"],
        ["r", "R"],
        ["t", "T"],
        ["y", "Y"],
        ["u", "U"],
        ["i", "I"],
        ["o", "O"],
        ["p", "P"]
    ],
    [
        ["MAYUS", "MAYUS"],
        ["a", "A"],
        ["s", "S"],
        ["d", "D"],
        ["f", "F"],
        ["g", "G"],
        ["h", "H"],
        ["j", "J"],
        ["k", "K"],
        ["l", "L"],
        ["ñ", "Ñ"]
    ],
    [
        ["SHIFT", "SHIFT"],
        ["z", "Z"],
        ["x", "X"],
        ["c", "C"],
        ["v", "V"],
        ["b", "B"],
        ["n", "N"],
        ["m", "M"],
        [",", ";"],
        [".", ":"],
        ["-", "_"]
    ],
    [
        ["SPACE", "SPACE"]
    ]
];

teclado_renderizar();

function teclado_renderizar() {

    const layers = keys.map((layer) => {
        return layer.map(key => {
            if (key[0] == "SHIFT") {
                return `<button class="key key_shift ${shift?'activated':''}">${key[0]}</button>`;
            };
            if (key[0] == "MAYUS") {
                return `<button class="key key-mayus ${mayus?'activated':''}">${key[0]}</button>`;
            };
            if (key[0] == "SPACE") {
                return `<button class="key key-space">${key[0]}</button>`;
            };
            return `<button class ="key key-normal">${shift ? key[1] : mayus && key[0].toLowerCase().charCodeAt(0) >=97 && key[0].toLowerCase().charCodeAt(0) <=122 ? key[1] : key[0] }</button>`;
        });
    });

    layers[0].push(empty);
    layers[1].unshift(empty);


    teclado.innerHTML = "";


    const layersHTML = layers.map((layer) => {
        return layer.join("");
    });

    layersHTML.forEach((layer) => {
        teclado.innerHTML += `<div class="keyboard keyboard">${layer}</div>`;
    });



    document.querySelectorAll(".key").forEach((key) => {
        key.addEventListener("click", (e) => {
            if (current) {
                if (key.textContent == "SHIFT") {
                    shift = !shift;

                };
                if (key.textContent == "MAYUS") {
                    mayus = !mayus;

                };
                if (key.textContent == "SPACE") {
                    current.value += " ";

                };
                if (key.textContent != "SHIFT" && key.textContent != "MAYUS" && key.textContent != "SPACE") {
                    current.value += key.textContent;

                    if (shift) {
                        shift = false;

                    };
                };
                teclado_renderizar();
            };
        });
    });

};

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focusin", (e) => {
        current = e.target;
    });
});