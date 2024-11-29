document.write( '<div id="editUI" class="item2"><p>Eキーで非表示</p><button id="systemEditB" onclick="Cene8()">Other</button><button id="emnemyEditB" onclick="Cene3()">enemys</button><button id="friendEditB" onclick="Cene4()">friends</button><div id="editEnemy"><p>敵の数</p><div id="Menemy">3</div><button id="CeneL" onclick="Cene()">←</button><button id="CeneR" onclick="Cene2()">→</button><p></p><div id="enemydiv1"><form><p>敵1</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview(this);"></form>名前<input id="input1" oninput="inputM()" placeholder="敵1の名前" value="敵1">大きさ<input id="input4" oninput="inputM()" placeholder="大きさ" value="300">位置(上下)<input id="input5" oninput="inputM()"  value="250"><p>位置(左右)<input id="input7" oninput="inputM()" value="200">HP<input id="input17" oninput="inputM()" value="100">最大攻撃力<input id="input37" oninput="inputM3()" placeholder="敵1の最大攻撃力" value="20"></p></div><form name="myform"><div id="img"></div><div id="enemydiv2"><form><p>敵2</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview2(this);"></form><p>名前<input id="input2" oninput="inputM2()" value="敵2">大きさ<input id="input8" oninput="inputM2()" placeholder="大きさ" value="300">位置(上下)<input id="input9" oninput="inputM2()" placeholder="位置(上下)" value="250"><p>位置(左右)<input id="input10" oninput="inputM2()"  placeholder="位置(左右)" value="600">HP<input id="input16" oninput="inputM2()" placeholder="HP" value="100">最大攻撃力<input id="input36" oninput="inputM2()" placeholder="敵2の最大攻撃力" value="20"></p></div><div id="enemydiv3"><form><p>敵3</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview3(this);"></form>名前<input id="input11" oninput="inputM3()" placeholder="敵3の名前" value="敵3">大きさ<input id="input12" oninput="inputM3()" placeholder="大きさ" value="300">位置(上下)<input id="input13" oninput="inputM3()" placeholder="位置(上下)" value="250"><p>位置(左右)<input id="input14" oninput="inputM3()" placeholder="位置(左右)" value="1000">HP<input id="input15" oninput="inputM3()" placeholder="HP" value="100">最大攻撃力<input id="input35" oninput="inputM3()" placeholder="敵3の最大攻撃力" value="20"></div></div><div id="editFriend"><p>味方の数</p><div id="Menemy2">3</div><button id="CeneL2" onclick="Cene5()">←</button><button id="CeneR2" onclick="Cene6()">→</button><div id="frienddiv1"><form><p>味方1の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview4(this);"></form>名前<input id="input18" oninput="inputM4()" placeholder="味方1の名前" value="味方1">HP<input id="input19" oninput="inputM4()" placeholder="味方1のhp" value="100">MP<input id="input20" oninput="inputM4()" placeholder="味方1のmp" value="50">最大攻撃力<input id="input21" oninput="inputM4()" placeholder="味方1の最大攻撃力" value="20"></p></div><div id="frienddiv2"><form><p>味方2の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview5(this);"></form>名前<input id="input22" oninput="inputM5()" placeholder="味方2の名前" value="味方2">HP<input id="input23" oninput="inputM5()" placeholder="味方2のhp" value="100">MP<input id="input25" oninput="inputM5()" placeholder="味方2のmp" value="50">最大攻撃力<input id="input24" oninput="inputM5()" placeholder="味方2の最大攻撃力" value="20"></div><div id="frienddiv3"><form><p>味方3の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview6(this);"></form>名前<input id="input27" oninput="inputM6()" placeholder="味方3の名前" value="味方3">HP<input id="input26" oninput="inputM6()" placeholder="味方3のhp" value="100">MP<input id="input32" oninput="inputM6()" placeholder="味方3のmp" value="50">最大攻撃力<input id="input33" oninput="inputM6()" placeholder="味方3の最大攻撃力" value="20"></div><div id="frienddiv4"><form><p>味方4の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview7(this);"></form>名前<input id="input28" oninput="inputM7()" placeholder="味方4の名前" value="味方4">HP<input id="input29" oninput="inputM7()" placeholder="味方4のhp" value="100">MP<input id="input30" oninput="inputM7()" placeholder="味方4のmp" value="50">最大攻撃力<input id="input31" oninput="inputM7()" placeholder="味方4の最大攻撃力" value="20"></div></div><div id="editSystem"><div>BGM</div><input id="34" type="file" accept="audio/*" oninput="preview8(this)"></div><a id="btn" download="sample.txt">ダウンロード</a></div>');
var UIv = true;
function inputM (){
enemyName[0] = document.getElementById('input1').value;
document.getElementById('enemy1').style.width = document.getElementById('input4').value;
document.getElementById('enemy1').style.top = document.getElementById('input5').value;
document.getElementById('enemy1').style.left = document.getElementById('input7').value;
enemyHp[0] = document.getElementById('input17').value;
enemyAttack[0] = document.getElementById('input37').value;
    }

