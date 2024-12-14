import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import { promises as fs } from "fs";

dotenv.config();

const router = express.Router();
const HF_API_KEY = process.env.HF_API_KEY; // Store your API key in a .env file for security
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: "Bearer " + process.env.HF_API_KEY,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
  //console.log('response is:', response);
	const result = await response.blob();
	return result;
}

router.route('/').post(async (req, res) => {
  console.log('Reached the image generation endpoint');
  try {
    const { prompt } = req.body;
    console.log('Prompt is', prompt);

    // Make the API request to Hugging Face
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
        responseType: 'arraybuffer', 
      }
    );

    if (response.data) {
      const base64Image = Buffer.from(response.data, 'binary').toString('base64'); // Convert binary to Base64
      res.status(200).json({ photo: `data:image/png;base64,${base64Image}` }); // Prefix with data URI
    } else {
      res.status(500).json({ error: 'Failed to generate image' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.error || 'Something went wrong');
  }
});

export default router;
