/* importar modulos */
import { DataTypes } from "sequelize";
import db from '../config/connect.js';
/* importa el modelo de Curso */
import { Curso } from "./curso.model.js";
import { Alumno } from "./alumno.model.js";
/* Primero recibe el nombre de la tabla */
export const Profesor = db.define('Profesor', {
    /* Recibe un objeto, los atributos del modelo */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nombreProfesor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cedulaProfesor: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        unique: true
    },
    telefonoProfesor: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    correoProfesor: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    profesionProfesor: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    /* tercer parametro del objeto */
    timestamps: false /* no coloca los createDate y updateDate */
});

/* Relacionar las tablas ONE TO MANY Profesor - Alumno*/
//Profesor.hasMany(Alumno, { /* un Profesor puede tener muchos Alumnos */
//    foreignKey: 'profesorId',
//    sourceKey: 'id'
//});

//Alumno.belongsTo(Profesor, {/* Un Alumno pertenece a un Profesor */
//    foreignKey: 'profesorId',
//    targetKey: 'id' /* clave a la que tienden a ser obejtivo que seria de Profesor */
//});


/* await Profesor.sync(); */


