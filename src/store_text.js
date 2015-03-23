var Reflux=require("reflux");
var React=require("react");
var actions=require("./actions");
var kde=require("ksana-database");  // Ksana Database Engine
var kse=require("ksana-search"); // Ksana Search Engine (run at client side)

var store=Reflux.createStore({
	listenables:actions //讓action.js內的add自動綁定這裡的onAdd, clear自動綁定onClear
	,onShowPage:function(f,p,tofind){
		// window.location.hash = this.encodeHashTag(f,p);
		kde.open("jiangkangyur",function(a,db){
			kse.highlightFile(db,f,{q:tofind,token:true},function(data){//kde
		      //that.setState({bodytext:data,page:p});
		      //this.trigger(data);
		      console.log(data);
		    });
		},this);

	}

});

module.exports=store;