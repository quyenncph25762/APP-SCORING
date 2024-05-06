const connection = require("../config/db")

const ScoreTempModel = {
    fetchAllScoreTemp: (callback) => {
        const query = `SELECT scoretemp.*,customer.customerName AS customerName
        FROM scoretemp
        JOIN customer ON customer._id = scoretemp.customerId
        `
        connection.query(query, callback)
    },
    addScoreTemp: (scoreTemp, callback) => {
        const query = `INSERT INTO scoretemp (title,status,customerId,note,scoreTempDetailId) VALUES (?,?,?,?,?)`
        const VALUES = [scoreTemp.title, scoreTemp.status, scoreTemp.customerId, scoreTemp.note, scoreTemp.scoreTempDetailId]
        connection.query(query, VALUES, callback)
    }
}

module.exports = ScoreTempModel