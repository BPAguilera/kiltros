module.exports = (sequelize, DataTypes) => {
  const kl_admin = sequelize.define("kl_admin", {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return kl_admin;
};