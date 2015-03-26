var React=require("react");
var Reflux=require("reflux");

var Showseg=React.createClass({
	render:function() {
		return <div>
			{this.props.segs.pb}<br></br>
			<div dangerouslySetInnerHTML={{__html:this.props.segs.text}}></div>
      	</div>
	}
});

module.exports=Showseg;