module.exports = function(sequelize, DataTypes) {
  const clients = sequelize.define('clients', 
  {
    cli_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cli_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cli_description: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    cli_icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cli_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'clients',
    timestamps: false
  });

  clients.associate = function (models) {
    clients.hasMany(models.activities, {
      as: 'activities',
      foreignKey: 'cli_id'
    });
  };


  return clients;
};
