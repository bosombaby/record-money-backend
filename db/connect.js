//异步实现数据库连接
const mysql = require('mysql')

// 更改全局数据库连接
const pool = mysql.createPool({
  url: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'record-money',
})

let query = async (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject('数据库连接出错', err)
      } else {
        connection.query(sql, values, (err, results) => {
          if (err) {
            reject('sql语句错误', err)
          } else {
            resolve(results)
          }
          connection.release()
        })
      }
    })
  })
}
module.exports = query
