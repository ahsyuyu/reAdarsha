var React=require("react");
var Reflux=require("reflux");
var store_text=require("./store_text");
var Showseg=require("./showseg.jsx");
var Showtext=React.createClass({
	mixins:[Reflux.listenTo(store_text,"onStoreText")],
	getInitialState: function() {
		return {text:""}
	},
	onStoreText: function(data){
		if(typeof data != "boolean") this.setState({text:data});
    },
	getSegsFromFile: function(file) {
		var segs=[], pb=[], text=[];
		var that=this;
		var out="",lastidx=0,nextpagekeepcrlf=false;

		file.replace(/<pb n="(.*?)"><\/pb>/g,function(m,m1,idx){
		  var pagetext=file.substring(lastidx+m.length,idx);
		  pb.push(m1);
		  text.push(pagetext);
		  lastidx=idx;
		});
		var t1=file.substr(file.lastIndexOf("<pb"));
		var t=t1.replace(/<pb n="(.*?)"><\/pb>/,"");
		text.push(t);
		pb.map(function(item,i){
		  segs.push({pb:item,text:text[i+1]});
		});
		//console.log("pb:",pb.length,"text:",text.length);
		return segs;
	},
	render:function() {
		var s=this.getSegsFromFile(this.state.text);
	    var segs=[];
	    s.map(function(item){
	      segs.push(<Showseg segs={item} />);
	    });
		//<div dangerouslySetInnerHTML={{__html:this.state.bodytext.text}}></div>
		return <div className="pagetext" >
      		{segs}
      	</div>
	}
});

module.exports=Showtext;