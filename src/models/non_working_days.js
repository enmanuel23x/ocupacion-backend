module.exports = function(sequelize, DataTypes) {
  const summary_time_card = sequelize.define('non_working_days', 
  {
    non_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    non_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'non_working_days',
    timestamps: false
  });
  return summary_time_card;
};
