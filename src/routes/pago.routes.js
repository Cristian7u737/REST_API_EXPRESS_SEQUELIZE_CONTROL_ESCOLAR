import { Router } from "express";
import { findAllPagos, findPagoById, createPago, updatePagoById, deletePagoById } from "../controllers/pago.controller.js";
const routerPago = Router();

routerPago.get('/pagos/', findAllPagos );
routerPago.get('/pago/:id', findPagoById );
routerPago.post('/pago/create/', createPago );
routerPago.put('/pago/update/:id', updatePagoById );
routerPago.delete('/pago/delete/:id', deletePagoById );

export default routerPago;