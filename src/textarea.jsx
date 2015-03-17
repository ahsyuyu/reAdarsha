var React=require("react");
var actions=require("./actions");
var Textcontrollbar=require("./textcontrollbar.jsx");
var Showtext=require("./showtext.jsx");

var Textarea=React.createClass({
render:function() {
		return <div>
      		<Textcontrollbar />
      		<Showtext />
      	</div>
	}
});

module.exports=Textarea;