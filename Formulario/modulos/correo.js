export default validarCorreo

function validarCorreo(event, tipo, value) {
    
    const $fnode = value.parentElement;

    

    const $span1 = document.createElement("span") 
    $span1.classList.add("vacio")
    $span1.classList.add("spam")

    let $vacio = $fnode.querySelector(".vacio")


    if ($fnode.contains($vacio)) {
        $fnode.removeChild($vacio)
    }


    if (tipo === "email") {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (regex.test(value.value)) {
            value.classList.remove("alert")
            value.classList.add("passed")
        }
        else{
            value.classList.add("alert") 
            value.classList.remove("passed") 
            $span1.innerText = "El correo no es valido"
            $fnode.appendChild($span1)
        }
    }
}