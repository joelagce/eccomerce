const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joelagce:nuevoreino1914@cluster0.xmhns.mongodb.net/Database?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then( db => console.log('Mongodb is connnected'))
.catch(err => console.log(err));


// mongoose.connect('mongodb://localhost:27017/products', (err, res) => {

//     if( err ) throw err;

//     console.log('Mongodb is connected');

// });
