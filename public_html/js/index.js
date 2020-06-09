var ques, score = 0, pos =0;
ques = [
	["dv1", "rd1"],
	["dv2", "rd7"],
	["dv3", "rd10"]
];

nextques();
function nextques(){
	document.getElementById("correct").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	if(pos <3){
		document.getElementById(ques[pos][0]).style.display = "block";
	if(pos >0){
		document.getElementById(ques[pos -1][0]).style.display = "none";
		}	
	}
	else{
		document.getElementById('s').textContent = score;
		document.getElementById('score').style.display = "block";
	}
}
