var React=require("react");
var Reflux=require("reflux");
var api_text=require("./api_text.js");

var Showseg=React.createClass({
	openImg:function() {
		this.refs.dictdialog.getDOMNode().classList.add("opened");
		this.refs.closeBtn.getDOMNode().classList.add("opened");	
	},
	closeImg:function() {
		$('img[data-pb="'+this.props.segs.pb+'"]').removeClass("opened");
		$('a[data-pb="'+this.props.segs.pb+'"]').removeClass("opened");
	},
	renderImg: function() {
		
	},
	render:function() {
		var imgName=api_text.getImgName(this.props.segs.pb)
		var img={content:"url(http://res.cloudinary.com/www-dharma-treasure-org/image/upload/lijiang/"+imgName+")"};
		return <div>
			<br></br>
			<a onClick={this.openImg}>{this.props.segs.pb}<img width="25" src="banner/imageicon.png"></img></a>
				<a onClick={this.closeImg} className="pbImg" ref="closeBtn" data-pb={this.props.segs.pb}>Close Image</a><br></br>
				<img onClick={this.closeImg} className="pbImg" ref="dictdialog" data-pb={this.props.segs.pb} style={img}></img>
			<div dangerouslySetInnerHTML={{__html:this.props.segs.text}}></div>
      	</div>
	}
});

module.exports=Showseg;