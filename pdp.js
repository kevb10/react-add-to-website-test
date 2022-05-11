
var e = React.createElement;

class PDP extends React.Component {
  constructor(props) {
    super(props);
  }

  	render() {
      return 'Hello World!';
	}
}

var domContainer = document.querySelector('#pdp');
ReactDOM.render(e(PDP), domContainer);
