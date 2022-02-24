const { Client } = require('pg');

const client = new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'manoj123',
    database:'product_details'
})

client.connect();

client.query('select name from details',(err,result) => {
    
        console.log(result.rows);
    
    client.end();
});