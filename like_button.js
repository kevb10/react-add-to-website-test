var e = React.createElement;

console.log("🚀🚀I AM WORKING🚀🚀");

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  	render() {
      return 'Hello World!';
	}
}

var domContainer = document.querySelector('#hello_world_container');
ReactDOM.render(e(HelloWorld), domContainer);
