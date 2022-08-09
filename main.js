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
    document.getElementById("gymapp").reset();
    e.preventDefault();
    console.log("Cliente Guardado Correctamente")
}