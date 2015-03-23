var React=require("react");
var Reflux=require("reflux");
var actions=require("./actions");
var store=require("./store");
var kse=require("ksana-search"); // Ksana Search Engine (run at client side)
var Fileinstaller=require("ksana2015-webruntime").fileinstaller;
var require_kdb=[{
  filename:"jiangkangyur.kdb"  , 
  url:"http://ya.ksana.tw/kdb/jiangkangyur.kdb" , desc:"jiangkangyur"
}];
var Tabarea=require("./tabarea.jsx");
var Textarea=require("./textarea.jsx");

var Maincomponent = React.createClass({
  mixins:[Reflux.listenTo(store,"onStore")],
  getInitialState: function() {
  	fi=this.openFileinstaller(false);
  	return {fi:fi};
  },
  onStore: function(data){
  	if(data.length) this.setState({toc:data});
    else this.setState({db:data});
  },
  openFileinstaller:function(autoclose) {
    if (window.location.origin.indexOf("http://127.0.0.1")==0) {
      require_kdb[0].url=window.location.origin+window.location.pathname+"jiangkangyur.kdb";
    }
    return <Fileinstaller quota="512M" autoclose={autoclose} needed={require_kdb} 
                     onReady={actions.ready()}/>

  },
  showText:function(n) {
    var res=this.state.db.fileSegFromVpos(this.state.toc[n].voff);
    if(res.file != -1) this.showPage(res.file,res.seg);
    this.setState({dataN:n});    
  },
  showPage:function(f,p,tofind) {  
    //window.location.hash = this.encodeHashTag(f,p);
    var that=this;
    var pagename=this.state.db.getFileSegNames(f)[p];
    this.setState({scrollto:pagename});

    kse.highlightFile(this.state.db,f,{q:this.state.tofind || tofind,token:true},function(data){//kde
      that.setState({bodytext:data,page:p});
    });
  }, 
  render: function() {

    return <div className="row">
      {this.state.fi}
      <div className="col-md-4">
      	<Tabarea toc={this.state.toc} showText={this.showText} />
      </div>
      <div className="col-md-8">
      	<Textarea />
      </div>	
    </div>;
  }
});
module.exports=Maincomponent;