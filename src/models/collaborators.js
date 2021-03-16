module.exports = function(sequelize, DataTypes) {
  const collaborators = sequelize.define('collaborators', 
  {
    col_id_file: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    col_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    col_last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    col_identification: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    col_email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    col_campus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    col_position: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    col_management: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    col_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'collaborators',
    timestamps: false
  });

  collaborators.associate = function (models) {
    collaborators.hasMany(models.users, {
      as: 'users',
      foreignKey: 'col_id_file'
    });
  };


  return collaborators;
};
