//Crear un nuevo cliente
document.getElementById("gymapp").addEventListener("submit", crear);
//función crear
function crear(e) {
    cliente = document.getElementById("cliente").value
    descripcion = document.getElementById("descripcion").value
    precio = document.getElementById("precio").value

    let formulario = {
        cliente,
        descripcion,
        precio
    }

    if (localStorage.getItem("Formularios") === null) {
        let formularios = []
        formularios.push(formulario)
        localStorage.setItem("Formularios", JSON.stringify(formularios))
    } else {
        let formularios = localStorage.getItem(JSON.parse("Formularios"))
        formularios.push(formulario)
        localStorage.setItem("Formularios", JSON.stringify(formularios))
    }
    leer();
    document.getElementById("gymapp").reset();
    console.log("Cliente Guardado Correctamente")
    e.preventDefault()
}

//función leer
function leer() {
    let formularios = JSON.parse(localStorage.getItem("Formularios"));
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < formularios.length; i++) {
        let cliente = formularios[i].cliente
        let descripcion = formularios[i].descripcion
        let precio = formularios[i].precio

        document.getElementById("tbody").innerHTML +=
            `<tr>
             <td>${cliente}</td>
             <td>${descripcion}</td>
             <td>${precio}</td>
            </tr>`
    }
}
leer()