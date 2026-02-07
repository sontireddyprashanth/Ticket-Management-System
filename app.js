import express from 'express';
import { connectDB } from './config/database.js';
import { customerAuth } from './middleware/auth.js';
import { Customer } from './models/customer.js';
const app = express();

app.post('/customer', customerAuth, async(req, res) => {
    const customer = new Customer({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        mobile: 987654321,
        savedcards: 1234567890234,
        age: 34
    });
    await customer.save();
    res.send("Data added successfully");
});

connectDB()
    .then(() => {
        console.log("DB connected successfully");
        app.listen(3000, () => {
            console.log("server listening at port 3000");
        });
    })
   .catch((err) => {
    console.log("DB connection cannot be established");
});
