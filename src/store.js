var Reflux=require("reflux");
var React=require("react");
var actions=require("./actions");
var kde=require("ksana-database");  // Ksana Database Engine

var store=Reflux.createStore({
	listenables:actions //讓action.js內的add自動綁定這裡的onAdd, clear自動綁定onClear
	,db:[]
	,genToc:function(texts,depths,voffs){
		var toc=[{depth:0,text:"འཇང་བཀའ་འགྱུར།"}];
		for(var i=0; i<texts.length; i++){
		  toc.push({text:texts[i],depth:depths[i],voff:voffs[i]});
		}
		this.trigger(toc);
		return toc; 
	}
	,onReady:function(usage,quota) {
		var that=this;
		if (this.db.length == 0) kde.open("jiangkangyur",function(a,db){
			that.trigger(db);  
		    db.get([["fields","head"],["fields","head_depth"],["fields","head_voff"]],function(){
		      var heads=db.get(["fields","head"]);
		      var depths=db.get(["fields","head_depth"]);
		      var voffs=db.get(["fields","head_voff"]);
		      var toc=this.genToc(heads,depths,voffs);
		      this.toc=toc;		 
		    }); //載入目錄
		},this);    
		
		//this.trigger(this.db); 
		//this.setState({dialog:false,quota:quota,usage:usage});
	}

});

module.exports=store;