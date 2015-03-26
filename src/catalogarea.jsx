var React=require("react");
var Reflux=require("reflux");
var actions_text=require("./actions_text");
var Stacktoc=require("ksana2015-stacktoc").component;  //載入目錄顯示元件
var store_text=require("./store_text");
var Searcharea=require("./searcharea.jsx");

var Catalogarea=React.createClass({
  showText:function(n) {
    var res=this.props.db.fileSegFromVpos(this.props.toc[n].voff);
    if(res.file != -1) actions_text.showPage(res.file,res.seg); //this.showPage(res.file,res.seg);
    //this.setState({dataN:n});    
    console.log(res);
  },
	render:function() {
		return <div>
          <Stacktoc className="stacktoc" textConverter={this.textConverter} showText={this.showText} showExcerpt={this.showExcerpt} 
          opts={{tocbar:"banner/bar.png",tocbar_start:"banner/bar_start.png",stopAt:"་",
          maxitemlength:42,tocstyle:"vertical_line"}}
          data={this.props.toc} />
      	</div>;
	}
});

module.exports=Catalogarea;