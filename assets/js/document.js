var submenu = document.getElementById('sub-menu');
var inputs = submenu.getElementsByTagName('input');

document.getElementById('dropdown').addEventListener('click', allChecked);

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(e) {
        Checked();
    });
}


function Checked(){

  var count=0;

  for (var i = 1; i < 6; i++) {
    if(document.getElementById('sub-menu__drop-menu'+i).checked==true){
      count++;
    }
  }
  if(count>0){
    document.getElementById('polygone-drop-down').style.opacity = 0.39;
    document.getElementById('bar-drop-down').style.display = 'block';
    document.getElementById('arrow-drop-down').style.display = 'none';
  }
  else if (count==0) {
    document.getElementById('polygone-drop-down').style.opacity = 0.39;
    document.getElementById('bar-drop-down').style.display = 'none';
    document.getElementById('arrow-drop-down').style.display = 'none';
  }
  if(count==5){
    document.getElementById('arrow-drop-down').style.display = 'block';
    document.getElementById('polygone-drop-down').style.opacity = 1;
    document.getElementById('bar-drop-down').style.display = 'none';
  }
}

function allChecked(){
  if(document.getElementById('drop-menu3').checked==false){
    document.getElementById('arrow-drop-down').style.display = 'block';
    document.getElementById('polygone-drop-down').style.opacity = 1;
    document.getElementById('bar-drop-down').style.display = 'none';
    for (var i = 1; i < 6; i++) {
      document.getElementById('sub-menu__drop-menu'+i).checked=true;
      }
  }
  else{
    document.getElementById('polygone-drop-down').style.opacity = 0.39;
    document.getElementById('bar-drop-down').style.display = 'none';
    document.getElementById('arrow-drop-down').style.display = 'none';
    for (var i = 1; i < 6; i++) {
      document.getElementById('sub-menu__drop-menu'+i).checked=false;
      }
  }
}
