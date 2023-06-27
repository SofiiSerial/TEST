/* 





*/


 let materias = [];

function escribir(materias) {

    const divMaterias = document.getElementById("materias");

    limpiar()

    for (let i = 0; i < materias.length; i++) {

	// arr.reduce((acumulador, valorActual) => { ... }, valorInicial)
		let promedio = materias[i].calif.reduce((acumulador, nota) => acumulador+nota, 0) / materias[i].calif.length;



    	const materiaHTML = `
		<div class="materia">
			<span>ID: <span class="dato">${materias[i].codigo}</span> </span>
			<span>Materia: <span class="dato">${materias[i].nombre}</span>  </span>
			<span>Docente: <span class="dato">${materias[i].docente}</span>  </span>
			<span>Horas Semanales: <span class="dato">${materias[i].horas}</span>  </span>
			<span>Notas: <span class="dato">${materias[i].calif}</span>  </span>
			<span>Nota Final: <span class="dato">${parseInt(promedio)}</span>  </span>
			
			<span onclick="eliminar(${i})" class="EliminarMateria equis"> &times; </span>
    	</div>` 

		
    	divMaterias.innerHTML += materiaHTML;  


    }
}

function eliminar(index){
    materias.splice(index, 1);
    escribir(materias);

}

function limpiar(){
   const divMaterias = document.getElementById("materias");  
    divMaterias.innerHTML = "";
}

function eliminarTodos(){
    materias =[];
    limpiar();
}


function alerta() {

	const codigo = document.getElementById("codigo").value;
	const nombre = document.getElementById("nombre").value;
	const docente = document.getElementById("docente").value;
	const hsCatedras = document.getElementById("horas").value;

	const notas = [...document.getElementsByName("nota")];
	const calif = notas.map(nota => parseInt(nota.value)); 

	const materia = {
		codigo,
		nombre,
		docente,
		hsCatedras
	}
	guardar(materia)

	//escribir(materias);

}


function agregarNota() {
    const divNotas = document.getElementById("notas");

    	const notaHTML = `
    		<input class="sofy2" type="number" name="nota" placeholder="Nota">
		` 
		
    	divNotas.innerHTML += notaHTML;  

}

function obtenerMateria(){
	const url='http://192.168.0.178:3010/api/materias/'

	axios.get(url)
	.then((resp)=>{
	//escribir(//resp.data.materias);
		//resp.data.materias
	})
	.catch((error)=>{

	})
}

function guardar(datos){
	const url='http://192.168.0.178:3010/api/materias/'

	axios.post(url, datos)
	.then((resp)=>{
		obtenerMateria()
	})
	.catch((error)=>{
		alert("ocurrio un error")
		console.log(error)
	})
}