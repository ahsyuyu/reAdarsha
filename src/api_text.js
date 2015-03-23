var kse=require("ksana-search"); // Ksana Search Engine (run at client side)
var kde=require("ksana-database");  // Ksana Database Engine
var DATABASE;
kde.open("jiangkangyur",function(a,db){
	DATABASE = db;
},this);    

var showText=function(input,toc){
	var res=DATABASE.fileSegFromVpos(toc[input].voff);
	return res;
}

// var showPage=function(){
	
// }

module.exports={showText:showText};