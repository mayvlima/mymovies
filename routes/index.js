var express = require('express');
var router = express.Router();
const path = require("path");
const multer = require("multer");

const indexController = require('../controllers/indexController')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "posters"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', indexController.index);
router.post('/cadastrar', upload.any() ,indexController.store);

router.get('/assistir/:id', indexController.createWatched)

module.exports = router;
