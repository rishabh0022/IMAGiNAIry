# IMAGiNAIry

IMAGiNAIry is a full-stack web application that enables users to generate AI-powered images. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Cloudinary for image storage, and the Hugging Face API for AI-driven image generation, this application allows users to create stunning images with just a few inputs.

## Features

- **AI Image Generation**: Leverages the Hugging Face API to generate high-quality images based on user-provided text prompts.
- **User History**: Users can view their previously generated images, stored securely in MongoDB with optimized query performance.
- **Image Storage**: Generated images are stored on Cloudinary, ensuring efficient and scalable image handling.
- **Responsive UI**: A clean, responsive user interface built with React.js, ensuring smooth interaction across devices.
- **RESTful API**: The backend is designed using a RESTful API architecture to provide seamless communication between the frontend and the AI image generation service.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **AI Service**: Hugging Face API (for image generation)
- **Architecture**: MVC (Model-View-Controller)
- **API**: RESTful design for smooth frontend-backend interaction

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud database like MongoDB Atlas)
- [Cloudinary Account](https://cloudinary.com/)
- [Hugging Face API Key](https://huggingface.co/docs)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IMAGiNAIry.git
   cd IMAGiNAIry
