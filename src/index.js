const express = require('express')
const app = express()
const morgan = require('morgan')

// settings
const port = 3000 || process.env.PORT

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))  // Enterder texts..inputs
app.use(express.json())  // recibir json 


// routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users',require('./routes/users')) //establezco raiz de ruta

//server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})