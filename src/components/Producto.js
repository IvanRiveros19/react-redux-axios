import React from 'react';
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";

//Redux
import {useDispatch} from "react-redux";
import {borrarProductoAction, obtenerProductoEditar} from "../actions/productoActions";

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();
    const history = useHistory(); //habilitar history para la redireccion

    //Confirmar la eliminacion del elemento
    const confirmarEliminarProducto = id => {
        //preguntar al usuario
        Swal.fire({
            title: 'Esta seguro de eliminar?',
            text: "No se podrá recuperar el elemento",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //pasar al action
                dispatch(borrarProductoAction(id));
            }
        });
    }

    //funcion para redireccionar de manera programada
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto));
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button type="button" onClick={() => redireccionarEdicion(producto)} className="btn btn-primary mr-2">
                    Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => confirmarEliminarProducto(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;
