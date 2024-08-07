const express = require("express");
const router = express.Router();
const Businessuser = require('../controllers/Businessuser')
const { upload } = require('../helpers/multer')

router.post("/register", Businessuser.createNewBusinessUser);
router.post("/business-login", Businessuser.BusinessuserLogin);

router.get("/get-all-users", Businessuser.BusinessgetAllUsers);
router.get("/get-particular-user", Businessuser.BusinessgetParticularUser);
router.delete("/delete-user", Businessuser.BusinessdeleteUser);



module.exports = router;