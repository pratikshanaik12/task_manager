const mongoose = require('mongoose')


const connectDB = (url) =>{
    return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
}

// mongoose
// .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
// .then(()=> console.log('Conneted to the Db'))
// .catch((e)=> console.log(e))

module.exports = connectDB