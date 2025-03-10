let respuesta = "";
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let limpieza = [];
let varios = [];

respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras?").toLowerCase();

while (respuesta === "si") {
    let alimento = prompt("Qué alimento deseas agregar?");
    let categoria = prompt("Indica la categoría: frutas, lácteos, congelados, dulces, limpieza, o varios").toLowerCase();
    
    if (categoria === "frutas") {
        frutas.push(alimento);
    } else if (categoria === "lácteos") {
        lacteos.push(alimento);
    } else if (categoria === "congelados") {
        congelados.push(alimento);
    } else if (categoria === "dulces") {
        dulces.push(alimento);
    } else if (categoria === "limpieza") {
        limpieza.push(alimento);
    } else if (categoria === "varios") {
        varios.push(alimento);
    }

    eliminar = prompt("¿Deseas eliminar algún elemento de tu lista de compras?").toLowerCase();

    if (eliminar === "si") {
    elementoElegido = prompt("Indique cuál de los siguientes elementos desea elminar");
        imprimirListaDeCompras();

        if (frutas.includes(elementoElegido)) {
            let indice = frutas.indexOf(elementoElegido);
            frutas.splice(indice, 1);
        } else if (lacteos.includes(elementoElegido)) {
            let indice = lacteos.indexOf(elementoElegido);
            lacteos.splice(indice, 1);
        } else if (congelados.includes(elementoElegido)) {
            let indice = congelados.indexOf(elementoElegido);
            congelados.splice(indice, 1);
        } else if (dulces.includes(elementoElegido)) {
            let indice = dulces.indexOf(elementoElegido);
            dulces.splice(indice, 1);
        } else if (limpieza.includes(elementoElegido)) {
            let indice = limpieza.indexOf(elementoElegido);
            limpieza.splice(indice, 1);
        } else if (varios.includes(elementoElegido)) {
            let indice = varios.indexOf(elementoElegido);
            varios.splice(indice, 1);
        } else {
            alert("¡No fue posible encontrar el elemento en la lista!");
        }

    alert(${elementoElegido} ya no está en la lista de compras);

    respuesta = prompt("¿Deseas agregar otro alimento a tu lista de compras?").toLowerCase();
    if (respuesta === "no") {
    break;
    }   

}

imprimirListaDeCompras();

function imprimirListaDeCompras() {
    alert("Lista de compras");

    if (frutas.length > 0) {
        alert("Frutas: " + frutas.join(", "));
    }
    if (lacteos.length > 0) {
        alert("Lácteos: " + lacteos.join(", "));
    }
    if (congelados.length > 0) {
        alert("Congelados: " + congelados.join(", "));
    }
    if (dulces.length > 0) {
        alert("Dulces: " + dulces.join(", "));
    }
    if (limpieza.length > 0) {
        alert("Limpieza: " + limpieza.join(", "));
    }
    if (varios.length > 0) {
        alert("Varios: " + varios.join(", "));
    }
}