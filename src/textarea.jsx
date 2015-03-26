var React=require("react");
var Reflux=require("reflux");
var actions_text=require("./actions_text");
var store_toc=require("./store_toc");
var store_text=require("./store_text");
var Textcontrollbar=require("./textcontrollbar.jsx");
var Showtext=require("./showtext.jsx");

var Textarea=React.createClass({

	render:function() {
		return <div>
      		<Textcontrollbar />
      		<Showtext/>
      	</div>
	}
});

module.exports=Textarea;