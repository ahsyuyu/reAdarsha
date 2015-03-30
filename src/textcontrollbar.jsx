var React=require("react");
var actions_text=require("./actions_text");
var Resizefontbtn=require("./resizefontbtn.jsx");
var Showaddress=require("./showaddress.jsx");

var Textcontrollbar=React.createClass({
  renderSideMenuButton: function(){
    return <button className="btn btn-default" title="Hide Side Menu" onClick={this.hideMenu}><img width="20" src="./banner/hidemenu.png"/></button>
  },
  hideMenu: function(){
    actions_text.hideMenu();
  },
  goPrevFile: function() {
    actions_text.prevFile();
  },
  goNextFile: function() {
    actions_text.nextFile();
  },
  render:function() {
	return <div className="controlbar inline">
		  {this.renderSideMenuButton()}            
      <button className="btn btn-default" title="Previous File" onClick={this.goPrevFile}><img width="20" src="./banner/prev.png"/></button>
      <button className="btn btn-default" title="Next File" onClick={this.goNextFile}><img width="20" src="./banner/next.png"/></button>
      <div className="rightControlbar inline">      
        <Resizefontbtn />
        <button className="btn btn-default right" title="Toggle Wylie Transliteration" onClick={this.props.setwylie}><img width="20" src="./banner/icon-towylie.png"/></button>
        <a href="http://www.dharma-treasure.org/en/contact-us/" target="_new"><button className="btn btn-default right" title="Contact Us"><img width="20" src="./banner/icon-info.png"/></button></a>
      </div>
      <Showaddress />
	</div>
  }
});

module.exports=Textcontrollbar;