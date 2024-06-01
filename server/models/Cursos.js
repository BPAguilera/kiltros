module.exports = (sequelize, DataTypes) => {
    const kl_curso = sequelize.define("kl_curso", {
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_profesor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_curso;
};