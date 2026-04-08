
const items = document.querySelectorAll(".ItemM");
const contenedor = document.getElementById("contentM");

console.log(items);
let index = 0;

// click y centrar
items.forEach((item ,i) => {
    item.addEventListener("click", () => {
        index = i;

        item.scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
    });
});
// mover linea temporal
function mover(direccion) {
    index += direccion;
    if (index < 0) { index = 0; }
    if (index >= items.length) { index = items.length - 1; }

    items[index].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });

    activar(items[index]);
}

// activar tiempo
function activar(itemActivo) {
    items.forEach(i => i.classList.remove("activo"));
    itemActivo.classList.add("activo");
}

// seleccionar punto en la linea
function moverDirecto(punto) {
    items[punto].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });
    activar(items[punto]);
    index = punto;
}