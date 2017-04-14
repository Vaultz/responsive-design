var submenu = document.getElementById('sub-menu3');

var allInputs = document.getElementsByTagName('input');
var allpolygone = document.querySelectorAll('span.select');
for (var i = 0; i < allInputs.length; i++) {
       allInputs[i].addEventListener('change', Checked);
}
for (var i = 0; i < allpolygone.length; i++) {
       allpolygone[i].addEventListener('click', Checked);
}

function Checked(){

  var size_global =0;
  for (var i = 0; i < allInputs.length; i++) {
    if(allInputs[i].checked==true){
      size_global = size_global + parseInt(allInputs[i].dataset.size);
    }
  }

  var parent_menu = this.parentNode.parentNode;
  if(parent_menu.className=="sub-menu"){
    var sameInput = parent_menu.querySelectorAll("input");
    var count=0;
    var polyDropDownParent = parent_menu.parentNode.querySelector("svg.polygone-drop-down");
    var barDropDownParent= parent_menu.parentNode.querySelector("svg.bar");
    var arrowDropDownParent= parent_menu.parentNode.querySelector("svg.arrow-drop-down");

    for (var i = 0; i < sameInput.length; i++) {
       if(sameInput[i].checked==true){
          count++;
        }
    }
    if(count>0){
      polyDropDownParent.style.opacity = 0.39;
      barDropDownParent.style.display = 'block';
      arrowDropDownParent.style.display = 'none';
    }
    else if (count==0) {
      polyDropDownParent.style.opacity = 0.39;
      barDropDownParent.style.display = 'none';
      arrowDropDownParent.style.display = 'none';
    }
    if(count==sameInput.length){
      polyDropDownParent.style.opacity = 1;
      barDropDownParent.style.display = 'none';
      arrowDropDownParent.style.display = 'block';
    }
  }

  if(parent_menu.className=="liDropDown"){
    var inputCalc = parent_menu.querySelectorAll("input");
    for (var i = 0; i < inputCalc.length; i++) {
      size_global = size_global + parseInt(inputCalc[i].dataset.size);
    }
    var polyCalc = this.querySelector('svg.polygone-drop-down');
    if(polyCalc.style.opacity==1){
      for (var i = 0; i < inputCalc.length; i++) {
        size_global = size_global - parseInt(inputCalc[i].dataset.size) - parseInt(inputCalc[i].dataset.size);
        console.log(size_global);
      }
    }
  }

  if(size_global==0){
    size_global="";
  }
  else if(size_global>999){
    size_global= parseFloat(size_global)/1000;
    size_global= size_global+"Mo";
  }
  else{
    size_global= size_global+"Ko";
  }
  document.getElementById('size_total').innerHTML = size_global;
}



var select = document.getElementsByClassName('select-drop-down');
for (var i = 0; i < select.length; i++) {
  select[i].addEventListener('click',  allChecked);
}

function allChecked(){

  var polygone = this.querySelector("svg.polygone-drop-down");
  var barDropDown = this.querySelector("svg.bar");
  var arrowDropDown = this.querySelector("svg.arrow-drop-down");

  var parent = this.parentNode.parentNode;
  var inputs = parent.querySelectorAll('input');

  if(polygone.style.opacity!='1'){
      polygone.style.opacity = 1;
      barDropDown.style.display = 'none';
      arrowDropDown.style.display = 'block';
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked=true;
      }
  }
  else{
      polygone.style.opacity = 0.39;
      barDropDown.style.display = 'none';
      arrowDropDown.style.display = 'none';
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked=false;
      }
  }
}

var liDropDown = document.getElementsByClassName('liDropDown');
for (var i = 0; i < liDropDown.length; i++) {
  liDropDown[i].addEventListener('click',  dropdown);
}

function dropdown(){
  var sub_menu = this.querySelector('ul');
  var chevron= this.querySelector('span.chevron');

  if(sub_menu.style.display=='block'){
    sub_menu.style.display = 'none';
    chevron.className = "chevron";
  }
  else{
    sub_menu.style.display = 'block';
    chevron.className = "chevron arrow-down";
  }
}
