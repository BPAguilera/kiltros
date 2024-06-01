module.exports = (sequelize, DataTypes) => {
    const kl_recurso_profe = sequelize.define("kl_recurso_profe", {
      id_recurso_profe: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_recurso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      archivo_profesor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_curso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_profesor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return kl_recurso_profe;
};