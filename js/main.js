
 function listado ()
  {
  let loginExitoso = false;

    let usuario = prompt("Ingrese nuevo usuario") ;
    let password = prompt("Ingrese nueva password");
    while(loginExitoso!==true)
    {
      let username = prompt("Ingrese su nombre de usuario");
      let pwd = prompt("Ingrese su password");
      let resultado = username === usuario && pwd === password
      if(resultado)
      {
        alert("LOGIN EXITOSO");
        loginExitoso=true;
        
      }
      else 
      { 
        alert("Alguno de los datos ingresados es erroneo")
       }
    }

    class Alumno{
     constructor(id,nombre,apellido,asistencia)
     {
         this.id=id;
         this.nombre=nombre;
         this.apellido=apellido;
         this.asistencia=asistencia
     }
 }

			 const alumno1 = new Alumno(1, "Ivan", "Bessonart", "P");
			 const alumno2 = new Alumno(2, "Federico", "Prietto", "A");
			 const alumno3 = new Alumno(3, "Melina", "Traviezsso", "P");
			 const alumno4 = new Alumno(4, "Nelida", "Cantero", "P");
			 const alumno5 = new Alumno(5, "Ireneo", "Sconffietti", "P");
			 const alumno6 = new Alumno(6, "Jose", "Irala", "P");
			 const alumno7 = new Alumno(7, "Roman", "Riquelme", "A");
			 const alumno8 = new Alumno(8, "Daiana", "Harnan", "P");
			 const alumno9 = new Alumno(9, "Mariana", "Ojeda", "P");
			 const alumno10 = new Alumno(10, "Laura", "Casariego", "P");
			 const alumno11 = new Alumno(11, "Matias", "Lancuva", "A");
			 const alumno12 = new Alumno(12, "Daniel", "Hernandez", "A");
			 const alumno13 = new Alumno(13, "Fernando", "Gonzalez", "P");
			 const alumno14 = new Alumno(14, "Laura", "Jara", "P");
			 const alumno15 = new Alumno(15, "Laura", "Aguirre", "P");

			 const alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8, alumno9, alumno10, alumno11, alumno12, alumno13, alumno14, alumno15]
			console.log("INICIAL:", alumnos);		

mostrarMenu();


 function mostrarMenu()
 {
    let opcion = 0;
    
    while(opcion!==6)
    {
        opcion = Number( prompt(`Seleccione una accion:
                            1. Ingresar nuevo alumno
                            2. Eliminar alumno
                            3. Modificar informacion del alumno
                            4. Lista de clase
                            5. Lista completa de clase
                            6. Salir `));

    switch(opcion)
    {
        case 1:
        {
            ingresoAlumno();
            break;
        }
        case 2: 
        {
            eliminarAlumno();
            break;
        }
        case 3: 
        {
            modificarAlumno();
            break;
        }
        case 4:
        {
            listaClase();
            break;
        }
        case 5:
        {
			listaCompleta();
			break;
		}

        case 6:{
            alert("Muchas gracias");
           listado()
        }

        default:{
            alert("opcion inválida");
            break;
        }
    }

    }
 }		
							
		
 function ingresoAlumno()
 {      
     let id=1;
     if(alumnos.length>0)
     {
        id=alumnos[alumnos.length-1].id+1;
     }
     
     let nombre= prompt("Ingrese un nombre");
     let apellido = prompt("Ingrese un apellido");
     let asistencia = prompt("Ingrese asistencia");
     let alumno = new Alumno(id, nombre, apellido, asistencia);

     alumnos.push(alumno);
 }



function eliminarAlumno()
	{

    let id= Number(prompt("Ingrese el id del alumno que quiere eliminar"));

    let encontrado = alumnos.find((alumno)=>alumno.id===id);
  	if(!encontrado)
   {
       alert("Usuario no Encontrado");
   }
   	else{


        let index = alumnos.indexOf(encontrado);

        alumnos.splice(index,1);

        console.log("Borrar alumno");
        alert("Se ha eliminado correctamente el alumno de la base de datos");
         }
	 }


 function modificarAlumno()
 {
    let id= Number(prompt("Ingrese el id del alumno que quiere modificar"));

    let existe = alumnos.some((alumno)=>alumno.id===id);

    if(existe)
    {
        let encontrado = alumnos.find((alumno)=>alumno.id===id);
        let nuevoNombre = prompt("Ingrese el nuevo nombre");
        let nuevoApellido = prompt("Ingrese el nuevo apellido");
        let nuevoAsistencia = prompt("Ingrese asistencia");

        encontrado.nombre = nuevoNombre;
        encontrado.apellido= nuevoApellido;
        encontrado.asistencia= nuevoAsistencia;


        console.log("MODIFICACION")
        console.log(alumnos);
    }
    else
    {
        alert("Usuario no encontrado")
    }

 }


function listaClase()
 {
    console.log("LISTA DE CLASE")
    
    alumnos.forEach(
        (alumno)=>{
         
            alert(alumno.nombre+" "+alumno.apellido+" "+alumno.asistencia);

        });

    }



function listaCompleta()
 {
    let nombresYApellidos = alumnos.map(
        (alumno)=>alumno.apellido+ " " + alumno.nombre+" ");

    	console.log("MAP:");
   		alert(nombresYApellidos);

 }
 
} 

listado()

			
						
						
						
						
						 
					
						

	 
