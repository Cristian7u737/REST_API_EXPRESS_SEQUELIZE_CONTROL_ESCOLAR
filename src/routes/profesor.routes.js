import { Router } from "express";
import { findAllProfesores, findProfesorById, createProfesor, updateProfesorById, deleteProfesorById } from "../controllers/profesor.controller.js";
const routerProfesor = Router();

routerProfesor.get('/profesores/', findAllProfesores );
routerProfesor.get('/profesor/:id', findProfesorById );
routerProfesor.post('/profesor/create/', createProfesor );
routerProfesor.put('/profesor/update/:id', updateProfesorById );
routerProfesor.delete('/profesor/delete/:id', deleteProfesorById );

export default routerProfesor;