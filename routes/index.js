const express = require('express');
const emoticonPOST = require('../controllers/emoticon/emoticonPOST');
const emoticonDELETE = require('../controllers/emoticon/emoticonDELETE');
const emoticonGET = require('../controllers/emoticon/emoticonGET');
const countOfEmoticonGET = require('../controllers/emoticon/countOfEmoticonGET');
const emotionByHistoryIdGET = require('../controllers/emoticon/emoticonByHistoryIdGET');

const router = express.Router();


router.post('/:cHistoryID', emoticonPOST); // 공감 등록하기

router.get('/:cHistoryID/user/:userID', emoticonGET); // 공감 조회하기
router.get('/:cHistoryID/:category', countOfEmoticonGET)  // 하나의 소비내역당 공감종류별 개수 조회하기
router.get('/:cHistoryID', emotionByHistoryIdGET) // 소비내역별 공감 조회하기

router.delete('/:cHistoryID', emoticonDELETE); // 공감 취소하기

module.exports = router;