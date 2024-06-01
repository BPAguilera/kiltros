module.exports = (sequelize, DataTypes) => {
    const kl_admin = sequelize.define("kl_admin", {
      id_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_admin;
};