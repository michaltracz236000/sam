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
    <th>Action</th>
    </tr>
    </table>
    <br><button id="videoCancel" onclick="videoCancelFun()">videoCancel</button><br>
    <button id="audioCancel" onclick="audioCancelFun()">audioCancel</button><br>
    <button id="audioAdd" onclick="audioAddFun()">Add audio</button><br>
    <button id="videoAdd" onclick="videoAddFun()">Add video</button><br>
    <button id="imgAdd" onclick="imgAddFun()">Add image</button><br>
    <script>
        i=1
        function deleteRow(toDelete)
        {
            var row = toDelete.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
        function upRow(toUp)
        {
            var row = toUp.parentNode.parentNode;
            var rows = row.parentNode.rows;
            if(row.rowIndex==1)
            {
                row.parentNode.insertBefore(rows[row.rowIndex],rows[rows.length-1].nextSibling);
            }
            else
            {
                row.parentNode.insertBefore(rows[row.rowIndex],rows[row.rowIndex-1]);
            }
        }
        function downRow(toDown)
        {
            var row = toDown.parentNode.parentNode;
            var rows = row.parentNode.rows;
            if(row.rowIndex==rows.length-1)
            {
                row.parentNode.insertBefore(rows[row.rowIndex],rows[1]);
            }
            else
            {
                row.parentNode.insertBefore(rows[row.rowIndex+1],rows[row.rowIndex]);
            }
        }
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
                row = table.insertRow(table.rows.length);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=viedoTag.src;
                row.insertCell(2).innerHTML="Video";

                let btn = document.createElement('button');
                btn.innerText = 'Delete';
                btn.className = "removeRowButton";
                btn.setAttribute('onclick', 'deleteRow(this)');
                var tempCell=row.insertCell(3);
                tempCell.appendChild(btn);

                let btn1 = document.createElement('button');
                btn1.innerText = 'Up';
                btn1.className = "moveRowUpButton";
                btn1.setAttribute('onclick', 'upRow(this)');
                tempCell.appendChild(btn1);

                let btn2 = document.createElement('button');
                btn2.innerText = 'Down';
                btn2.className = "moveRowDownButton";
                btn2.setAttribute('onclick', 'downRow(this)');
                tempCell.appendChild(btn2);
                i+=1;
            }
        }
        function audioAddFun()
        {
            audioTag=document.getElementById('audioPlayer')
            if(audioTag!=null)
            {
                table = document.getElementById("playlist_table");
                row = table.insertRow(table.rows.length);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=audioTag.src;
                row.insertCell(2).innerHTML="Audio";
                let btn = document.createElement('button');
                btn.innerText = 'Delete';
                btn.className = "removeRowButton";
                btn.setAttribute('onclick', 'deleteRow(this)');
                var tempCell=row.insertCell(3);
                tempCell.appendChild(btn);

                let btn1 = document.createElement('button');
                btn1.innerText = 'Up';
                btn1.className = "moveRowUpButton";
                btn1.setAttribute('onclick', 'upRow(this)');
                tempCell.appendChild(btn1);

                let btn2 = document.createElement('button');
                btn2.innerText = 'Down';
                btn2.className = "moveRowDownButton";
                btn2.setAttribute('onclick', 'downRow(this)');
                tempCell.appendChild(btn2);
                i+=1;
            }
        }
        function imgAddFun()
        {
            imgTag=document.getElementById('posterImage')
            if(imgTag!=null)
            {
                table = document.getElementById("playlist_table");
                row = table.insertRow(table.rows.length);
                row.insertCell(0).innerHTML=i;
                row.insertCell(1).innerHTML=imgTag.src;
                row.insertCell(2).innerHTML="Image";
                let btn = document.createElement('button');
                btn.innerText = 'Delete';
                btn.className = "removeRowButton";
                btn.setAttribute('onclick', 'deleteRow(this)');
                var tempCell=row.insertCell(3);
                tempCell.appendChild(btn);
                
                
                let btn1 = document.createElement('button');
                btn1.innerText = 'Up';
                btn1.className = "moveRowUpButton";
                btn1.setAttribute('onclick', 'upRow(this)');
                tempCell.appendChild(btn1);

                let btn2 = document.createElement('button');
                btn2.innerText = 'Down';
                btn2.className = "moveRowDownButton";
                btn2.setAttribute('onclick', 'downRow(this)');
                tempCell.appendChild(btn2);
                i+=1;
            }
        }
        
    </script>`;
    res.send(sendTags)
})

app.listen(4080)
