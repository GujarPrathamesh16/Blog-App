const { mongoose } = require('mongoose');

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.mongoDb_URL);
        console.log(`Database Connected : ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;