class Para extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <p className={this.props.class}>{this.props.content}</p>;
  }
}

export default Para;