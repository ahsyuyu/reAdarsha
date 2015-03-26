var React=require("react");
var Reflux=require("reflux");
var actions_toc=require("./actions_toc");
var store_toc=require("./store_toc");
var store_text=require("./store_text");
//var api_text=require("./api_text");
var Fileinstaller=require("ksana2015-webruntime").fileinstaller;
var require_kdb=[{
  filename:"jiangkangyur.kdb"  , 
  url:"http://ya.ksana.tw/kdb/jiangkangyur.kdb" , desc:"jiangkangyur"
}];
var Tabarea=require("./tabarea.jsx");
var Textarea=require("./textarea.jsx");

var Maincomponent = React.createClass({
  mixins:[Reflux.listenTo(store_toc,"onStoreToc")],
  getInitialState: function() {
  	fi=this.openFileinstaller(false);
  	return {fi:fi};
  },
  onStoreToc: function(data){
  	if(data.length) this.setState({toc:data});
    else this.setState({db:data});
  },
  componentWillUnmount:function() {
    window.removeEventListener('resize', this.handleResize);
  },
  componentDidMount:function() {
    var that=this;
    setTimeout(function(){
      that.hideBanner();
    },5000);
    //window.onhashchange = function () {that.goHashTag();} 
    window.addEventListener('resize', this.handleResize);
  }, 
  hideBanner:function() {
    var header=$("div.header");
    var that=this;
    header.animate({height: "0px"}, 2000, function() {
      header.hide();
      that.bannerHeight=0;
      that.setBannerHeight(0);
    });
  },
  handleResize:function() {
    clearTimeout(this.resizetimer);
    var that=this;
    this.resizetimer=setTimeout(function(){
      that.setBannerHeight(that.bannerHeight);
    },300);
  },
  openFileinstaller:function(autoclose) {
    if (window.location.origin.indexOf("http://127.0.0.1")==0) {
      require_kdb[0].url=window.location.origin+window.location.pathname+"jiangkangyur.kdb";
    }
    return <Fileinstaller quota="512M" autoclose={autoclose} needed={require_kdb} 
                     onReady={actions_toc.ready()}/>
  },
  render: function() {
    return <div className="row">
      <div className="header">
        <img width="100%" src="./banner/banner.png"/>
      </div>
      {this.state.fi}
      <div className="col-md-4">
      	<Tabarea db={this.state.db} toc={this.state.toc}/>
      </div>
      <div className="col-md-8">
      	<Textarea />
      </div>	
    </div>;
  }
});
module.exports=Maincomponent;