var React=require("react");
var Reflux=require("reflux");
var actions=require("./actions");
var store_text=require("./store_text");
var Textcontrollbar=require("./textcontrollbar.jsx");
var Showtext=require("./showtext.jsx");

var Textarea=React.createClass({
	mixins:[Reflux.listenTo(store_text,"onStore")],
	onStore: function(data){
		console.log(data);
    },
	render:function() {
		return <div>
      		<Textcontrollbar />
      		<Showtext />
      	</div>
	}
});

module.exports=Textarea;