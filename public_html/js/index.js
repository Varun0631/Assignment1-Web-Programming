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

function check(){
	
	document.getElementById(ques[pos][0]).style.display = "none";
	if(document.getElementById(ques[pos][1]).checked){
            
		document.getElementById("correct").style.display = "block";
		score++;
		console.log(score);
                
	}else{
		document.getElementById("wrong").style.display = "block";
	}
	pos ++;
}

function restart(){
    
	score = 0;
	pos =0;
	document.getElementById("dv3").style.display = "none";
	document.getElementById("correct").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	document.getElementById("score").style.display = "none";
	
	document.getElementById(ques[0][0]).style.display = "block";
	
}

