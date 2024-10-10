const express = require('express');
require('dotenv').config();
require('express-async-errors')
const cors = require('cors');

const connectDB = require('./db/db');
const transactions = require('./routes/transactions.js');
const notFoundMiddleware = require('./middleware/not-found-error')
const errorMiddleware = require('./middleware/error-handler')


const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/v1', transactions);


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;
const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('connected to MONGODB')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    
  }
}
start()