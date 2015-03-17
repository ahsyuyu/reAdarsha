var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions //讓action.js內的add自動綁定這裡的onAdd, clear自動綁定onClear
	,data:[]
	,onAdd:function(item) {
		this.data.push({name:item,done:false});
		this.trigger(this.data); //告訴大家data有更動
	}
	,onClear:function() {
		this.data=[];
		this.trigger(this.data);
	}
	,onToggleDone:function(idx){
		this.data[idx].done=!this.data[idx].done;
		this.trigger(this.data);
	}
	,onClearDone:function() {
		this.data=this.data.filter(function(item){
			return !item.done;
		});
		this.trigger(this.data);
	}
	// ,onGetNumOfLeftItem:function() {
	// 	var c=0;
	// 	this.data.map(function(item){
	// 		if(!item.done) c++;
	// 	});
	// 	this.counter=c;
	// 	console.log(c);
	// 	this.trigger(this.counter);
	// }
});

module.exports=store;