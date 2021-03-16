module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    usr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    
    col_id_file: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'collaborators',
        },
        key: 'col_id_file'
      }
    },
    usr_rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usr_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false
  });

  users.associate = function (models) {
    users.belongsTo(models.collaborators,{
      as: 'collaborators',
      foreignKey: 'col_id_file'
    });
  };


  return users;
};
