const express = require('express');

const router = express.Router();

router.use("/emoticon", require("./emoticon"));

module.exports = router;