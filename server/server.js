const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require("./models/product.model");
require("./config/mongoose.config")

require("./routes/product.routes")(app);

app.listen(8000, () => console.log("The server is listening on port 8000"))