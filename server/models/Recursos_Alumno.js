module.exports = (sequelize, DataTypes) => {
    const kl_recurso_alumno = sequelize.define("kl_recurso_alumno", {
      archivo_alumno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    kl_recurso_alumno.associate = function(models) {
      kl_recurso_alumno.belongsTo(models.kl_recurso_profe, {foreignKey: 'id_recurso_profesor',});
      kl_recurso_alumno.belongsTo(models.kl_alumno, {foreignKey: 'id_alumno',});
    };
  
    return kl_recurso_alumno;
};