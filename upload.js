// JavaScript Document
function handler(){
	  var Inputfile = document.getElementById("upload_img");
	  
	  var data = new FormData();
	  if(Inputfile.files.length < 1){
		     alert("please select image to be uploaded");
		  }
	else{ 
		 data.append('img',Inputfile.files[0]);
   
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		  if(xmlhttp.responseText == "uploaded"){
				window.location = "notes_body.html#log_chat"; 
			  }
		 
		 }
                                        };
			xmlhttp.open('POST','image_upload.php',true);
			xmlhttp.setRequestHeader('cache-control','no-cache');
			xmlhttp.send(data);
	  }
	  
		return false;	
	}
function log_in_validate(){
	
	   var user_name = document.querySelector("#username_1").value;
	   var password = document.querySelector("#password_1").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&password="+password+"&val="+validator;
	
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		    if(xmlhttp.responseText== "pass"){
				     getUser(); chatting();
		              window.location = "notes_body.html#chat";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','log_in.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	  
	  
		return false;	
	}
	
function add(){
	  
	   var user_name = document.querySelector("#username_3").value;
	   var phone_number = document.querySelector("#mobile_3").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&mobile="+phone_number+"&val="+validator;
	
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
              chatting();
			  document.querySelector("#username_3").value = "";
				document.querySelector("#mobile_3").value = "";
		    if(xmlhttp.responseText== "pass"){
				
				phone_number = "";
		              window.location = "notes_body.html#chat";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','inbox_add.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	  
	  
		return false;	
	}
	
function log_in_publish_validate(){
	
	   var user_name = document.querySelector("#username_2").value;
	   var password = document.querySelector("#password_2").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&password="+password+"&val_="+validator;
	
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		    if(xmlhttp.responseText== "pass"){
				       document.querySelector("#username_2").value = "";
	                   document.querySelector("#password_2").value = "";
		              window.location = "notes_body.html#body_admin_publish";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','log_in.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	  
	  
		return false;	
	}
	
		
function log_out_validate(){
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		  document.querySelector("#username_1").value = "";
	             document.querySelector("#password_1").value = "";
				  document.querySelector("#username_2").value = "";
	              document.querySelector("#password_2").value = "";
		    if(xmlhttp.responseText== "pass"){
		              window.location = "notes_body.html#enter";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
xmlhttp.open('GET','log_out.php',true);
xmlhttp.send();
	  
	  
		return false;	
	}              