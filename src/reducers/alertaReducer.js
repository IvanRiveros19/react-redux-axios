import {MOSTRAR_ALERTA, OCULATAR_ALERTA} from "../types";

//cada reducer tiene su state
const initialSate = {
    alerta: null
}

export default function (state = initialSate, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        case OCULATAR_ALERTA:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}
