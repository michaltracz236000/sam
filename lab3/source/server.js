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
    <button id="audioAdd" onclick="audioAddFun()">Add audio</button><br>
    <button id="videoAdd" onclick="videoAddFun()">Add video</button><br>
    <button id="imgAdd" onclick="imgAddFun()">Add image</button><br>
    <script>
        i=1
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
        function videoAddFun()
        {
            viedoTag=document.getElementById('videoPlayer')
            if(viedoTag!=null)
            {
                table = document.getElementById("playlist_table");
                row = table.insertRow(i);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=viedoTag.src;
                row.insertCell(2).innerHTML="Video";
                i+=1;
            }
        }
        function audioAddFun()
        {
            audioTag=document.getElementById('audioPlayer')
            if(audioTag!=null)
            {
                table = document.getElementById("playlist_table");
                row = table.insertRow(i);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=audioTag.src;
                row.insertCell(2).innerHTML="Audio";
                i+=1;
            }
        }
        function imgAddFun()
        {
            imgTag=document.getElementById('posterImage')
            if(imgTag!=null)
            {
                table = document.getElementById("playlist_table");
                row = table.insertRow(i);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=imgTag.src;
                row.insertCell(2).innerHTML="Image";
                i+=1;
            }
        }
        
    </script>`;
    res.send(sendTags)
})

app.listen(4080)
