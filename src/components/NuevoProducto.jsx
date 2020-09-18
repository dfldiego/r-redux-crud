import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions de Redux
import {
    crearNuevoProductoAction,
} from '../actions/productoActions';

const NuevoProducto = () => {

    // utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // manda llamar el action de productoActions
    const agregarProducto = () => dispatch(crearNuevoProductoAction());

    // cuando usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario

        // si no hay errores

        // crear un nuevo producto
        agregarProducto();

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto


//useDispatch: sirve para mandar a ejecutar las acciones que tengamos en nuestros actions
//useSelector: una forma para acceder al state