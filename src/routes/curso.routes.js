import { Router } from "express";
import { findAllCursos, findCursoById, findCursoByIdFromAlumno, createCurso, updateCursoById, deleteCursoById } from "../controllers/curso.controller.js";
const routerCurso = Router();

routerCurso.get('/cursos/', findAllCursos );
routerCurso.get('/curso/:id', findCursoById );
routerCurso.get('/curso/:id/alumno', findCursoByIdFromAlumno );
routerCurso.post('/curso/create/', createCurso );
routerCurso.put('/curso/update/:id', updateCursoById );
routerCurso.delete('/curso/delete/:id', deleteCursoById );

export default routerCurso;