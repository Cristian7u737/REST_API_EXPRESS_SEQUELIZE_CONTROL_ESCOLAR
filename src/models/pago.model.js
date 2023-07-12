/* importar modulos */
import { DataTypes } from "sequelize";
import db from '../config/connect.js';
/* Primero recibe el nombre de la tabla */
export const Pago = db.define('Pago', {
    /* Recibe un objeto, los atributos del modelo */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    precioCurso: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    aportePago: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    }
}, {
    /* tercer parametro del objeto */
    timestamps: false /* no coloca los createDate y updateDate */
});


/* await Pago.sync(); */