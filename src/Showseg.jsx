var React=require("react");
var Reflux=require("reflux");
var api_text=require("./api_text.js");

var Showseg=React.createClass({
	openImg:function() {
		this.refs.dictdialog.getDOMNode().classList.add("opened");
		console.log(this.props.segs.pb);
	},
	closeImg:function() {
		$("span[vpos]").removeClass("scrolled");
	},
	// renderImg: function(pb) {
	// 	console.log(this.props.segs.pb);
	// },
	renderPb:function(pb) {
		return <div>
			<a onClick={this.openImg}>{pb}<img width="25" src="banner/imageicon.png"></img></a>
		</div>
	},
	render:function() {
		var linkedPb=this.renderPb(this.props.segs.pb);
		//console.log(api_text.getImgName(this.props.segs.pb));   //className={"pbImg"+opened}
		return <div>
			<br></br>{linkedPb}
		    <div className="pbImg" ref="dictdialog">
			    <a href="#" onClick={this.closeDialog} 
			      title="Close" className="modalClose"> X </a>      
			    
		    </div>
			<div dangerouslySetInnerHTML={{__html:this.props.segs.text}}></div>
      	</div>
	}
});

module.exports=Showseg;