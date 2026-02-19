import dotEnv from 'dotenv';
dotEnv.config();
import mongoose from 'mongoose';


const PORT = process.env.PORT || 3000;

export const connectDB = async() => {
    await mongoose.connect(
        process.env.MONGO_URI);
};





