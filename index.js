// const os = require('os')
// const luasSegitiga = require('./segitiga')

// import os from 'os';
// import luasSegitiga from './segitiga';

// console.log("Free Memory", os.freemem())
// console.log(luasSegitiga(2,2));


// const { Client } = require('pg');
// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'blog',
//     user: 'postgres',
//     password: 'postgrepassword',
// })

// async function connectDB(){
    
//     await client.connect()
    
//     const res = await client.query(`
//         SELECT * FROM users`,
//     )
    
//     console.log(res.rows[1].name)
//     await client.end()
// }

// connectDB();



// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })

// app.get('/products', (req, res)=>{
//     res.json([
//         "Apple",
//         "Redmi",
//         "One Plus One"
//     ])
// })

// app.get('/orders', (req,res)=>{
//     res.json([
//         {
//             id:1,
//             paid:false,
//             user_id:1
//         },
//         {
//             id:2,
//             paid:false,
//             user_id:1
//         },
//     ])
// })

// app.listen(3000, () => {
//     console.log("Server Nyala")
// })


//=================================================
const express = require('express')
const app = express()
const port = 3000
const routers =require('./router')


app.use(express.json());
app.use(routers)

app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`))

// app.get('/', (req, res) => res.status(200).send('asd'))

// app.get('',(req, res) => res.status(404).send('Gak Ketemu'))