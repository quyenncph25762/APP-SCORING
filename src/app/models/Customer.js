const connection = require("../config/db")

const CustomerModel = {
    // fetch tat ca
    fetchAllCustomer: (callback) => {
        const query = `SELECT * FROM customer WHERE customer.isDeleted = 0`
        connection.query(query, callback)
    },
    // lay tat ca trong thung rac
    fetchAllCustomerFromTrash: (callback) => {
        const query = `SELECT * FROM customer WHERE customer.isDeleted = 1`
        connection.query(query, callback)
    },
    // them
    AddCustomer: (customer, callback) => {
        const query = `INSERT INTO customer (code,customerName,status,note) VALUES (?,?,?,?)`
        const values = [customer.code, customer.customerName, customer.status, customer.note]
        connection.query(query, values, callback)
    },
    // xoa vao thung rac
    deleteCustomerToTrash: (id, callback) => {
        const query = `UPDATE customer SET isDeleted = 1 WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // xoa
    deleteCustomer: (id, callback) => {
        const query = `DELETE FROM customer WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // khoi phuc
    revertCustomer: (id, callback) => {
        const query = `UPDATE customer SET isDeleted = 0 WHERE _id=${id}`
        connection.query(query, id, callback)
    },
    // lay 1 doi tuong
    getOneCustomer: (id, callback) => {
        const query = `SELECT * FROM customer WHERE _id= ?`
        connection.query(query, [id], callback)
    },
    //  cap nhat doi tuong
    updateCustomer: (id, customer, callback) => {
        const query = `UPDATE customer SET code = ? , customerName = ? , status = ?,note = ? WHERE _id=${id}`
        const values = [customer.code, customer.customerName, customer.status, customer.note]
        connection.query(query, values, callback)
    },
}

module.exports = CustomerModel