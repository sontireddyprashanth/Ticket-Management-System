import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobile: Number,
    savedcards: Number,
    age: Number
});

export const Customer = mongoose.model('Customer', customerSchema);


