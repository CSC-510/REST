const express = require('express')
const app = express()
const port = 3000

// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', function (req, res) {
    
    res.send(`Received object. ${JSON.stringify(req.body)}`);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))