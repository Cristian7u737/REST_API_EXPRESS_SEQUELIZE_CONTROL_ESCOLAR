import { Pago } from "../models/pago.model.js";

/* Encontrar todos los pagos que hayan */
export const findAllPagos = async (req, res) => {
    try {
        const pago = await Pago.findAll(); /* busca todos los registros */
        res.json(pago); /* la respuesta es lo que encontro pago en un objeto json */
    } catch (error) {
        res.status(500).json([{ error: error.message }]);
    }
};

/* Encontrar un Pago apartir de un ID */
export const findPagoById = async (req, res) => {
    const { id } = req.params; /* desestructura el objeto json para obtener el parametro id apartir de req */
    const pago = await Pago.findOne({ where: { id } }); /* recupera exactamente UNA fila de todas las filas que coinciden con la consulta SQL */
    if (!pago) { /* evalua si el id de pago es diferente / osea que no lo encuentra registrado*/
        return res.status(404).json({ /* retorna la respuesta de la solicitud con el estatus 404. El servidor no pudo encontrar el repago solicitado. */
            mensaje: `No existe el pago con el ID : ${id}.` /* manda un mensaje acerca del pago que no se encontro con el id */
        });
    }
    res.json(pago); /* responde la solicitud en formato JSON de lo que se almaceno en pago */
};

/* Crear un Pago*/
export const createPago = async (req, res) => {
    try {
        const { precioPago, aportePago } = req.body; /* desestructurar el json del body */
        const newPago = await Pago.create({ precioPago, aportePago }); /* Crea el Pago apartir del req.body */
        return res.status(201).json(newPago); /* responde la solicitud con lo que creo en newPago */
    } catch (error) {
        res.status(500).json([{ error: error.message }]);
    }
};

/* Actualizar una Pago*/
export const updatePagoById = async (req, res) => {
    try {
        const { id } = req.params; /* desestructura el objeto json para obtener el parametro id apartir de req */
        const pago = await Pago.findOne({ where: { id } }); /* busca en Pago por id para actualizarlo despues*/
        if (!pago) { /* si el id de pago es diferente */
            return res.status(404).json({ /* retorna la respuesta de la solicitud con el estatus 404. El servidor no pudo encontrar el repago solicitado. */
                mensaje: `No existe el Pago con el ID : ${id}.` /* manda un mensaje acerca del Pago que no se encontro con el id */
            }); /* evalua si el Nombre del Pago es diferente del Pago / osea que no lo encuentra registrado*/
        }
        pago.set(req.body);/* actualiza los datos mediante set */
        await pago.save(); /* guardar en memoria los datos  */
        res.status(202).json(pago); /* responde con un objeto json que contiene la información actualizada del pago */
    } catch (error) {
        res.status(500).json([{ error: error.message }]);
    }
};

/* Eliminar un Pago apartir de su id*/
export const deletePagoById = async (req, res) => {
    try {
        const { id } = req.params; /* desestructura el objeto json para obtener el parametro id apartir de req */
        const pago = await Pago.destroy({ where: { id } }); /* elimina un pago apartir de un id */
        if (!pago) { /* evalua si el id del pago es diferente / osea que no lo encuentra registrado*/
            return res.status(404).json({
                mensaje: `No existe el Pago con el id : ${id}.`
            });
        }
        res.json({ mensaje: `Se ha eliminado el Pago con el ID : ${id}.` }) /* si esta repetido se lo indica */
        res.status(204).end(); /* status: ya no hay nada con 204 */
    } catch (error) {
        res.status(500).json([{ error: error.message }]);
    }
};


