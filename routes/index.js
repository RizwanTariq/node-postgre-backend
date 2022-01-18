const router = require('express').Router()
const userRoutes = require('./user')
router.get('/', (req, res) => {
  res.send('Connected...')
})

router.use('/api/users', userRoutes)

module.exports = router