function inputM2 (){
enemyName[1] = document.getElementById('input2').value;
document.getElementById('enemy2').style.width = document.getElementById('input8').value;
document.getElementById('enemy2').style.top = document.getElementById('input9').value;
document.getElementById('enemy2').style.left = document.getElementById('input10').value;
enemyHp[1] = document.getElementById('input16').value;
enemyAttack[1] = document.getElementById('input36').value;
    }
function inputM3 (){
enemyName[2] = document.getElementById('input11').value;
document.getElementById('enemy3').style.width = document.getElementById('input12').value;
document.getElementById('enemy3').style.top = document.getElementById('input13').value;
document.getElementById('enemy3').style.left = document.getElementById('input14').value;
enemyHp[2] = document.getElementById('input15').value;
enemyAttack[2] = document.getElementById('input35').value;
    }

function inputM4 (){
friend[0] = document.getElementById('input18').value;
friendHp[0] = document.getElementById('input19').value;
friendMp[0] = document.getElementById('input20').value;
friendHb[0] = document.getElementById('input19').value;
friendMb[0] = document.getElementById('input20').value;
friendAttack[0] = document.getElementById('input21').value;
document.getElementById("friendName").innerText = friend[0];
    }

function inputM5 (){
friend[1] = document.getElementById('input22').value;
friendHp[1] = document.getElementById('input23').value;
friendMp[1] = document.getElementById('input25').value;
friendHb[1] = document.getElementById('input23').value;
friendMb[1] = document.getElementById('input25').value;
friendAttack[1] = document.getElementById('input24').value;
document.getElementById("friendName2").innerText = friend[1];
    }
function inputM6 (){
friend[2] = document.getElementById('input27').value;
friendHp[2] = document.getElementById('input26').value;
friendMp[2] = document.getElementById('input32').value;
friendHb[2] = document.getElementById('input26').value;
friendMb[2] = document.getElementById('input32').value;
friendAttack[2] = document.getElementById('input33').value;
document.getElementById("friendName3").innerText = friend[2];
    }
function inputM7 (){
friend[3] = document.getElementById('input28').value;
friendHp[3] = document.getElementById('input29').value;
friendMp[3] = document.getElementById('input30').value;
friendHb[3] = document.getElementById('input29').value;
friendMb[3] = document.getElementById('input30').value;
friendAttack[3] = document.getElementById('input31').value;
document.getElementById("friendName4").innerText = friend[3];
    }
function inputM8 (){
const audio = new Audio(document.getElementById('input34').value);
    }

function Cene8() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editSystem').style.display = 'block';
}

function Cene() {
if(Cenemy > 1) {
Cenemy -= 1;
document.getElementById('Menemy').innerText = Cenemy;
if(Cenemy === 2){
document.getElementById( enemyId[2] ).style.display = 'none';
aiful = 2;
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
document.getElementById('enemydiv3').style.display = 'none';
}
if(Cenemy === 1){
document.getElementById( enemyId[1] ).style.display = 'none';
aiful = 1;
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
document.getElementById('enemydiv2').style.display = 'none';
}
}
}

function Cene2() {
if(Cenemy < 3) {
Cenemy += 1;
document.getElementById('Menemy').innerText = Cenemy;
if(Cenemy === 2){
aiful = 1;
enemyName.splice( aiful,0,"enemy2" );
enemyHp.splice( aiful,0,100 );
enemyId.splice( aiful,0,"enemy2" );
document.getElementById( enemyId[1] ).style.display = 'block';
document.getElementById('enemydiv2').style.display = 'block';
}
if(Cenemy === 3){
aiful = 2;
enemyName.splice( aiful,0,"enemy3" );
enemyHp.splice( aiful,0,100 );
enemyId.splice( aiful,0,"enemy3" );
document.getElementById( enemyId[1] ).style.display = 'block';
document.getElementById( enemyId[2] ).style.display = 'block';
document.getElementById('enemydiv3').style.display = 'block';
}
}
}
var form = document.forms.myform;
var EditT = "enemy";
var file = null

