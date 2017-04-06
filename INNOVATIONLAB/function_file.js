function close_sub_win(input) {
	//hide all mainpage_pop_up
	if(input== null){
		var x = document.getElementsByClassName("mainpage_pop_up");
		for(var i=0;i<x.length;i++){
		x[i].style.display="none";
		}
	}
	else{
		var y = document.getElementById(input);
		y.className="mainpage_pop_up animate-fading";
		setTimeout(function() {y.style.display="none";},400);
	}
}


function open_page(input){
	var x = input;
	close_sub_win();
	var d= document.getElementById(x);
	d.className = "mainpage_pop_up animate-in";
	d.style.display="block";
	/*document.getElementById(x).style.display="block";*/
}



function log_in(){
	//this function in charge of log in,  not opening the log in page.
	
	close_sub_win("Login");
	


	//hide register button & log in button
	document.getElementById("top_bar_1").style.display="none";
	document.getElementById("top_bar_2").style.display="none";
	//show log out
	document.getElementById("top_bar_3").style.display="block";
	
	//login variable = ture. 
	localStorage.setItem("log_in_statute", "true");
	// get user name
	
	//welcome back user, click on my page.
	
	if(localStorage.getItem("log_in_statute")=="true")
	{
		//display something
		document.getElementById("my_page").innerHTML="Welcome Back";

		
	}
}

function log_out(){
	//login variable = false. 
	localStorage.setItem("log_in_statute", "false");
	//show log in and register button
	document.getElementById("top_bar_1").style.display="block";
	document.getElementById("top_bar_2").style.display="block";
	//hide log out
	document.getElementById("top_bar_3").style.display="none";
	
	document.getElementById("my_page").innerHTML="My Page";
}

function op_emergency_page(){
}


	function test1()
{
	document.getElementById("top_bar_1").innerHTML = "aaabbb";
}

function test2()
{	
	var x =
	document.getElementById("top_bar_2").innerHTML = "aacccbbb";
}


function change_content_test()
{
document.getElementById('Save_info').style.display= 'block' ;
//ID need to be defined 1st, then the js function can change the script. 
//hence this function need to be called at the end.

}



/*function clear_sub_page()
{
	document.getElementById("save_info").onclick =function clear();
	
	
}*/


function clear(){
	document.getElementById("top_bar_1").innerHTML = "aaa";
}

/*************************************************************************welcome Page Function*********/
function welcome_page_function(x){
	var b=x+1
	/* look for the open window*/
	document.getElementById('p'+x).style.display="none";	
	document.getElementById('p'+b).style.display="block";
		
}
	

	
	


