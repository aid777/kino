const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kino').then(() => {
    console.log('Connected to MONGODB');
}).catch((e) => {
    console.error('Failed to connect to MONGODB:', e);
})
