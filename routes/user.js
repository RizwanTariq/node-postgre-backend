const router = require('express').Router()
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/')
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now().toString()}-${file.originalname}`)
  },
})
const upload = multer({ storage })

//Get All users
router.get('/', require('../controllers/user').getUsers)

//Get specific user
router.get('/:id', require('../controllers/user').getUser)

//Add new user
router.post(
  '/',
  upload.single('picture'),
  require('../controllers/user').createUser
)

//Update Specific user
router.put(
  '/:id',
  upload.single('picture'),
  require('../controllers/user').updateUser
)

//Delete specific user
router.delete('/:id', require('../controllers/user').deleteUser)

module.exports = router
