/* importar modulos */
import { DataTypes } from "sequelize";
import db from '../config/connect.js';
/* Primero recibe el nombre de la tabla */
export const Curso = db.define('Curso', {
    /* Recibe un objeto, los atributos del modelo */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nombreCurso: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    precioCurso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCurso: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    /* tercer parametro del objeto */
    timestamps: false /* no coloca los createDate y updateDate */
});

/* Relacionar las tablas ONE TO MANY Curso - Pago*/
//Curso.hasMany(Pago, { /* Un curso puede tener muchos Profesores */
//    foreignKey: 'cursoId',
//    sourceKey: 'id'
//});

//Pago.belongsTo(Curso, {/* Un pago pertenece a un Curso */
//    foreignKey: 'cursoId',
//    targetKey: 'id' /* clave a la que tienden a ser obejtivo que seria de Curso */
//});

/* Para hacer que se SINCRONICE con la DB */ 
await Curso.sync(); 
