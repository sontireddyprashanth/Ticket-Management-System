const { MongoClient } = require("mongodb");

async function runGetStarted() {
    const URI = 
       "mongodb+srv://prashanthtf7_db_user:<CCDCHBby7qsevqV8>@sonti.fiif3zn.mongodb.net/?appName=Sonti";
    const client = new MongoClient(URI);

    try {
        const database = client.db('Ticket_Management_System');
        const movies = database.collection('Customer');

        console.log('db connected successfully');
    }finally{
        await client.close();
    }
} 

runGetStarted().catch(console.dir);


