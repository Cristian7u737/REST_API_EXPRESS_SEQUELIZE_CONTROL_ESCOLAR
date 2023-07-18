import { Router } from "express";
import { findAllPagos, findPagoById, createPagoByIdAlumno, updatePagoById, deletePagoById } from "../controllers/pago.controller.js";
const routerPago = Router();

routerPago.get('/pagos/', findAllPagos );
routerPago.get('/pago/:id', findPagoById );
routerPago.post('/pago/create/:id/alumno', createPagoByIdAlumno );
routerPago.put('/pago/update/:id/pago/:id/alumno', updatePagoById );
routerPago.delete('/pago/delete/:id', deletePagoById );

export default routerPago;