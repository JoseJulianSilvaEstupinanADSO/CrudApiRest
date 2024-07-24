
const $select = document.querySelector("form > select")
const $framento = document.createDocumentFragment();
const $dom = document;

(async () => {
    let response = await fetch("http://localhost:3000/documento");
    let tipo = await response.json(); 
    tipo.forEach(x => {
        let $option = document.createElement("option")
        $option.innerText = x.nombre
        
        $framento.appendChild($option)
    })
    $select.appendChild($framento)
  })
  ();

const $form = document.querySelector("form")
const $button = document.querySelector("form > button")

const $nombre = document.querySelector(".input__nombre")
const $apellido = document.querySelector(".input__apellido")
const $correo = document.querySelector(".input__correo")
const $direccion = document.querySelector(".input__direccion")
const $documento = document.querySelector(".input__documento")




$nombre.setAttribute("onkeypress", "return ((event.charCode >= 64 && event.charCode <= 122))")
$apellido.setAttribute("onkeypress", "return ((event.charCode >= 64 && event.charCode <= 122))")
$direccion.setAttribute("onkeypress", "return ((event.charCode >= 64 && event.charCode <= 122))")
$documento.setAttribute("onkeypress", "return ((event.charCode >= 48 && event.charCode <= 57))")



const correo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/



const $selects = document.querySelector("form > select")
let enviar = (event) => {
    event.preventDefault();

    const $input = document.querySelectorAll("form > input")
    let num = 0
    $input.forEach(elemento => {       
        if (elemento.value.trim() == "") {
            console.log("esta vacio")
            elemento.classList.add("alert")
            num = 1
        }
        else{
            elemento.classList.remove("alert")
            console.log("no esta vacio");

        }
        if (correo.test($correo.value)) {
            console.log("correo valido")
        }
        else{
            num = 1
            $correo.classList.add("alert")
        }
    })
    if (num === 0) {
        let _datos = {
            nombre: $nombre.value,
            apellido: $apellido.value, 
            documento: $documento.value,
            tipo: $selects.value,
            correo: $correo.value,
            direccion: $direccion.value
          }
          
          fetch('http://localhost:3000/users', {
            method: "POST",
            body: JSON.stringify(_datos), 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
        })
    }
    $nombre.value = ""
    $apellido.value = "" 
    $documento.value = ""
    $selects.value = "Seleccionar"
    $correo.value = ""
    $direccion.value = ""

}

(async () => {
    
  })
  ();

const $boton = document.querySelector(".listar")

let listar = async (event) =>{

    const $frag = document.createDocumentFragment();
    let $tbody = document.querySelector(".tabla__tb")
    let peticion = await fetch("http://localhost:3000/users");
    let datos = await peticion.json();
    $tbody.remove()
    datos.forEach((user) =>{

        let $tr = document.createElement("tr")
        let $td0 = document.createElement("td")
        let $td1 = document.createElement("td")
        let $td2 = document.createElement("td")
        let $td3 = document.createElement("td")
        let $td4 = document.createElement("td")
        let $td5 = document.createElement("td")
        let $td6 = document.createElement("td")
        let $td7 = document.createElement("td")
        let $btn2 = document.createElement("button")

        $btn2.classList.add("Eliminar")
        $td1.classList.add("Nombre")

        $td0.innerText = user.id
        $td1.innerText = user.nombre
        $td2.innerText = user.apellido
        $td3.innerText = user.documento
        $td4.innerText = user.tipo
        $td5.innerText = user.correo
        $td6.innerText = user.direccion
        $btn2.innerText = "Eliminar" 


        $td7.appendChild($btn2)
        $tr.appendChild($td0)
        $tr.appendChild($td1)
        $tr.appendChild($td2)
        $tr.appendChild($td3)
        $tr.appendChild($td4)
        $tr.appendChild($td5)
        $tr.appendChild($td6)
        $tr.appendChild($td7)
        $frag.appendChild($tr)
    })
    $tbody.appendChild($frag) 
}


$boton.addEventListener("click",listar)
$form.addEventListener("submit",enviar)




const table = $dom.querySelector('.tabla');

table.addEventListener('click', function(event) {
   if (event.target.classList.contains('Eliminar')) {

        const row = event.target.closest('tr');

   }
})