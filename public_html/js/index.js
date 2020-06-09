var ques, score = 0, pos =0; //initialization of the variables
ques = [
//Array of questions with their answers
	["dv1", "rd1"],
	["dv2", "rd7"],
	["dv3", "rd10"]
];

//displays the first question
nextques();

//It is programmed for functioning proceed button
function nextques(){
	
	//hides the correct statement
	document.getElementById("correct").style.display = "none";
	
	//hides the wrong statement
	document.getElementById("wrong").style.display = "none";
	
	//conditions for proceeding the questions
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

//It is programmed for functioning of Enter button
function check(){
	
	//disappears the selected question
	document.getElementById(ques[pos][0]).style.display = "none";
	
	//conditions for answers to be correct or incorrect
	if(document.getElementById(ques[pos][1]).checked){
            
		document.getElementById("correct").style.display = "block";
		score++;
		console.log(score);
                
	}else{
		
		document.getElementById("wrong").style.display = "block";
	}
	pos ++;
}

//It is programmed for functioning of Restart button
function restart(){

//reset the score and position variables    
	score = 0;
	pos =0;
	
	//disappears the last question, correct, wrong and score statements
	document.getElementById("dv3").style.display = "none";
	document.getElementById("correct").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	document.getElementById("score").style.display = "none";
	
	//displays the first question again
	document.getElementById(ques[0][0]).style.display = "block";
	
}