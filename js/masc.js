function formataFone(evt){
	vr = (navigator.appName == 'Netscape')?evt.target.value:evt.srcElement.value;
	if(vr.length == 0) vr = vr+"(";
	if(vr.length == 3) vr = vr+") 9 ";
	if(vr.length == 11) vr = vr+"-";
  return vr;
}

function formataFone2(evt2){
	vr2 = (navigator.appName == 'Netscape')?evt2.target.value:evt2.srcElement.value;
	if(vr2.length == 0) vr2 = vr2+"(";
	if(vr2.length == 4) vr2 = vr2+") ";
	if(vr2.length == 10) vr2 = vr2+"-";
  return vr2;
}