const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const { DB_URI } = process.env

module.exports = () => {

    const connect = () => {
        mongoose.set('strictQuery', false);
        mongoose.connect(DB_URI,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
            }).then((data)=>
            {
                console.log(`Mongodb connected on: ${data.connection.host}`);
            }).catch((err)=>{
                console.log(err)
            });
    }
    connect();
}
