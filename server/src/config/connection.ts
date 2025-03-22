import dotenv from 'dotenv';
dotenv.config(); // Ensure this is called before accessing process.env

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz';

mongoose.connect(MONGODB_URI);

export default mongoose.connection;
