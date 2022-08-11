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
        let formularios = JSON.parse(localStorage.getItem("Formularios"))
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
             <td><button onclick="eliminar('${cliente}')" class="btn btn-danger">Eliminar</td>
             <td><button onclick="editar('${cliente}')" class="btn btn-success">Editar</td>
            </tr>`
    }
}
//función editar
function editar(cliente) {
    let formularios = JSON.parse(localStorage.getItem("Formularios"));
    for (let i = 0; i < formularios.length; i++) {
        if (formularios[i].cliente === cliente)
            document.getElementById("body").innerHTML = `<div class="row">
        <div class="col-md-5">
        <div class="card">
            <div class="card-header">
                <h2>Editar Cliente</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <input type="text" id="newcliente" class="form-control" placeholder="${formularios[i].cliente}"/>
                    </div>
                    <div class="form-group">
                        <textarea id="newdescripcion" class="form-control"
                            placeholder="${formularios[i].descripcion}"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="newprecio"
                            placeholder="${formularios[i].precio}"/>
                    </div>
                </form>
                <button type="submit" class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                <button type="submit" class="btn btn-primary" onclick="vistaPrincipal()">Cancelar</button>
            </div>
        </div>`

    }
}
//función actualizar
function actualizar(i) {
    let formularios = JSON.parse(localStorage.getItem("Formularios"));
    formularios[i].cliente = document.getElementById("newcliente").value;
    formularios[i].descripcion = document.getElementById("newdescripcion").value;
    formularios[i].precio = document.getElementById("newprecio").value;
    if (formularios[i].cliente == "") {
        alert("No ha ingresado datos de cliente")
    } else {
        if (formularios[i].descripcion == "") {
            alert("No ha ingresado la descripción")
        } else {
            if (formularios[i].precio == "") {
                alert("No ha ingresado el precio")
            } else {
                localStorage.setItem("Formularios", JSON.stringify(formularios));
                vistaPrincipal()
            }
        }
    }
}
//función eliminar
function eliminar(cliente) {
    let formularios = JSON.parse(localStorage.getItem("Formularios"));
    for (let i = 0; i < formularios.length; i++) {
        if (formularios[i].cliente === cliente) {
            formularios.splice(i, 1);
        }
    }
    localStorage.setItem("Formularios", JSON.stringify(formularios));
    leer();
}
//funcion para mostrar la interfaz principal
function vistaPrincipal() {
    document.getElementById("body").innerHTML = `<div class="row">
    <div class="col-md-5">
        <div class="card">
            <div class="card-header">
                <h2>Agregar Nuevo Cliente</h2>
            </div>
            <div class="card-body">
                <form id="gymapp">
                    <div class="form-group">
                        <input type="text" id="cliente" class="form-control" placeholder="Ingresar Cliente"/>
                    </div>
                    <div class="form-group">
                        <textarea id="descripcion" class="form-control"
                            placeholder="Ingresar descripción del Plan"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="precio"
                            placeholder="Ingresar Precio del Plan"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <table class="table">
            <thead class="table-light">
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td> Analia Morales </td>
                <td> Plan Anual </td>
                <td> 200 </td>
              </tr>
            </tbody>
          </table>
</div>`
    leer();
}

leer();