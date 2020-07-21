const mongoose = require( 'mongoose' )

const config = require( 'config' )

const db = config.get( 'mongoUri' );

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('MongoDb Connected')
})
.catch( err=> console.log(err));


const connection = mongoose.connection;


module.exports =connection