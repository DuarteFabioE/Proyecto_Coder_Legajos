
function inicializarAplicacion()
{
    crearTitulo(); 
    crearMenu();
    

}

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="Legajo de Alumnos";
    document.body.appendChild(tituloH1);
}
function crearMenu()
{
     let opciones = ["Listar Alumnos", "Agregar Alumno", "Buscar Alumno", "Editar Alumno", "Eliminar Alumno"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

     if(opcion === "Listar Alumnos")
     {
         boton.addEventListener("click", ()=>{
             listarUsuarios(usuarios);
         })
     }
     else if(opcion === "Agregar Alumno")
     {
        boton.addEventListener("click", ()=>{
            agregarUsuario();
            listarUsuarios(usuarios);
        })

    

     }
      else if(opcion === "Eliminar Alumno")
     {
         boton.addEventListener("click", ()=>{
             eliminarUsuario();
             listarUsuarios(usuarios);
         })
     }

     else if(opcion === "Editar Alumno")
     {
         boton.addEventListener("click", ()=>{
             modificarUsuario();
             listarUsuarios(usuarios);
         })
     }

     else if(opcion==="Buscar Alumno")
     {
        boton.addEventListener("click", ()=>{
            let filtrados = buscarUsuario();
           
            listarUsuarios(filtrados);

        })
     }
    
     document.body.appendChild(boton);
     });
     
}


function listarUsuarios(listaUsuarios)
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdId = document.createElement("th");
   tdId.innerHTML="Orden";
   encabezado.appendChild(tdId);

   const tdCurso = document.createElement("th");
   tdCurso.innerHTML="Curso";
   encabezado.appendChild(tdCurso);

   const tdNomnre = document.createElement("th");
   tdNomnre.innerHTML="Apellido";
   encabezado.appendChild(tdNomnre);

   const tdDni = document.createElement("th");
   tdDni.innerHTML="DNI:";
   encabezado.appendChild(tdDni);

   const tdNac = document.createElement("th");
   tdNac.innerHTML="Fecha de Nacimiento";
   encabezado.appendChild(tdNac);

    const tdEdad = document.createElement("th");
   tdEdad.innerHTML="Edad";
   encabezado.appendChild(tdEdad);


    const tdTel = document.createElement("th");
   tdTel.innerHTML="Telefono";
   encabezado.appendChild(tdTel);

   miLista.appendChild(encabezado)
   
   listaUsuarios.forEach((usuario)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.id}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.curso}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nombre}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.dni}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nac}`;
       nodotr.appendChild(nodotd);

         nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.edad}`;
       nodotr.appendChild(nodotd);

         nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.tel}`;
       nodotr.appendChild(nodotd);


       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}


function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let curso=prompt("ingrese un curso");
    let nombre = prompt("ingrese un nombre");
    let dni = prompt("ingrese un dni");
    let nac = prompt("ingrese un fecha de nacimiento");
    let edad = prompt("ingrese un edad");
    let tel = prompt("ingrese un telefono");
    let usuario = new Usuario(id,curso, nombre, dni, nac, edad, tel);

    usuarios.push(usuario);
    console.log("ALMACENADO");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


function buscarUsuario()
{
   let nombre = prompt("Ingresa el nombre que quires buscar");

   let encontrados = usuarios.filter((usuario)=>usuario.nombre==indexOf(nombre));

   console.table(encontrados);

   return encontrados;

}



function eliminarUsuario(){

   let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));

   let encontrado = usuarios.find((usuario)=>usuario.id===id);

  if(!encontrado)
  {
      alert("Alumno no Encontrado");
  }
  else{

       let index = usuarios.indexOf(encontrado);

       usuarios.splice(index,1);

       console.log("Borrar usuario");
       console.log(usuarios);

  }   }

function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
       let encontrado = usuarios.find((usuario)=>usuario.id===id);
       let nuevoCurso=prompt("ingrese un curso");
    let nuevoNombre = prompt("ingrese un nombre");
    let nuevoDni = prompt("ingrese un dni");
    let nuevoNac = prompt("ingrese un fecha de nacimiento");
    let nuevoEdad = prompt("ingrese un edad");
    let nuevoTel = prompt("ingrese un telefono");

  
       encontrado.curso=nuevoCurso;
       encontrado.nombre=nuevoNombre;
       encontrado.dni=nuevoDni;
       encontrado.nac=nuevoNac;
       encontrado.edad=nuevoEdad;
       encontrado.tel=nuevoTel;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
      
      
   }
   else
   {
       alert("Usuario no econtrado")
   }
    }
