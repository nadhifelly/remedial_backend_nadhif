const router = require('express').Router();
const connect = require('../connection/connection')

//add karyawan
router.post('/karyawan/add', (req,res) => {
    var sql = `INSERT INTO  karyawan SET ?`;
    var sql2 = `SELECT * FROM karyawan`;
    var data = req.body

    connect.query(sql,data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result2) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result2)
        })
    })
})
//edit karyawan
router.patch('/karyawan/:id', (req,res) => {
    var data = [req.body, req.params.id]
    var sql = `UPDATE karyawan SET ? WHERE id = ?`
    var sql2 = `SELECT * FROM karyawan`

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result2) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result2)
        })

    })
})
//delete karyawan
router.delete('/karyawan/:id', (req,res) => {
    var sql = `DELETE FROM karyawan WHERE id = ?`
    var sql2 = `SELECT * FROM karyawan`
    var data = req.params.id

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result2) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result2)
        })

    })

})
//show all karyawan
router.get('/karyawan', (req,res) => {
    var sql = `SELECT * FROM karyawan`

    connect.query(sql, (error,result) => {
        if(error) return res.send(error.sqlMessage)

        res.send(result)
    })
})

module.exports = router