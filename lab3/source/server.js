const express = require('express')

const app = express()

app.get('/', (req, res) => {
    var sendTags="";
    if (req.query.videoFile!=undefined)
        sendTags+='<video width="500" height="500" controls id="videoPlayer" src="'+req.query.videoFile+'">Nie udało się odtworzyc filmu</video>'
    if (req.query.audioFile!=undefined)
        sendTags+='<audio controls id="audioPlayer" src="'+req.query.audioFile+'">Nie udało się odtworzyć audio</audio>'
    if(req.query.imgFile!=undefined)
        sendTags+='<img id="posterImage" src="'+req.query.imgFile+'">'
    sendTags+=`
    <table id="playlist_table">
    <tr>
    <th>No.</th>
    <th>URL</th>
    <th>Type</th>
    </tr>
    </table>
    <br><button id="videoCancel" onclick="videoCancelFun()">videoCancel</button><br>
    <button id="audioCancel" onclick="audioCancelFun()">audioCancel</button><br>
    
    <script>
        function videoCancelFun()
        {
            viedoTag=document.getElementById('videoPlayer')
            if(viedoTag!=null)
            {
                viedoTag.src="cancel.mp4"
            }
        }
        function audioCancelFun()
        {
            audioTag=document.getElementById('audioPlayer')
            if(audioTag!=null)
            {
                audioTag.src="cancel.mp3"
            }
        }
    </script>`;
    res.send(sendTags)
})

app.listen(4080)
