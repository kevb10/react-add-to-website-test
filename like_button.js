var e = React.createElement;
console.log("I AM WORKING");
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  	render() {
      return 'Hello World!';
	}
}

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
