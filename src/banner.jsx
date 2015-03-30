var React=require("react");
var Reflux=require("reflux");

var Banner=React.createClass({
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
  render:function() {
 	return <div className="header">
      <img width="100%" src="./banner/banner.png"/>
    </div>
	}
});

module.exports=Banner;