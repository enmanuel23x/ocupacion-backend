module.exports = function(sequelize, DataTypes) {
  const activities = sequelize.define('activities', 
  {
    act_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    por_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'portfolio_requests',
        key: 'por_id'
      }
    },
    act_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    act_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cli_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'cli_id'
      }
    },
    act_portfolio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    act_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    act_clockify_task: {
      type: DataTypes.STRING(225),
      allowNull: true
    }
  }, {
    tableName: 'activities',
    timestamps: false
  });

  activities.associate = function (models) {
    activities.hasMany(models.occupations, {
      as: 'occupations',
      foreignKey: 'act_id'
    });
    activities.belongsTo(models.portfolio_requests,{
      as: 'portfolio_requests',
      foreignKey: 'por_id'
    });
    activities.belongsTo(models.clients,{
      as: 'clients',
      foreignKey: 'cli_id'
    });
  };


  return activities;
};