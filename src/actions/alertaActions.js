import {MOSTRAR_ALERTA, OCULATAR_ALERTA} from "../types";

//muestra una alerta
export function mostrarAlertaAction(alerta) {
    return (dispatch) => {
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

//oculta una alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULATAR_ALERTA
});