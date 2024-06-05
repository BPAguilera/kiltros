module.exports = (sequelize, DataTypes) => {
    const kl_curso = sequelize.define("kl_curso", {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unidades: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    kl_curso.associate = function(models) {
      kl_curso.hasMany(models.kl_alumno, {foreignKey: 'id_curso'});
      kl_curso.belongsTo(models.kl_profesor, {foreignKey: 'id_profesor'});
    };
  
    return kl_curso;
};