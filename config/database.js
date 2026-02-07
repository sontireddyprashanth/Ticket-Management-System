import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose.connect(
        'mongodb+srv://prashanthtf7_db_user:CCDCHBby7qsevqV8@sonti.fiif3zn.mongodb.net/Ticket_Management_System');
};





