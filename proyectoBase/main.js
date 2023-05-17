
function alerta(){
    const documento = document.getElementById('documento').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;

    const divPersonas = document.getElementById('personas');

    const mensaje = "Persona: " + documento + ' - ' + apellidos + ", " + nombres;
    const mensaje2 = `Persona: ${documento} - ${apellidos}, ${nombres}`;

    divPersonas.innerHTML = mensaje;

    console.log(mensaje);
    console.log(mensaje2);
}