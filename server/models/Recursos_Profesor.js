module.exports = (sequelize, DataTypes) => {
    const kl_recurso_profe = sequelize.define("kl_recurso_profe", {
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
    });

    kl_recurso_profe.associate = function(models) {
      kl_recurso_profe.hasMany(models.kl_recurso_alumno, {foreignKey: 'id_recurso_profesor'});
      kl_recurso_profe.belongsTo(models.kl_curso, {foreignKey: 'id_curso'});
      kl_recurso_profe.belongsTo(models.kl_curso, {foreignKey: 'id_profesor'});
    };
  
    return kl_recurso_profe;
};