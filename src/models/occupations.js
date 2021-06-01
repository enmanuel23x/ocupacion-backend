
module.exports = function(sequelize, DataTypes) {
  const occupations = sequelize.define('occupations', 
  {
    occ_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    col_id_file: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'collaborators',
        key: 'col_id_file'
      }
    },
    act_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'activities',
        key: 'act_id'
      }
    },
    occ_percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    occ_real: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    occ_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    occ_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'occupations',
    timestamps: false
  });

  occupations.associate = function (models) {
    occupations.belongsTo(models.collaborators,{
      as: 'collaborators',
      foreignKey: 'col_id_file'
    });
    occupations.belongsTo(models.activities,{
      as: 'activities',
      foreignKey: 'act_id'
    });
    occupations.hasMany(models.summary_time_card, {
      as: 'summary_time_card',
      foreignKey: 'occ_id'
    });
  };


  return occupations;
};
