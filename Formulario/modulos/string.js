
export default validarString

function validarString(event, tipo, value ) {

    const regex = /^[a-zA-Zá-ÿ\s]$/;
        if (!regex.test(event.key)) {
            event.preventDefault();
        }
}