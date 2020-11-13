const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

require("./server/config/mongoose.config");

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

//ROUTES
const AllPetRoutes = require("./server/routes/pet.routes");
AllPetRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));