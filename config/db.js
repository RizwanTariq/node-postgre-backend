const Sequelize = require('sequelize')

module.exports = new Sequelize('user_info', 'postgres', '85906600', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
})
