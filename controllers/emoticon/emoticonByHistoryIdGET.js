const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const util = require("../../lib/util");
const { emoticonDB } = require("../../models");

module.exports = async (req, res) => {
    try {
        const {cHistoryID} = req.params;

        const result = await emoticonDB.getEmoticonByHistoryID(cHistoryID);
        
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_EMOTION_BY_HISTORYID, result));
    }
    catch(err) {
        console.log(err);
    }
}