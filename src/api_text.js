var kse=require("ksana-search"); // Ksana Search Engine (run at client side)
var kde=require("ksana-database");  // Ksana Database Engine
// var jPedurma=require("./jPedurma");
// var dPedurma=require("./dPedurma");
// var hPedurma=require("./hPedurma");
// var mappings={"J":jPedurma,"D":dPedurma,"H":hPedurma};
var DATABASE;
// kde.open("jiangkangyur",function(a,db){
// 	DATABASE = db;
// },this);    
var getImgName = function(volpage) {
    var p=volpage.split(".");
    var v="000"+p[0];
    var vol=v.substr(v.length-3,v.length);
    var pa="000"+p[1].substr(0,p[1].length-1);
    var page=pa.substr(pa.length-3,pa.length);
    var side=p[1].substr(p[1].length-1);

    return vol+"/"+vol+"-"+page+side;
}



module.exports={getImgName:getImgName};