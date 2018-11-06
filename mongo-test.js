const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/myBlog', {
    useMongoClient: true
})
    .then( () => console.log('Successful connection to MongoDB'))
    .catch( e => console.error('error', e))