var uri  = null

let key = 0;
        function preview(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy1').src = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview2(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy2').src = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview3(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy3').src = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview4(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[0] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview5(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[1] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview6(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[2] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview7(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[3] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }

function Cene4() {
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('editFriend').style.display = 'block';
}
function Cene3() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
document.getElementById('editSystem').style.display = 'none';
}

function Cene5() {
if(Cfriend > 1) {
Cfriend -= 1;
document.getElementById('Menemy2').innerText = Cfriend;
if(Cfriend < 4)document.getElementById( 'hpmpUI4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'hpmpUI3' ).style.display = 'none';
if(Cfriend < 2)document.getElementById( 'hpmpUI2' ).style.display = 'none';
if(Cfriend < 4)document.getElementById( 'frienddiv4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'frienddiv3' ).style.display = 'none';
if(Cfriend < 2)document.getElementById( 'frienddiv2' ).style.display = 'none';
}
}
function Cene6() {
if(Cfriend < 4) {
Cfriend += 1;
document.getElementById('Menemy2').innerText = Cfriend;
if(Cfriend > 3)document.getElementById( 'hpmpUI4' ).style.display = 'block';
if(Cfriend > 2)document.getElementById( 'hpmpUI3' ).style.display = 'block';
if(Cfriend > 1)document.getElementById( 'hpmpUI2' ).style.display = 'block';
if(Cfriend > 3)document.getElementById( 'frienddiv4' ).style.display = 'block';
if(Cfriend > 2)document.getElementById( 'frienddiv3' ).style.display = 'block';
if(Cfriend > 1)document.getElementById( 'frienddiv2' ).style.display = 'block';
}
}

function Cene7() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
}
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('Menemy').innerText = Cenemy;
document.getElementById('Menemy2').innerText = Cfriend;
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
if(Cfriend < 4)document.getElementById( 'frienddiv4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'frienddiv3' ).style.display = 'none';

function UIview () {
var key_code = event.keyCode;
if(key_code === 69) {
if(UIv === false) {
document.getElementById('editUI').style.display = 'block';
UIv = true;
}else {
document.getElementById('editUI').style.display = 'none';
UIv = false;
}
}
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
      const blob = new Blob([
document.getElementById('input1').value,
"\n" + document.getElementById('input2').value,

"\n" + document.getElementById('input4').value,
"\n" + document.getElementById('input5').value,

"\n" + document.getElementById('input7').value,
"\n" + document.getElementById('input8').value,
"\n" + document.getElementById('input9').value,
"\n" + document.getElementById('input10').value,
"\n" + document.getElementById('input11').value,
"\n" + document.getElementById('input12').value,
"\n" + document.getElementById('input13').value,
"\n" + document.getElementById('input14').value,
"\n" + document.getElementById('input15').value,
"\n" + document.getElementById('input16').value,
"\n" + document.getElementById('input17').value,
"\n" + document.getElementById('input18').value,
"\n" + document.getElementById('input19').value,
"\n" + document.getElementById('input20').value,
"\n" + document.getElementById('input21').value,
"\n" + document.getElementById('input22').value,
"\n" + document.getElementById('input23').value,
"\n" + document.getElementById('input24').value,
"\n" + document.getElementById('input25').value,
"\n" + document.getElementById('input26').value,
"\n" + document.getElementById('input27').value,
"\n" + document.getElementById('input28').value,
"\n" + document.getElementById('input29').value,
"\n" + document.getElementById('input30').value,
"\n" + document.getElementById('input31').value,
"\n" + document.getElementById('input32').value,
"\n" + document.getElementById('input33').value,
"\n" + document.getElementById('input35').value,
"\n" + document.getElementById('input36').value,
"\n" + document.getElementById('input37').value
], { "type" : "text/plain" });

      btn.href = window.URL.createObjectURL(blob);   
    var CreateFolder = new Folder ("/c/sample/"); CreateFolder.create();
})

addEventListener( "keyup", UIview);
