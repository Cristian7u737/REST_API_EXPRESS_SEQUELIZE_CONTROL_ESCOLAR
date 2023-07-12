/* importar modulos */
import express from 'express'
/* importar conexion */
import  db  from './src/config/connect.js';
/* importar los enrutadores */
import routerAlumno from './src/routes/alumno.routes.js';
import routerProfesor from './src/routes/profesor.routes.js';
import routerCurso from './src/routes/curso.routes.js';
import routerPago from './src/routes/pago.routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));
/* utilizar los enrutadores */
app.use(routerAlumno);
app.use(routerProfesor);
app.use(routerCurso);
app.use(routerPago);
/* Middleware */
/* analizar solicitudes de tipo de contenido - application/json */
app.use(express.json());
/* analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));

/* Conexión a DB */
try {
    await db.authenticate(); /* se utiliza para conectarse con la base de datos y comprueba si las credenciales proporcionadas son correctas */
    console.log('-> DB connected <-');
} catch (error) {
    console.log(error);
}
/* declaración del puerto */
const PORT = process.env.PORT || 3000;
/* el servidor escucha */
app.listen(PORT, () => console.log(`Servidor corriendo en http//localhost:${PORT}`));