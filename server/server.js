require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const AuthRoute = require('./Routes/AuthRoute')
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)
app.use('/auth', AuthRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');
        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })