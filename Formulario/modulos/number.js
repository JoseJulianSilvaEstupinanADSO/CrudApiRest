
export default validarNumber

function validarNumber(event, tipo, value) {

    if (tipo === "number") {
        if (!(event.charCode >= 48 && event.charCode <= 57)) {
            event.preventDefault();
        }
    }
}