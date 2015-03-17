var React=require("react");
var Tabarea=require("./tabarea.jsx");
var Textarea=require("./textarea.jsx");

var Maincomponent = React.createClass({
  render: function() {
    return <div className="row">
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