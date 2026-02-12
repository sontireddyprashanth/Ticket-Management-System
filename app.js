import express from 'express';
import { connectDB } from './config/database.js';
import { customerAuth } from './middleware/auth.js';
import { Customer } from './models/customer.js';
const app = express();

app.use(express.json());

app.post('/customer', customerAuth, async(req, res) => {
    const customer = new Customer(req.body);
    
    try{
        await customer.save();
        res.send("Data added successfully");
    }catch(err){
        req.status(400).send("Err adding data:", err.message);
    }
  
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
