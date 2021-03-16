module.exports = function(sequelize, DataTypes) {
  const summary_time_card = sequelize.define('summary_time_card', 
  {
    sum_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    occ_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'occupations',
        key: 'occ_id'
      }
    },
    sum_moth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sum_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sum_hh: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'summary_time_card',
    timestamps: false
  });

  summary_time_card.associate = function (models) {
    summary_time_card.belongsTo(models.occupations,{
      as: 'occupations',
      foreignKey: 'occ_id'
    });
  };


  return summary_time_card;
};
