module.exports = (sequelize, DataTypes) => {
    const kl_recurso_alumno = sequelize.define("kl_recurso_alumno", {
      id_recurso_alumno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      archivo_alumnor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_alumno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_recurso_profesor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_recurso_alumno;
};