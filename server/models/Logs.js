module.exports = (sequelize, DataTypes) => {
    const kl_log = sequelize.define("kl_log", {
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_log;
};