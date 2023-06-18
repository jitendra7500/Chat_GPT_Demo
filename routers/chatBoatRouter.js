const router = require("express").Router();
const { Chat }  = require("../controllers/chatBoatController"); 

router.post("/chat", Chat);

module.exports = router;