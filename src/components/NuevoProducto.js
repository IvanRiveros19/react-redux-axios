import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {mostrarAlertaAction, ocultarAlertaAction} from "../actions/alertaActions"

//actions de redux
import {crearNuevoProductoAction} from "../actions/productoActions";

const NuevoProducto = ({history}) => {
    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);
    //utilizar useDispatch
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    //mandar llamar el action de productoAction
    const agregarNuevoProducto = (producto) => {
        dispatch(crearNuevoProductoAction(producto));
    }

    //cuando se haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        //validar formulario
        if (!nombre.trim() || precio <= 0){
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlertaAction(alerta));
            return;
        }

        //si no hay errores
        dispatch(ocultarAlertaAction());

        agregarNuevoProducto({
            nombre,
            precio
        });

        //redireccionar
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar producto
                        </h2>
                        {alerta && <p className={alerta.classes}>{alerta.msg}</p>}
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Nombre Producto"
                                       name="nombre"
                                       value={nombre}
                                       onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input type="number"
                                       className="form-control"
                                       placeholder="Precio Producto"
                                       name="precio"
                                       value={precio}
                                       onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
