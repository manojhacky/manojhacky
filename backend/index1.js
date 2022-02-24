const express = require('express')
const {Pool,client} = require('pg')
const app = express();

app.use(express.json());
const db = {
    user:'postgres',
    password:'manoj123',
    port:5432,
    host:'localhost',
    database:'products'
}
//app.listen(3000);
const con = new Pool(db);

con.query('select * from product_details',(err,res)=>{
    console.log(res.rows)
}); 
/*app.get("/product/", (req, res) => {
    const query1 = `select * from product_details;`;
  
  });

module.exports=app
*/
