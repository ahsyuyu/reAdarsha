var React=require("react");
var Reflux=require("reflux");
var Showaddress = React.createClass({
  getAddress: function(){
    return "render address";
  },
  render: function() {   
   return <div>
            <span id="address" dangerouslySetInnerHTML={{__html:this.getAddress()}}></span>
          </div>
  }  
});
module.exports=Showaddress;