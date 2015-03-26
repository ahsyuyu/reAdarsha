var Reflux=require("reflux");
var React=require("react");
var actions_text=require("./actions_text");
var kde=require("ksana-database");  // Ksana Database Engine
var kse=require("ksana-search"); // Ksana Search Engine (run at client side)

var store_text=Reflux.createStore({
	listenables:actions_text, //讓action.js內的add自動綁定這裡的onAdd, clear自動綁定onClear
	file:0,
	page:0,
	onShowPage:function(f,p,tofind){
		// window.location.hash = this.encodeHashTag(f,p);
		var that=this;
		kde.open("jiangkangyur",function(a,db){
			kse.highlightFile(db,f,{q:tofind,token:true},function(data){
		      //that.setState({bodytext:data,page:p});
		      that.trigger(data.text);
		      that.file=f;
		      that.page=p;
		    });
		},this);
	},
	onPrevFile: function(){
		var file=this.file-1;
		var page=this.page || 1;
		if(file<0) file=0;
		this.onShowPage(file,page);
	},
	onNextFile: function() {
		var file=this.file+1;
		var page=this.page || 1;
		this.onShowPage(file,page);	
	}

});

module.exports=store_text;