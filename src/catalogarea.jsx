var React=require("react");
var Reflux=require("reflux");
var actions=require("./actions");
var Stacktoc=require("ksana2015-stacktoc").component;  //載入目錄顯示元件
var store_toc=require("./store_toc");
var Searcharea=require("./searcharea.jsx");

var Catalogarea=React.createClass({
  mixins:[Reflux.listenTo(store_toc,"onStore")],
  getInitialState: function() {
    return {toc:""};
  },
  onStore: function(data){
    if(data.length) this.setState({toc:data});
    else this.setState({db:data});
  },
  showText:function(n) {
    var res=this.state.db.fileSegFromVpos(this.state.toc[n].voff);
    if(res.file != -1) actions.showPage(res.file,res.seg); //this.showPage(res.file,res.seg);
    this.setState({dataN:n});    
    //console.log(api_text.showText(n,this.state.toc));
  },
	render:function() {
		return <div>
          <Stacktoc className="stacktoc" textConverter={this.textConverter} showText={this.showText} showExcerpt={this.showExcerpt} 
          opts={{tocbar:"banner/bar.png",tocbar_start:"banner/bar_start.png",stopAt:"་",
          maxitemlength:42,tocstyle:"vertical_line"}}
          data={this.state.toc} />
      	</div>;
	}
});

module.exports=Catalogarea;

