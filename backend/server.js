const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Working on port 5000");
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})