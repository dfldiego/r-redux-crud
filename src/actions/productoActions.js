import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// funcion que crea nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        // aqui es donde se inserta en la BBDD y se manda a ejecutar el reducer para modificar el state
        // esta funcion la vamos a usar en el componente(vista)
        /* console.log(producto); */
        dispatch(agregarProducto());

        // hacemos consulta a la BBDD
        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto)
            // si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));
            // alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            // debuggear el error
            console.log(error);
            // si hay un error cambiar el state
            dispatch(agregarProductoError(true));
            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la BBDD
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

// funcion que descarga los productos de la BBDD
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try {
            const respuesta = await clienteAxios.get('/productos');
            /* console.log(respuesta.data); */
            dispatch(descargarProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExisto());
            // si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'EL producto se eliminó correctamente.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExisto = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true,
})

// colocar producto en edicion.
export function editarProductoAction(producto) {
    return (dispatch) => {
        dispatch(editarProducto(producto));
    }
}

const editarProducto = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

// edita un registro en la api y state
export function editarProductoApiStateAction(producto) {
    return async (dispatch) => {
        dispatch(editarProductoApiState(producto));

        try {
            const resultado = clienteAxios.put(`/productos/${producto.id}`, producto);
            console.log(resultado);
        } catch (error) {

        }
    }
}

const editarProductoApiState = producto => ({
    type: COMENZAR_EDICION_PRODUCTO,
    payload: producto
})

/**
 * productosReducer y productoActions tienen los mismos types.
 * aqui tenemos una funcion que se va a utilizar en la vista.
 * por ejemplo: creamos un nuevo objeto de producto, esa funcion hay que usarla
 * se le pasa un valor y se consume en esta parte.
 * payload: lo que va a modificar el state
 * action.type -> describe la aplicacion
 * action.payload -> modificar la aplicacion
 */