const express = require("express"); 
const app = express(); 
const port = 8000; 

require("./config/mongoose.config");  
app.use(express.json(), express.urlencoded({ extended: true }));  

const jokesRoutes = require("./routes/jokes.routes"); 

jokesRoutes(app);  
app.listen(port, () => console.log(`Express running on port ${port}`));

