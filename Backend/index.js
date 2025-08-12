


const express = require("express");
const cors = require("cors");
const db = require("./Config/dbconnection");
const userRoutes = require("./Routes/userroutes"); // Make sure file name is correct

const port = 8000; // Corrected variable name (was PORT in listen)
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Fixed missing slash

// Routes
app.use('/api', userRoutes);

// Database authentication
db.authenticate()
  .then(() => {
    console.log("Database connected successfully.");
    return db.sync({alter: true}); //optional auto sync table
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})
.catch(err => {
  console.error("Table creation failed:", err)
  
});
