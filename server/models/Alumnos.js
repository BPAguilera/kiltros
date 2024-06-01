module.exports = (sequelize, DataTypes) => {
    const kl_alumno = sequelize.define("kl_alumno", {
      id_alumno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rut: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return kl_alumno;
};