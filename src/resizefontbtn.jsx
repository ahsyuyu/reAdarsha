var React=require("react");
var Reflux=require("reflux");
var Resizefontbtn = React.createClass({
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
  render: function() {   
   return <div className="inline">
            <button className="btn btn-default right" title="Increase Font Size" onClick={this.increasefontsize}><img width="20" src="./banner/increasefontsize.png"/></button>
            <button className="btn btn-default right" title="Decrease Font Size" onClick={this.decreasefontsize}><img width="20" src="./banner/decreasefontsize.png"/></button>
          </div>
  }  
});
module.exports=Resizefontbtn;