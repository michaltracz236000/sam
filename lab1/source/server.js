const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(req.query.videoFile +" "+req.query.audioFile)
})

app.listen(4080)
