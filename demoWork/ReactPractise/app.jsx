// var HelloComponent = React.createClass({
//   handleClick: function() {
//     console.log('Clicked');
//   },
//   render: function() {
//     con st style = {color: 'blue'};
//     var id = 2;
//     return (
//       <div style={style}>
//         <h1>Hello, {this.props.name}</h1>
//         <input type="button" className="btn btn-primary" onClick={this.handleClick} value="Click Me!" />
//       </div>
//     );
//   }
// });

// var AppComponent = React.createClass({
//   getInitialState: function() {
//     return {names: []};
//   },
//   retrieveData: function() {
//     console.log('retrieving Data');
//   },
//   componentDidMount: function() {
//     setTimeout(function() {
//       this.setState({names: ['World!', 'React!']});
//     }.bind(this),1000);
//   },
//   render: function() {
//     var helloComponents = this.state.names.map(function(d) {
//       return (
//         <HelloComponent name={d} />
//       );
//     });

//     return (
//       <div>
//         {helloComponents.length !== 0 ? helloComponents : <small>Loading Data!</small>}
//       </div>
//     );
//   }
// });

//   ReactDOM.render(<AppComponent />, document.getElementById('content'));

var MyComponent=React.createClass({
render: function() {
  return (
    <div> <SubComponent name="hey shyam" />
    </div>
  );
}
});
var data={name:"Shyam", Age:22}
if(2==2){

  data={field:"shyam"}
}
else{
  data={field:22}
}
var SubComponent=React.createClass({
render:function(){
  return(
    <div>
      {this.props.name} 
      <ThirdComponent data={data}/>
       
    </div>
    );
}
});

var ThirdComponent=React.createClass({
render:function(){
  return(
    <h1> {this.props.data.field}
    
    </h1>
    );
}
});

ReactDOM.render(<MyComponent  />, document.getElementById('content'));






















