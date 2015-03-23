var React=require("react");
var Reflux=require("reflux");
var actions=require("./actions");
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
  mixins:[Reflux.listenTo(store_toc,"onStore")],
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
  render: function() {
    return <div className="row">
      {this.state.fi}
      <div className="col-md-4">
      	<Tabarea />
      </div>
      <div className="col-md-8">
      	<Textarea />
      </div>	
    </div>;
  }
});
module.exports=Maincomponent;