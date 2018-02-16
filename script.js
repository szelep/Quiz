
$(document).on('click',"input[type='radio']",function () {
	startSurvey(sex);
	
});


	
$(document).on('click',".btn-quiz",function () {
	var dt = $(this).data('gn');
	$(".set_sex").animate({opacity : 0}, 200, function () { $(this).hide(); startSurvey(dt) })	
});


$(document).on('click',"button#replay",function () {
	getSex();
	
});
var sex;
function getSex(){
	$(".set_sex").show();
	replay();
	$("#output").html('<div><p class="welcometitle">Check which actor or actress you are!</p><div class="set_sex">Pick your gender: <br><button class="btn-quiz" data-gn="1"><p>Male</p></button> <button class="btn-quiz" data-gn="2"><p>Female</p></button></div></div>')
}

function replay(){
	current = 0;
	$('#output').html('');
}

function guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + '-' + s4();
	}

	var scores_quiz;
	var top_score;
	var top_key_q;
	
	function count(){
		scores_quiz = [];
		$("input[type='radio']:checked").each(function (i,e){
			if(scores_quiz[e.value] == undefined){
				scores_quiz[e.value] = 1;
			} else{
				scores_quiz[e.value] = scores_quiz[e.value]+1;
			}

		})
			
		top_score = 0;
		top_key_q = 0;
		
		for(i=0;i<Object.keys(scores_quiz).length;i++){
			if(scores_quiz[Object.keys(scores_quiz)[i]] > top_score){
				top_score = scores_quiz[Object.keys(scores_quiz)[i]];
				top_key_q = Object.keys(scores_quiz)[i];
			}
		}
		
		finishSurvey();
		
	}

	
	function finishSurvey(){
		e = (sex == 1? 1 : 2);
		var val = getType(top_key_q,e).toString();
		var image = getImage(top_key_q,e);
		var desc = description(top_key_q,e);
		$('#output').html('<div class="q_score"><span class="result_title">You are like '+val+'</span><div style="display: inline-block"><img src="'+image+'" /></div><div class="description">'+desc+'</div><button id="replay" class="btn-quiz"><p>Replay</p></button></div>')
		//percent();
		$('.q_score').animate({opacity: 1},400)
		if($('html').hasClass('html-ie')){
			$('.q_score').css('opacity',1);
		}
	}
	
	function description(key,e){
	
	var f;
	
	if(e == 1)
		{
			f = ['description','description','description','description','description']
	
		} else if(e == 2)
		
		{
			f = ['description','description','description','description']
		}
	
		return f[key];
	}
	
	function getImage(key,e){
		
		var folder = '/files/'; // folder with photos of actors
		
		if(e == 1){
			switch(key){
				case '0' : return folder+'Gosling.png';
				case '1' : return folder+'Brosnan.png';
				case '2' : return folder+'clooney.png';
				case '3' : return folder+'Leo.png';
				case '4' : return folder+'ford.png';
			}
		
		} else if(e == 2){
			switch(key){
				case '0' : return folder+'merlin.png';
				case '1' : return folder+'lawrence.png';
				case '2' : return folder+'roberts.png';
				case '3' : return folder+'angelina.png';
			}
		}
	}
	
	function getType(e,g){
	
		if(g == 1 ){
			switch(e){
				case '0' : return 'Ryan Gosling';
				case '1' : return 'Pierce Brosnan';
				case '2' : return 'Goerge Clooney';
				case '3' : return 'Leonardo DiCaprio';
				case '4' : return 'Harrison Ford';
			}
		} else if(g == 2){
			switch(e){
				case '0' : return 'Marylin Monroe';
				case '1' : return 'Jeniffer Lawrence';
				case '2' : return 'Julia Roberts';
				case '3' : return 'Angelina Jolie';
				}
		}
	}
	
	var current = 0;
	var guids = [];
	var questions = [ //0 man , 1 woman
		[
			{
				title: 'What is your favourite movie?',
				ans: ['Musical','Action','Drama','Horror','Sci-Fi']
			},
			 {
				title: 'What do you like to eat?',
				ans: ['Pizza','Burger','Onions','Grass','Apple']
			},
			{
				title: 'Pick your country',
				ans: ['Poland','Germany','Hungary','USA','UK']
			},
			{
				title: 'Your favourite music',
				ans: ['Dubstep','Vocal','Random','Street','House']
			},
			{
				title : 'Car which you want',
				ans: ['Ford','Ferrari','Audi','Nissan','Hyundai']
			},
			{
				title : 'Color you like',
				ans: ['Blue','Yellow','Purple','Green','Black']
			},
			{
				title : 'Which animal is most friendly for you?',
				ans: ['Mouse','Horse','Fly','Frog','Dog']
			}
		],
		[
			{
				title: 'What is your favourite movie?',
				ans: ['Musical','Action','Drama','Horror']
			},
			 {
				title: 'What do you like to eat?',
				ans: ['Pizza','Burger','Onions','Grass']
			},
			{
				title: 'Pick your country',
				ans: ['Poland','Germany','Hungary','USA']
			},
			{
				title: 'Your favourite music',
				ans: ['Dubstep','Vocal','Random','Street',]
			},
			{
				title : 'Car which you want',
				ans: ['Ford','Ferrari','Audi','Nissan']
			},
			{
				title : 'Color you like',
				ans: ['Blue','Yellow','Purple','Green']
			},
			{
				title : 'Which animal is most friendly for you?',
				ans: ['Mouse','Horse','Fly','Frog']
			}

		]
	]
	
	function startSurvey(g){

	sex = g;

	

	var q_length = (sex == 1? questions[0].length : questions[1].length);

		if(current == q_length)
		{

		$(".welcometitle, #elfme3, #"+guids[0]).animate({opacity: 0},500, function () { 
			$(this).hide();
			count()
		})
		
		return false;
		
		} else 
		{ 
			$("#"+guids[0]).animate({opacity: 0},500).hide();
		}	
	guids = [];	
		var id = guid();
		guids.push(id);
		$("#output").append('<div class="q_div" id="'+id+'"></div>');
		
		appendQuestions(current,id);
		$('#'+id).show().animate({opacity : 1},500);
	}
	
	
	function appendQuestions(e,id){

		var available = [];
		var q_length = (sex == 1? questions[0][e].ans.length : questions[1][e].ans.length);
		
		$('#'+id).append('<div class="q_title">'+(sex == 1? questions[0][e].title : questions[1][e].title)+'</div');

		roll:
		for(;;){
			
			var rand = Math.floor(Math.random()*q_length);
			if(available.indexOf(rand) == '-1'){
				available.push(rand);
				var item = (sex == 1? questions[0][e].ans[rand] : questions[1][e].ans[rand]);
				$('#'+id).append('<label class="an_lb"><input class="answer_radio" type="radio" name="'+id+'_'+e+'" value="'+rand+'" />'+item+'</label>');
			}
			
			if(available.length == q_length){ break roll; }
			
		}
	current++;
	}
