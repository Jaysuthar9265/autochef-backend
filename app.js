const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./src/routes/UserRoutes');
const roleRoutes = require('./src/routes/RoleRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);


const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.error("Error connecting to MongoDB:", err));