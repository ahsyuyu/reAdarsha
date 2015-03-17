var React=require("react");
var actions=require("./actions");
var Textcontrollbar=React.createClass({
	renderSideMenuButton: function(){
		return "hide menu btn";
	},
	getAddress: function(){

	},
	render:function() {
		return <div className="controlbar">
      		{this.renderSideMenuButton()}            
            <button className="btn btn-default" title="Previous File" onClick={this.props.prev}><img width="20" src="./banner/prev.png"/></button>
            <button className="btn btn-default" title="Next File" onClick={this.props.next}><img width="20" src="./banner/next.png"/></button>

            <button className="btn btn-default right" title="Contact Us"><a href="http://www.dharma-treasure.org/en/contact-us/" target="_new"><img width="20" src="./banner/icon-info.png"/></a></button>
            <button className="btn btn-default right" title="Toggle Wylie Transliteration" onClick={this.props.setwylie}><img width="20" src="./banner/icon-towylie.png"/></button>

            <button className="btn btn-default right" title="Increase Font Size" onClick={this.increasefontsize}><img width="20" src="./banner/increasefontsize.png"/></button>
            <button className="btn btn-default right" title="Decrease Font Size" onClick={this.decreasefontsize}><img width="20" src="./banner/decreasefontsize.png"/></button>
            <br/>
            <br/><span id="address" dangerouslySetInnerHTML={{__html:this.getAddress()}}></span>
      	</div>
	}
});

module.exports=Textcontrollbar;