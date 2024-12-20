import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
}) // now the cloudinary is configured 

// this route for getting all the posts 
router.get('/', async(req, res)=>{
        try{
           const posts = await Post.find({});

           res.status(200).json({success:true, data:posts})
        }
           catch(error){
            res.status(500).json({success:false, message:error})
           
        }
        
})

router.post('/', async(req, res)=>{
    try{
    const { name, prompt , photo}= req.body;
    const photoURL = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
        name: name, 
        prompt: prompt,
        photo : photoURL.url,
    })
    res.status(201).json({success:true, data: newPost});
    }
    catch(error){
        res.status(500).json({sucess : false, message: error})
    }
});



export default router;