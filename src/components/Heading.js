class Heading extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.query == 'h1') return <h1 className={this.props.class}>{this.props.content}</h1>;
    else if (this.props.query == 'h2') return <h2 className={this.props.class}>{this.props.content}</h2>;
    else return <h3 className={this.props.class}>{this.props.content}</h3>
  }
}

export default Heading;