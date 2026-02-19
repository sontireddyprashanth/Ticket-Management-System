import express from 'express';
import { connectDB } from './config/database.js';
import { customerAuth } from './middleware/auth.js';
import { Customer } from './models/Customer.js';
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.post('/customer', customerAuth, async(req, res) => {
    const customer = new Customer(req.body);

    try{
        await customer.save();
        res.send("Data added successfully");
    }catch(err){
        res.status(400).send("Err adding data:", err.message);
    }
  
});

connectDB()
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log("server listening at port 3000");
        });
    })
   .catch((err) => {
    console.log("DB connection cannot be established");
});
~