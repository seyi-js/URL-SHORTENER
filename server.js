const express = require( 'express' )

const connection = require( './config/db' )

const app = express();



const port = process.env.PORT || 2000

app.use( express.json( { extended: false } ) );

app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/urls'))


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
