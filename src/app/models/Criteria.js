const connection = require("../config/db")

const CriteriaModel = {
    // fetch tat ca
    fetchAllCriteria: (callback) => {
        const query = `SELECT * FROM criteria WHERE criteria.isDeleted = 0`
        connection.query(query, callback)
    },
    // lay tat ca trong thung rac
    fetchAllCriteriaFromTrash: (callback) => {
        const query = `SELECT * FROM criteria WHERE criteria.isDeleted = 1`
        connection.query(query, callback)
    },
    // them
    AddCriteria: (criteria, callback) => {
        const query = `INSERT INTO criteria (code,criteriaName,status,note) VALUES (?,?,?,?)`
        const values = [criteria.code, criteria.criteriaName, criteria.status, criteria.note]
        connection.query(query, values, callback)
    },
    // xoa vao thung rac
    deleteCriteriaToTrash: (id, callback) => {
        const query = `UPDATE criteria SET isDeleted = 1 WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // xoa
    deleteCriteria: (id, callback) => {
        const query = `DELETE FROM criteria WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // khoi phuc
    revertCriteria: (id, callback) => {
        const query = `UPDATE criteria SET isDeleted = 0 WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // lay 1 doi tuong
    getOneCriteria: (id, callback) => {
        const query = `SELECT * FROM criteria WHERE _id= ?`
        connection.query(query, [id], callback)
    },
    //  cap nhat doi tuong
    updateCriteria: (id, criteria, callback) => {
        const query = `UPDATE criteria SET code = ? , criteriaName = ? , status = ? , note = ? WHERE _id=${id}`
        const values = [criteria.code, criteria.criteriaName, criteria.status, criteria.note]
        connection.query(query, values, callback)
    },
}

module.exports = CriteriaModel