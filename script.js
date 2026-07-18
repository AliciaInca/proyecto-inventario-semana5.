const formulario = document.getElementById('formularioRegistro');
const listaElementos = document.getElementById('listaElementos');
const contadorRegistros = document.getElementById('contadorRegistros');
const mensajeAlerta = document.getElementById('mensajeAlerta');

let totalRegistros = 0;

formulario.addEventListener('submit', function(evento) {
    // Evita que la página se recargue al enviar el formulario
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const categoria = document.getElementById('categoria').value;

    // Validación básica
    if (nombre === '' || descripcion === '' || categoria === '') {
        mostrarMensaje('Por favor, complete todos los campos.', 'alert-danger');
        return; 
    }

    // Crear el registro dinámicamente
    crearRegistro(nombre, descripcion, categoria);
    mostrarMensaje('Producto agregado correctamente.', 'alert-success');
    formulario.reset();
});

function crearRegistro(nombre, descripcion, categoria) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-start mb-2 border rounded';

    const divContenido = document.createElement('div');
    divContenido.className = 'ms-2 me-auto';

    const titulo = document.createElement('div');
    titulo.className = 'fw-bold';
    titulo.textContent = nombre;

    const textoDescripcion = document.createElement('span');
    textoDescripcion.textContent = `${descripcion} | Categoría: ${categoria}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'btn btn-sm btn-danger mt-2 mt-md-0';
    botonEliminar.textContent = 'Eliminar';

    botonEliminar.addEventListener('click', function() {
        listaElementos.removeChild(li);
        actualizarContador(-1);
    });

    divContenido.appendChild(titulo);
    divContenido.appendChild(textoDescripcion);
    li.appendChild(divContenido);
    li.appendChild(botonEliminar);
    listaElementos.appendChild(li);

    actualizarContador(1);
}

function actualizarContador(valor) {
    totalRegistros += valor;
    contadorRegistros.textContent = totalRegistros;
}

function mostrarMensaje(texto, claseColor) {
    mensajeAlerta.textContent = texto;
    mensajeAlerta.classList.remove('alert-danger', 'alert-success', 'd-none');
    mensajeAlerta.classList.add(claseColor);

    setTimeout(() => {
        mensajeAlerta.classList.add('d-none');
    }, 3000);
}
