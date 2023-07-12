/* importar modulos */
import { DataTypes } from "sequelize";
import db from '../config/connect.js';
/* importar el modelo Pago */
import { Curso } from "./curso.model.js";
/* Primero recibe el nombre de la tabla */
export const Alumno = db.define('Alumno', {
    /* Recibe un objeto, los atributos del modelo */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nombreAlumno: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cedulaAlumno: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        unique: true
    },
    telefonoAlumno: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    correoAlumno: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
}, {
    /* tercer parametro del objeto */
    timestamps: false /* no coloca los createDate y updateDate */
});

/* Relacionar las tablas ONE TO MANY Alumno - Pago*/
//Alumno.hasMany(Pago, { /* un Alumno puede tener muchos Pagos */
//    foreignKey: 'alumnoId',
//    sourceKey: 'id'
//});

//Pago.belongsTo(Alumno, {/* Un Pago pertenece a un Alumno */
//    foreignKey: 'alumnoId',
//    targetKey: 'id' /* clave a la que tienden a ser obejtivo que seria de Alumno */
//});
/* Relacionar las tablas ONE TO MANY Curso - Alumno*/
Curso.hasMany(Alumno, { /* un Curso puede tener muchos Alumnos */
    foreignKey: 'cursoId',
    sourceKey: 'id'
});

Alumno.belongsTo(Curso, {/* Un Alumno pertenece a un Curso */
    foreignKey: 'cursoId',
    targetKey: 'id' /* clave a la que tienden a ser obejtivo que seria de Curso */
});
/* Para hacer que se SINCRONICE con la DB */ 
await Alumno.sync();