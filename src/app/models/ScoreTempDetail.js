const connection = require("../config/db")

const ScoreTempDetailModel = {
    fetchAllScoreTempDetail: (callback) => {
        const query = `SELECT scoretempdetail.*,scoreTemp.title AS scoreTemTitle FROM scoretempdetail
        JOIN scoreTemp ON scoreTemp._id = scoreTempDetail.scoreTempId
        `
        connection.query(query, callback)
    },
    addScoreTempDetail: (ScoreTempDetail, callback) => {
        const query = `INSERT INTO scoretempdetail (titleDetail,isMark,maxPoint,criterialId,noteDetail,scoreTempId) VALUES (?,?,?,?,?,?)`
        const VALUES = [ScoreTempDetail.titleDetail, ScoreTempDetail.isMark, ScoreTempDetail.maxPoint, ScoreTempDetail.criterialId, ScoreTempDetail.noteDetail, ScoreTempDetail.scoreTempId]
        connection.query(query, VALUES, callback)
    }
}

module.exports = ScoreTempDetailModel