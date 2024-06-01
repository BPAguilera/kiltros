module.exports = (sequelize, DataTypes) => {
    const kl_profesor = sequelize.define("kl_profesor", {
      id_profesor: {
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
    });
  
    return kl_profesor;
};