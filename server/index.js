import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import connectDB from './mongodb/connect.js'
dotenv.config(); // this line allows us to pool the environment variables 

const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/', async (req ,res)=>{
    res.send("hello word");
})
const startServer=  async ()=>{
    console.log("correctly updated");
    try{
            connectDB(process.env.MONGODB_URL);
            app.listen(8080,()=>{
                console.log(`server is running on port http://localhost:8080`);
            })

    }
    catch(error){

    }
  
}

startServer();