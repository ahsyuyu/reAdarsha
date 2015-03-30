var React=require("react");
var actions_text=require("./actions_text");

var Textcontrollbar=React.createClass({
  renderSideMenuButton: function(){
    return "hide menu btn";
  },
  getAddress: function(){

  },
  goPrevFile: function() {
    actions_text.prevFile();
  },
  goNextFile: function() {
    actions_text.nextFile();
  },
  increasefontsize:function() {
    var fontsize=parseFloat($(".pagetext").css("font-size"));
    fontsize=fontsize*1.1;
    if (fontsize>40) return;
    $(".pagetext").css("font-size",fontsize+"px")
                  .css("line-height",(fontsize*1.7)+"px");
  },
  decreasefontsize:function() {
    var fontsize=parseFloat($(".pagetext").css("font-size"));
    fontsize=fontsize/1.1;
    if (fontsize<12) return;
    $(".pagetext").css("font-size",fontsize+"px")
    .css("line-height",(fontsize*1.7)+"px");
  },
  render:function() {
	return <div className="controlbar">
		{this.renderSideMenuButton()}            
      <button className="btn btn-default" title="Previous File" onClick={this.goPrevFile}><img width="20" src="./banner/prev.png"/></button>
      <button className="btn btn-default" title="Next File" onClick={this.goNextFile}><img width="20" src="./banner/next.png"/></button>

      <a href="http://www.dharma-treasure.org/en/contact-us/" target="_new"><button className="btn btn-default right" title="Contact Us"><img width="20" src="./banner/icon-info.png"/></button></a>
      <button className="btn btn-default right" title="Toggle Wylie Transliteration" onClick={this.props.setwylie}><img width="20" src="./banner/icon-towylie.png"/></button>

      <button className="btn btn-default right" title="Increase Font Size" onClick={this.increasefontsize}><img width="20" src="./banner/increasefontsize.png"/></button>
      <button className="btn btn-default right" title="Decrease Font Size" onClick={this.decreasefontsize}><img width="20" src="./banner/decreasefontsize.png"/></button>
      <br/>
      <br/><span id="address" dangerouslySetInnerHTML={{__html:this.getAddress()}}></span>
	</div>
  }
});

module.exports=Textcontrollbar;