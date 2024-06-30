module.exports = (sequelize, DataTypes) => {
    const kl_log = sequelize.define("kl_log", {
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_log;
};