const express = require('express')

const app = express()

app.get('/', (req, res) => {
    var sendTags=""
    if (req.query.videoFile!=undefined)
        sendTags+='<video width="500" height="500" controls id="videoPlayer" src="'+req.query.videoFile+'">Nie udało się odtworzyc filmu</video>'
    if (req.query.audioFile!=undefined)
        sendTags+='<audio controls id="audioPlayer" src="'+req.query.audioFile+'">Nie udało się odtworzyć audio</audio>'
    res.send(sendTags)
})

app.listen(4080)
