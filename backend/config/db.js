import mongose from 'mongoose'
import dotenv from "dotenv";
import colors from 'colors'
dotenv.config();

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
    try{
        var c1 = 'mongodb+srv://east-shopping:admin@cluster0.p9wirik.mongodb.net/?retryWrites=true&w=majority'
        var c2 = 'mongodb://localhost:27017/test'
        const conn = await mongose.connect(c1,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
            process.exit(1)
    }
}

export default connectDB