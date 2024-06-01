const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const util = require("../../lib/util");
const { emoticonDB } = require("../../models");

module.exports = async (req, res) => {
    try {
        const {cHistoryID, category} = req.params;

        const result = await emoticonDB.getCountOfEmoticon(cHistoryID, category);
        
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_COUNT_OF_EMOTICON, result));
    }
    catch(err) {
        console.log(err);
    }
}