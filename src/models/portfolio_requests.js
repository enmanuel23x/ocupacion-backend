module.exports = function(sequelize, DataTypes) {
  const portfolio_requests = sequelize.define('portfolio_requests', 
  {
    por_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    por_company: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_commercial_area: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_responsable: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_order_priority: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_application_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_start_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_end_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_plan_end_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_estimated_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_condition: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_advance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_deviation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_cli_deliverables_comp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_cli_pending_activities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_cli_comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_int_deliverables_comp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_int_pending_activities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_int_comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    por_status_upd_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_type_req: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_technical_area: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_category: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_various_points: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_solver_group: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_client: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    por_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'portfolio_requests',
    timestamps: false
  });

  portfolio_requests.associate = function (models) {
    portfolio_requests.hasOne(models.activities, {
      as: 'activities',
      foreignKey: 'por_id'
    });
  };


  return portfolio_requests;
};
