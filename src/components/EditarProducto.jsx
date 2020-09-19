import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoApiStateAction } from '../actions/productoActions';

const EditarProducto = () => {

    // nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });



    // producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);

    // llenar el state automaticamente
    useEffect(() => {
        setProducto(productoeditar);
    }, [productoeditar]);

    // leer los datos del formulario
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    const { nombre, precio, id } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        editarProductoApiStateAction();
    }


    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto

/**
 * useDispatch: para ejecutar las acciones
 * useSelector: para acceder al state
 */