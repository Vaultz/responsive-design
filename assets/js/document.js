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
  }
  if(count==5){
    document.getElementById('arrow-drop-down').style.display = 'block';
    document.getElementById('polygone-drop-down').style.opacity = 1;
    document.getElementById('bar-drop-down').style.display = 'none';
  }
}
