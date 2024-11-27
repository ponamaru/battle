document.write( '<div id="editUI" class="item2"><input id="input1" oninput="inputM()"><input id="input2"><input type="file" id="input3" oninput="inputM()"></div>' );

function inputM (){
    document.getElementId('select').innerText = document.getElementById('input1').value;
    document.getElementId('enemy2').src = document.getElementById('input3').value;
    
    }
