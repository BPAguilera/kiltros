module.exports = (sequelize, DataTypes) => {
    const kl_profesor = sequelize.define("kl_profesor", {
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
    });
    
    kl_profesor.associate = function(models) {
      kl_profesor.hasMany(models.kl_curso, {foreignKey: 'id_profesor'});
      kl_profesor.hasMany(models.kl_recurso_profe, {foreignKey: 'id_profesor'});
    };
  
    return kl_profesor;
};