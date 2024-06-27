module.exports = (sequelize, DataTypes) => {
    const kl_alumno = sequelize.define("kl_alumno", {
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
      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    kl_alumno.associate = function(models) {
      kl_alumno.hasMany(models.kl_recurso_alumno, {foreignKey: 'id_alumno'});
      kl_alumno.belongsTo(models.kl_curso, {foreignKey: 'id_curso'});
    };
  
    return kl_alumno;
};