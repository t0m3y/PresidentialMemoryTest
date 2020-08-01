$(document).ready(function () {
	
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
		 

		 
		 
		 


			questionBank=new Array;
			questionBank=[
				["Which President has been impeached?","Trump","Bush Jr","Obama"],
				["Which President's inaction has killed over 150,000 US Citizens?","Trump","Obama","Bush Sr"],
				["Which President brags about taking a memory test?","Trump", "Woman","Uh"],
				["Which President tear gassed peaceful protestors for a photo op?","Trump", "Truman","Reagan"],
				["Which President claimed more white Americans were killed by police than black Americans?","Trump", "Obama","Nixon"],
				["Which President has tried to dissuade voters from selecting his opponent because TV ratings would drop?","Trump", "FDR","Kennedy"],
				["Which President violated the emoluments clause by using the Oval Office to promote a specific brand of canned food products?","Trump", "Obama","Nixon"]
			]

		 numberOfQuestions=questionBank.length; 
		
		 
		displayQuestion();

 

 



function displayQuestion(){
 var rnd=Math.random()*3;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;

if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}

$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');

 $('.option').click(function(){
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){
   $(stage).append('<div class="feedback1">CORRECT</div>');
   score++;
   }
  //wrong answer	
  if(this.id!=rnd){
   $(stage).append('<div class="feedback2">WRONG</div>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}//display question

	
	
	
	
	
	function changeQuestion(){
		
		questionNumber++;
	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the test!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'<br>Score: '+Math.trunc(score/numberOfQuestions*100)+'</div>');
		
	}//display final slide
	
	
	
	
	
	
	
	});//doc ready