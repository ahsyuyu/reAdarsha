var React=require("react");
var Stacktoc=require("ksana2015-stacktoc").component;  //載入目錄顯示元件
var Searcharea=require("./searcharea.jsx");
var Catalogarea=require("./catalogarea.jsx")
var Tabarea=React.createClass({
	textConverter:function(t) {
		if(this.props.wylie == true) return tibetan.toWylie(t,null,false); 
		return t; 
	}
	,render:function() {
		return <div>
      	  <ul className="nav nav-tabs" role="tablist">
            <li className="active"><a href="#Catalog" role="tab" data-toggle="tab" title="Catalog"><img width="25" src="./banner/icon-read.png"/></a></li>
            <li><a href="#Search" role="tab" onClick={this.startsearch} data-toggle="tab" title="Search"><img width="25" src="./banner/search.png"/></a></li>              
          </ul>

          <div className="tab-content" ref="tab-content">
            <div className="tab-pane fade in active" id="Catalog">               
            	<Catalogarea db={this.props.db} toc={this.props.toc}/>
            </div> 
            <div className="tab-pane fade" id="Search">
                <Searcharea />
            </div> 
          </div> 
      	</div>;
	}
});

module.exports=Tabarea;